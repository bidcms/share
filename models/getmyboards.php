<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: upload.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
$uid=$session->get('uid');
$b['boards']=array();
if($uid>0)
{
	
	$boards=array(
		array('board_id'=>0,'user_id'=>$uid,'title'=>'默认画板','description'=>'','category_id'=>'system','category_name'=>'系统默认','seq'=>'1','pin_count'=>'0','follow_count'=>'0','created_at'=>'0','updated_at'=>'0','is_private'=>'0'));
	$query=$db->query("select * from ".tname('board')." where user_id=".$uid);
	while($rows=$db->fetch_array($query))
	{
		$boards[]=$rows;
	}
	$b['boards']=$boards;
}
echo bidcms_encode($b);