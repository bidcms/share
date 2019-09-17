<?php
/*
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms

	$Id: getinfo.php 2010-08-24 10:42 $
*/
include('../inc/common.simple.php');
//分类id
$bigcateid=empty($_REQUEST['pid'])?0:intval($_REQUEST['pid']);

if($bigcateid)
{
	$sql="select catename,level,parentid,id from `".$bidcmstable_prefix."catelist` where parentid= ".$bigcateid." order by sortorder desc";
	$cates=array();
	$query=mysql_query($sql);
	while($data=mysql_fetch_assoc($query))
	{
		$data['catename']=$data['catename'];
		$cates[]=$data;
	}
	$level=0;
	if(!empty($cates[0]['level']))
	{
		$level = $cates[0]['level'];
	}

	$return_arr = array('level'=>$level,'info'=>$cates);
	
	echo json_encode($return_arr);	
}
?>