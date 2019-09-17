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
class following_controller
{
	function following_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function index_action()
	{
		
		
	}
	function boards_action()
	{
		global $session;
		$uid=$session->get('uid');
		if($uid>0)
		{
			$boards=getboards();
			include template('following_boards');
		}
		else
		{
			sheader('index.php');
		}
		
	}
	function pins_action()
	{
		global $session;
		$uid=$session->get('uid');
		if($uid>0)
		{
			$pins=getallpins(0,'and user_id='.$uid);
			include template('following_pins');
		}
		else
		{
			sheader('index.php');
		}
		
	}
	
}
