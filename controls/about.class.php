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
class about_controller
{

	function about_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function index_action()
	{
		include template('about_index');
		
	}
	function goodies_action()
	{
		include template('about_tools');
		
	}
	function disclaimer_action()
	{
		include template('about_disclaimer');
		
	}
	function links_action()
	{
		include template('about_links');
		
	}
	function contact_action()
	{
		include template('about_contact');
		
	}
	function etiquette_action()
	{
		include template('about_etiquette');
		
	}
	function help_action()
	{
		include template('about_help');
		
	}
	
}
