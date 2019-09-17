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
class pins_controller
{
	function pins_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function all_action()
	{
		$cursor=intval($_REQUEST['page']);
		$pin['pins']=getallpins($cursor);
		$pin["filter"]="pin:category:all";
		$pin["promotions"]='null';
		echo bidcms_encode($pin);
	}
	function zoom_action()
	{
		$pid=intval($_GET['id']);
		$pin=getpin($pid);
		include template('pins_zoom');
	}
	function edit_action()
	{
		global $db,$session;
		$pinid=isset($_REQUEST['id']) && $_REQUEST['id']>0?$_REQUEST['id']:0;
		$uid=$session->get('uid');
		if(submitcheck('commit'))
		{
			if($pinid>0 && $uid>0)
			{
				$board_id=intval($_POST['board_id']);
				$text=trim(strip_tags($_POST['text']));
				$link=trim(strip_tags($_POST['link']));
				if(!empty($text))
				{
					preg_match("#.*?(http://.*?\.swf).*?#",str_replace("\n","",$text),$match);
					if(!empty($match[1]))
					{
						$video=$match[1];
					}
				}
				if(!empty($link))
				{
					$p=parse_url($link);
					$source=str_replace('www.','',isset($p['host'])?$p['host']:$link);
				}
				else
				{
					$source='';
				}
				$sql="update ".tname('pin')." set ";
				$sql.=" raw_text='".$text."',link='".$link."',source='".$source."',orig_source='".$video."'";
				if($board_id>1)
				{
					$sql.=",board_id=".$board_id;
				}
				$sql.=" where pin_id=".$pinid." and user_id=".$uid;
				$db->query($sql);
				if($db->affected_rows())
				{
					$db->query("update ".tname('board')." set pin_count=pin_count+1 where board_id=".$board_id);
					echo '{"err":0,"msg":"操作成功"}';
					exit;
				}
				else
				{
					echo '{"err":1,"msg":"数据无变化"}';
					exit;
				}
			}
			else
			{
				echo '{"err":1,"msg":"参数错误或未登录"}';
				exit;
			}
		}
		else
		{
			$pin=array();
			if($pinid>0 && $uid>0)
			{
				$pin=getpin($pinid);
				include template('pins_edit');
			}
			else
			{
				sheader("index.php");
			}
		}
	}
	function item_action()
	{
		$pid=isset($_GET['id'])?intval($_GET['id']):0;
		$pin=array();
		if($pid>0)
		{
			$pin=getpin($pid,1,1,1,1,1,1);
			if(isset($pin['pin_id']))
			{
				if(isset($pin['board_id']) && $pin['board_id']>0)
				{
					$pin['board']=getboard($pin['board_id']);
					$pin['board']['pins']=getboardpins($pin['board_id']);
					/*$pin['board']['repins']=getallpins(0,'and via='.$pin['pin_id']);
					foreach($pin['board']['repins'] as $k=>$v)
					{
						$pin['board']['repins'][$k]['board']=getboard($v['board_id']);
						$pin['board']['repins'][$k]['board']['pins']=getboardpins($pin['board_id'],3);
					}*/
				}
				else
				{
					$pin['board']=array();
					$pin['board']['pins']=array();
				}
				$pin['siblings']=getallpins(0,'and source="'.$pin['source'].'" and pin_id!="'.$pin['pin_id'].'"','',3);
				include template('pins_item');
			}
			else
			{
				sheader('index.php');
			}
		}
		else
		{
			sheader('index.php');
		}
	}
	function following_action()
	{
	}
	function popular_action()
	{
	}
	function favorite_action()
	{
	}
	
	function go_action()
	{
		global $db;
		$pinid=isset($_REQUEST['id']) && $_REQUEST['id']>0?$_REQUEST['id']:0;
		if($pinid>0)
		{
			$pin=$db->fetch_first("select pin_id,via,board_id,file_id,link from ".tname('pin')." where pin_id='".$pinid."'");
			if(!empty($pin['link']))
			{
				header("location:".$pin['link']);
			}
			else
			{
				echo '<script type="text/javascript">
				<!--
					window.location.reload();
				//-->
				</script>';
			}
		}
		else
		{
			echo '<script type="text/javascript">
			<!--
				window.location.reload();
			//-->
			</script>';
		}
	}
	function from_action()
	{
		$site=isset($_REQUEST['site']) && !empty($_REQUEST['site'])?$_REQUEST['site']:'';
		if(!empty($site))
		{
			header("location:http://".$site);
		}
		else
		{
			sheader("index.php",3,"网址为空");
		}
	}
	function delete_action()
	{
		global $db,$session;
		$pinid=isset($_REQUEST['id']) && $_REQUEST['id']>0?$_REQUEST['id']:0;
		$uid=$session->get('uid');
		if($pinid>0 && $uid>0)
		{
			$pin=$db->fetch_first("select pin_id,via,board_id,file_id from ".tname('pin')." where pin_id='".$pinid."' and user_id=".$uid);
			if($pin['pin_id']>0)
			{
				
				if(empty($pin['via']))
				{
					$db->query("update ".tname('file')." set isused=0 where file_id='".$pin['file_id']."'");
				}
				$db->query("delete from ".tname('pin')." where pin_id='".$pinid."' and user_id='".$uid."'");
				
				if($db->affected_rows())
				{
					echo '{"err":0,"msg":"操作成功"}';
					exit;
				}
				else
				{
					echo '{"err":1,"msg":"操作失败"}';
					exit;
				}
				echo '{"err":0,"msg":"操作成功"}';
				exit;
			}
			else
			{
				echo '{"err":1,"msg":"无权限操作"}';
				exit;
			}
		}
		else
		{
			echo '{"err":1,"msg":"参数错误或未登录"}';
			exit;
		}
	}
	function comments_action()
	{
		$pinid=intval($_GET['id']);
		if($pinid)
		{
			echo $pinid;
		}
	}
	
	function bookmarket_action()
	{
		global $db,$session;
		$uid=$session->get('uid');
		$session->set("temppin",$_GET);
		if($uid>0)
		{
			$params=array();
			if(!empty($_GET['media']))
			{
				if(isset($file['id']) && $file['id']>0)
				{
					$params['media']=$_GET['media'];
					$params['url']=$_GET['url'];
					$params['title']=$_GET['title'];
					$params['text']=!empty($_GET['description'])?$_GET['description']:$_GET['title'];
					$params['media_type']=$_GET['media_type'];
					$params['video']=$_GET['video'];
					$params['file_ticket']=$file['id'];
					$params["minWidth"] = $file['width'];
					$params["minHeight"] = $file['height'];
				}
			}
			include template('pins_bookmarket');
		}
		else
		{
			$err['error']=array();
			$err['email']='';
			$err['referer']='';
			$err['is_taobao']=false;
			sheader("index.php?con=ajax&act=login");
		}
	}
}
