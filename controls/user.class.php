<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: ajax.class.php 2010-08-24 10:42 $
*/
if(!defined('IN_BIDCMS')) {
	exit('Access Denied');
}
class user_controller
{
	function user_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function index_action()
	{
		$this->boards_action();
	}
	function pins_action()
	{
		global $session;
		$uid=$session->get('uid');
		$userpins=array();
		if($uid>0)
		{
			$userpins=getuser($uid,1,1,1,1,1);
			$userpins['feeds']=getfeeds($uid);
			$userpins['pins']=getallpins(0,'and user_id='.$uid);
			$pins=bidcms_encode($userpins);
			include template('user_pins');
		}
		else
		{
			sheader('index.php');
		}
		
	}
	function boards_action()
	{
		global $session;
		$uid=$session->get('uid');
		if($uid>0)
		{
			$userboards=$GLOBALS['app']['req']['user'];
			$userboards['feeds']=getfeeds($uid);
			$userboards['boards']=getboards(0,'and user_id='.$uid);
			include template('user_boards');
		}
		else
		{
			sheader('index.php');
		}
		
	}
	
	function login_action()
	{
		global $db,$session;
		if(submitcheck('commit'))
		{
			$data['passwd']=md52($_POST['password']);
			$data['email']=trim(strip_tags($_POST['email']));
			$userinfo=$db->fetch_first("select user_id,username from ".tname('user')." where email='".$data['email']."' and passwd='".$data['passwd']."'");
			if($userinfo['user_id']>0)
			{
				$session->set('uid',$userinfo['user_id']);
				echo '{}';
				exit;
			}
			else
			{
				echo '{"err":403,"msg":"邮箱或密码错误"}';
				exit;
			}
		}
		else
		{
			include template('user_login');
		}
	}
	function logout_action()
	{
		global $session;
		$session->del('uid');
		$backurl=isset($_GET['url'])?$_GET['url']:'index.php';
		sheader($backurl,3,"安全退出");
	}
	function register_action()
	{
		global $db,$session;
		if(submitcheck('commit'))
		{
			$data['username']=trim(strip_tags($_POST['username']));
			$data['passwd']=md52($_POST['password']);
			$data['email']=trim(strip_tags($_POST['email']));
			//判断邮箱是否注册过
			$check=$db->fetch_first("select user_id from ".tname('user')." where email='".$data['email']."'");
			if($check['user_id']>0)
			{
				echo '{"err":102,"msg":"邮箱已经被占用"}';
				exit;
			}
			$check=$db->fetch_first("select user_id from ".tname('user')." where username='".$data['username']."'");
			if($check['user_id']>0)
			{
				echo '{"err":102,"fieldErrors":{"username":["用户名已经被占用"]}}';
				exit;
			}
			$avatar=$session->get('insertuser');
			$db->query("insert into ".tname('user')."(username,passwd,email,avatar_id,created_at) values('".$data['username']."','".$data['passwd']."','".$data['email']."','".$avatar['file']."','".time()."')");
			$uid=$db->insert_id();
			if($uid>0)
			{
				if($avatar['file']>0)
				{
					$db->query("update ".tname('file')." set isused=1 where file_id=".$avatar['file']);
				}
				if($avatar['bind']>0)
				{
					$db->query("update ".tname('user_bind')." set user_id=".$uid." where bind_id=".$avatar['bind']);
				}
				$session->del('insertuser');
				$session->set('uid',$uid);
				$params=$session->get('temppin');
				$backurl=!empty($params)?"index.php?con=pins&act=bookmarket&".http_build_query($params):"index.php?con=user";
				echo '{"err":0,"redirect":"'.$backurl.'"}';
				exit;
			}
			else
			{
				echo '{"err":101,"msg":"注册失败"}';
				exit;
			}
		}
		else
		{
			include template('user_register');
		}
	}
	function weibo_action()
	{
		global $db,$session;
		include_once( 'models/weibo/config.php' );
		include_once( 'models/weibo/saetv2.ex.class.php' );

		$o = new SaeTOAuthV2( WB_AKEY , WB_SKEY,NULL,NULL );

		if (isset($_REQUEST['code'])) {
			$keys = array();
			$keys['code'] = $_REQUEST['code'];
			$keys['redirect_uri'] = WB_CALLBACK_URL;
			try {
				$token = $o->getAccessToken( 'code', $keys ) ;
				$_SESSION['token'] = $token;
			} catch (OAuthException $e) {
				sheader("index.php?con=user&act=siteregister",3,"微博绑定失败");
			}
		}
		if ($token) 
		{
			setcookie( 'weibojs_'.$o->client_id, http_build_query($token) );
			$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['token']['access_token']);
			$uid_get = $c->get_uid();
			
			$binduid=$uid_get['uid'];
			if(empty($binduid))
			{
				sheader("index.php?con=user&act=siteregister",3,"微博绑定失败");
			}
			//查询是否已经绑定
			$user=array('user_id'=>0);
			$userinfo=$db->fetch_first("select * from ".tname('user_bind')." where bind_user_id='".$binduid."' and service_name='weibo'");
			if($userinfo['user_id']>0)
			{
				$user=$db->fetch_first("select user_id from ".tname('user')." where user_id=".$userinfo['user_id']);
				if($user['user_id'])
				{
					//准备登录
					$session->set('uid',$user['user_id']);
					$params=$session->get('temppin');
					$backurl=!empty($params)?"index.php?con=pins&act=bookmarket&".http_build_query($params):"index.php?con=user";
					sheader($backurl);
				}
			}
			else
			{
				$user_message = $c->show_user_by_id($binduid);//根据ID获取用户等基本信息
				/*$user_message=array("id"=>"1644360034","idstr"=>"1644360034","screen_name"=>"BidCms开源竞拍","name"=>"BidCms开源竞拍","province"=>"11","city"=>"1","location"=>"北京东城区","description"=>"BidCms电子商务解决方案,关注电子商务最新前沿","url"=>"","profile_image_url"=>"http://tp3.sinaimg.cn/1644360034/50/5645693683/0","profile_url"=>"phpup","domain"=>"phpup","weihao"=>"","gender"=>"f","followers_count"=>"109","friends_count"=>"91","statuses_count"=>"33","favourites_count"=>"0","created_at"=>"TueSep0122:30:42+08002009","following"=>"","allow_all_act_msg"=>"","geo_enabled"=>"1","verified"=>"","verified_type"=>"-1","remark"=>"","status"=>"Array(","created_at"=>"WedDec0514:38:52+08002012","id"=>"3519885374271959","mid"=>"3519885374271959","idstr"=>"3519885374271959","text"=>"我刚刚在@时间拍卖行为@海源导演的请资深广告导演帮你策划时间拍卖，出价13.00元，你也想拍下他的时间就不要错过；-http://t.cn/zjIFyui","source"=>'<a href="http://app.weibo.com/t/feed/45rYLK" rel="nofollow">时间拍卖</a>',"favorited"=>"","truncated"=>"","in_reply_to_status_id"=>"","in_reply_to_user_id"=>"","in_reply_to_screen_name"=>"","geo"=>"","reposts_count"=>"0","comments_count"=>"0","attitudes_count"=>"0","mlevel"=>"0","visible"=>"Array(","type"=>"0","list_id"=>"0))","allow_all_comment"=>"1","avatar_large"=>"http://tp3.sinaimg.cn/1644360034/180/5645693683/0","verified_reason"=>"","follow_me"=>"","online_status"=>"0","bi_followers_count"=>"33","lang"=>"zh-cn","star"=>"0","mbtype"=>"0","mbrank"=>"0","block_word"=>"0");*/
				//准备绑定
				if($userinfo['bind_id']<1)
				{
					$db->query("insert into ".tname('user_bind')."(service_name,bind_user_id,bind_user,created_at,token,tsercet) values('weibo','".$binduid."','".$user_message['screen_name']."','".time()."','".$token['access_token']."','')");
					$insertid=$db->insert_id();
				}
				else
				{
					$insertid=$userinfo['bind_id'];
				}
				$page['binding']=array();
				$page['binding']['user_info']=array();
				if($insertid>0)
				{
					$page['binding']=array('bind_id'=>$insertid,'user_id'=>null,'service_name'=>'weibo','auth_type'=>'oauth2','created_at'=>time());
					$page['binding']['auth_token']=array('token'=>$token['access_token'],'expires_in'=>$token['expires_in'],'expired_at'=>time());
					$page['binding']['user_info']=array('id'=>$binduid,'username'=>$user_message['screen_name'],'email'=>null);
					$page['binding']['user_info']['original']=bidcms_encode($user_message);
					if(!empty($user_message['avatar_large']))
					{
					//保存头像
					$avatar=_loadimg($user_message['avatar_large']);
					$session->set('insertuser',array('file'=>$avatar['id'],'bind'=>$insertid));
					$page['binding']['user_info']['avatar']=$avatar;
					}
				}
				
				include template('user_bind');
			}
		}
	}
	function siteregister_action()
	{
		include template('user_siteregister');
	}
	function profile_action()
	{
		global $db,$app,$session;
		$user=$app['req']['user'];
		$uid=$session->get('uid');
		$error=array();
		if($uid>0)
		{
			if(submitcheck('commit'))
			{
				$username=trim(strip_tags($_POST['user']['username']));
				$email=trim(strip_tags($_POST['user']['email']));
				$urlname=trim(strip_tags($_POST['user']['urlname']));
				$location=trim(strip_tags($_POST['profile']['location']));
				$avatar_id=$session->get('fileid');
				$db->query("update ".tname("user")." set username='".$username."',email='".$email."',urlname='".$urlname."',location='".$location."',avatar_id='".$avatar_id."' where user_id='".$uid."'");
				$db->query("update ".tname("file")." set isused=1 where file_id='".$avatar_id."'");
				$profile_about=trim(strip_tags($_POST['profile']['about']));
				$profile_location=trim(strip_tags($_POST['profile']['location']));
				$profile_url=trim(strip_tags($_POST['profile']['url']));
				$pro=$db->fetch_first("select user_id from ".tname('user_profile')." where user_id='".$uid."'");
				if(!isset($pro['user_id']))
				{
					$db->query("insert into ".tname("user_profile")."(about,location,url,user_id) values('".$profile_about."','".$profile_location."','".$profile_url."','".$uid."')");
				}
				else
				{
					$db->query("update ".tname("user_profile")." set about='".$profile_about."',location='".$profile_location."',url='".$profile_url."' where user_id='".$uid."'");
				}
				$error=array('info'=>array('成功保存了帐号设置'));
				include template('user_profile');
			}
			else
			{
				include template('user_profile');
			}
		}
		else
		{
			sheader("index.php");
		}
	}
	function password_action()
	{
		global $db,$app,$session;
		
		$uid=$session->get('uid');
		$error=array();
		$user=$app['req']['user'];
		if($uid>0)
		{
			if(submitcheck('commit'))
			{
				//判断两次密码一致
				$newpass=$_POST['password']['new'];
				$oldpass=$_POST['password']['old'];
				$confirmpass=$_POST['password']['confirm'];
				if(!empty($newpass))
				{
					if($newpass!=$confirmpass)
					{
						$error=array('error'=>array('两次密码不一致'));
					}
					if(!empty($oldpass))
					{
						//查旧密码
						$userinfo=$db->fetch_first("select user_id from ".tname('user')." where user_id=".$uid." and passwd='".md52($oldpass)."'");
						if($userinfo['user_id']>0)
						{
							$db->query("update ".tname('user')." set passwd='".md52($newpass)."' where user_id=".$uid." and passwd='".md52($oldpass)."'");
							sheader("index.php?con=user&act=profile");
						}
						else
						{
							$error=array('error'=>array('旧密码错误'));
						}
					}
					else
					{
						$error=array('error'=>array('旧密码不能为空'));
					}
				}
				else
				{
					$error=array('error'=>array('新密码不能为空'));
					
				}
				if(!empty($error))
				{
					include template('user_password');
				}
			}
			else
			{
				include template('user_password');
			}
		}
		else
		{
			sheader("index.php");
		}
	}
	function likes_action()
	{
		global $session;
		$uid=$session->get('uid');
		$userpins=array();
		if($uid>0)
		{
			$userpins=getuser($uid,1,1,1,1,1);
			$userpins['feeds']=getfeeds($uid);
			$userpins['pins']=getallpins(0,'and user_id='.$uid);
			$pins=bidcms_encode($userpins);
			include template('user_likes');
		}
		else
		{
			sheader('index.php');
		}
	}
	function followers_action()
	{
		echo '功能开发中，欢迎定制。。。<a href="index.php">返回首页</a>';
	}
	function following_action()
	{
		echo '功能开发中，欢迎定制。。。<a href="index.php">返回首页</a>';
	}
	function invites_action()
	{
		echo '功能开发中，欢迎定制。。。<a href="index.php">返回首页</a>';
	}
	function friends_action()
	{
		echo '功能开发中，欢迎定制。。。<a href="index.php">返回首页</a>';
	}
}
