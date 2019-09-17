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
class ajax_controller
{
	function ajax_controller()
	{
	}
	function all_action()
	{
		$cursor=isset($_REQUEST['page'])?intval($_REQUEST['page']):0;
		$pin['pins']=getallpins($cursor);
		$pin["filter"]="pin:category:all";
		$pin["promotions"]='null';
		echo bidcms_encode($pin);
	}
	function boards_action()
	{
		$cursor=isset($_REQUEST['page'])?intval($_REQUEST['page']):0;
		$boards['boards']=getboards($cursor,'','',5);
		$boards["filter"]="board:category:all";
		$boards["promotions"]='null';
		echo bidcms_encode($boards);
	}
	function board_action()
	{
		$cursor=isset($_REQUEST['page'])?intval($_REQUEST['page']):0;
		$id=isset($_GET['id'])?$_GET['id']:0;
		$pin['pins']=getallpins($cursor,'and board_id='.$id);
		$pin["filter"]="pin:category:all";
		$pin["promotions"]='null';
		echo bidcms_encode(array('board'=>$pin));
	}
	function repin_action()
	{
		$pin_id=intval($_GET['pinid']);
		$pin['pin']=getpin($pin_id);
		echo bidcms_encode($pin);
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
				$params=$session->get('temppin');
				if(!empty($params))
				{
					sheader("index.php?con=pins&act=bookmarket&".http_build_query($params));
				}
			}
			else
			{
				$err['error']=array("error"=>"用户名或密码错误");
				$err['email']=$data['email'];
				$err['referer']='index.php?con=ajax&act=login';
				$err['is_taobao']=false;
				include template('ajax_login');
				exit;
			}
		}
		else
		{
			$err['error']=array();
			$err['email']='';
			$err['referer']='';
			$err['is_taobao']=false;
			include template('ajax_login');
		}
	}
}
