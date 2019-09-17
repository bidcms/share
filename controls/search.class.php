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
class search_controller
{

	function search_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function index_action()
	{
		include template('search_all');
		
	}
	function shiji_action()
	{
		include template('search_all');
		
	}
	function boards_action()
	{
		include template('search_all');
		
	}
	function people_action()
	{
		include template('search_all');
		
	}
	
	
}
