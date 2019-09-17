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
class markets_controller
{
	function markets_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function index_action()
	{
		echo '功能开发中，欢迎定制。。。<a href="index.php">返回首页</a>';
	}
}
