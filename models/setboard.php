<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: setboard.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
include '../inc/pin.inc.php';
$category='';
$categoryname='';
$title=trim(strip_tags($_POST['title']));
if(isset($_POST['category']) && !empty($_POST['category']))
{
	$query=$db->query("select * from ".tname('cate'));
	while($rows=$db->fetch_array($query))
	{
		$cate[$rows['cateindex']]=$rows['catename'];
	}
	if(in_array($_POST['category'],array_keys($cate)))
	{
		$category=$_POST['category'];
		$categoryname=$cate[$_POST['category']];
	}
}
$uid=$session->get('uid');
$board=array();
if($uid>0 && !empty($title))
{
		$db->query("insert into ".tname('board')." (user_id,title,created_at,updated_at,seq,category_id,category_name,is_private) values('".$uid."','".$title."','".time()."','".time()."','1','".$category."','".$categoryname."','0')");
		$affid=$db->insert_id();
		if($affid>0)
		{
			$board=getboard($affid,0);
		}
}
$b['board']=$board;
echo bidcms_encode($b);