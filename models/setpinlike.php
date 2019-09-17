<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: setpin.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
$id=isset($_GET['id']) && $_GET['id']>0?$_GET['id']:0;
$do=isset($_GET['do']) && in_array($_GET['do'],array('like','unlike'))?$_GET['do']:'like';
$uid=$session->get('uid');
if($id>0 && $uid>0)
{
	$notice=mysql_fetch_array(mysql_query("select notice_id,pin_id,mylike from ".tname("notice_pin")." where user_id=".$uid." and pin_id=".$id));
	if(isset($notice['notice_id']) && $notice['notice_id']>0)
	{
		if($do=='like')
		{
			if($notice['mylike']==0)
			{
				mysql_query("update ".tname('notice_pin')." set mylike=1 where notice_id=".$notice['notice_id']);
				mysql_query("update ".tname('pin')." set like_count=like_count+1 where pin_id=".$notice['pin_id']);
			}
			
		}
		elseif($do=='unlike')
		{
			mysql_query("update ".tname('notice_pin')." set mylike=0 where notice_id=".$notice['notice_id']);
			mysql_query("update ".tname('pin')." set like_count=like_count-1 where pin_id=".$notice['pin_id']);
		}
	}
	else
	{
		if($do=='like')
		{
			mysql_query("insert into ".tname('notice_pin')."(pin_id,user_id,mylike) values('".$id."','".$uid."','1')");
			mysql_query("update ".tname('pin')." set like_count=like_count+1 where pin_id=".$id);
			
		}
	}
}
echo '1';
?>