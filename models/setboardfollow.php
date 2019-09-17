<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: setpin.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
$id=isset($_GET['id']) && $_GET['id']>0?$_GET['id']:0;
$do=isset($_GET['do']) && in_array($_GET['do'],array('follow','unfollow'))?$_GET['do']:'follow';
$uid=$session->get('uid');
if($id>0 && $uid>0)
{
	$notice=mysql_fetch_array(mysql_query("select notice_id,board_id,follow from ".tname("notice_board")." where user_id=".$uid." and board_id=".$id));
	if(isset($notice['notice_id']) && $notice['notice_id']>0)
	{
		if($do=='follow')
		{
			if($notice['follow']==0)
			{
				mysql_query("update ".tname('notice_board')." set follow=1 where notice_id=".$notice['notice_id']);
				mysql_query("update ".tname('board')." set follow_count=follow_count+1 where board_id=".$notice['board_id']);
			}
			
		}
		elseif($do=='unfollow')
		{
			mysql_query("update ".tname('notice_board')." set follow=0 where notice_id=".$notice['notice_id']);
			mysql_query("update ".tname('board')." set follow_count=follow_count-1 where board_id=".$notice['board_id']);
		}
	}
	else
	{
		if($do=='follow')
		{
			mysql_query("insert into ".tname('notice_board')."(board_id,user_id,follow) values('".$id."','".$uid."','1')");
			mysql_query("update ".tname('board')." set follow_count=follow_count+1 where board_id=".$id);
		}
	}
}
echo '1';
?>