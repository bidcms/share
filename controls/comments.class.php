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
class comments_controller
{
	function comments_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function delete_action()
	{
		global $db,$session;
		$commentid=isset($_REQUEST['cid']) && $_REQUEST['cid']>0?$_REQUEST['cid']:0;
		$pinid=isset($_REQUEST['id']) && $_REQUEST['id']>0?$_REQUEST['id']:0;
		$uid=$session->get('uid');
		if($commentid>0)
		{
			$comment=$db->fetch_first("select pin_id,user_id,comment_id from ".tname('comments')." where comment_id=".$commentid);
			if($comment['pin_id']>0)
			{
				$pin=$db->fetch_first("select pin_id,user_id from ".tname('pin')." where pin_id=".$comment['pin_id']);
				if(isset($pin['pin_id']) && $pin['pin_id']>0 && ($pin['user_id']==$uid || $comment['user_id']==$uid))
				{
					$db->query("delete from ".tname('comments')." where comment_id='".$commentid."'");
					if($db->affected_rows())
					{
						$db->query("update ".tname('pin')." set comment_count=comment_count-1 where pin_id=".$pinid);
						echo '{"err":0,"msg":"删除成功"}';
						exit;
					}
				}	
			}
		}
		
		echo '{"err":1,"msg":"删除失败"}';
		exit;
	}
	
}
