<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: index.class.php 2010-08-24 10:42 $
*/
if(!defined('IN_BIDCMS')) {
	exit('Access Denied');
}
class boards_controller
{
	function boards_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}
	function index_action()
	{
		$boards=getboards();
		include template('boards_all');
	}
	function favorite_action()
	{
		$boards=getboards();
		include template('boards_all');
	}
	function videos_action()
	{
		$boards=getboards();
		include template('boards_all');
	}
	function popular_action()
	{
		$boards=getboards();
		include template('boards_all');
	}
	function setcate_action()
	{
		global $db,$session;
		$id=isset($_REQUEST['id'])?$_REQUEST['id']:0;
		$uid=$session->get('uid');
		if($uid>0 && isset($_POST['category']) && !empty($_POST['category']))
		{
			if(in_array($_POST['category'],array_keys($GLOBALS['cate'])))
			{
				$category=$_POST['category'];
				$categoryname=$GLOBALS['cate'][$_POST['category']]['catename'];
				if($id>0)
				{
					$db->query("update ".tname('board')." set category_id='".$category."',category_name='".$categoryname."' where board_id=".$id." and user_id=".$uid);
				}
			}
			echo '{"err":""}';
		}
		else
		{
			echo '{"err":"1","msg":"²Ù×÷Ê§°Ü"}';
		}
	}
	function item_action()
	{
		global $db,$session;
		$id=isset($_GET['id'])?intval($_GET['id']):0;
		$board=array();
		$board=getboard($id);
		if($id>0)
		{
			$query=$db->query("select * from ".tname('notice_board')." where follow=1 and board_id='".$id."'");
			$board['followers']=array();
			while($rows=$db->fetch_array($query))
			{
				$board['followers'][]=getuser($rows['user_id']);
			}
			$board['siblings']=array();
			if(isset($board['user_id']))
			{
				$board['user']=getuser($board['user_id']);
				$query=$db->query("select * from ".tname('board')." where user_id='".$board['user_id']."'");
				while($rows=$db->fetch_array($query))
				{
					$board['siblings'][]=$rows;
				}
			}
		}
		else
		{
			$board['user']=array();
			$board['followers']=array();
			$board['siblings']=array();
		}
		$board['pins']=getboardpins($id,20);
		
		include template('boards_item');
	}
	
	
	function del_action()
	{
		global $db,$session;
		$uid=$session->get('uid');
		$board=array();
		$bid=isset($_REQUEST['id']) && $_REQUEST['id']>0?intval($_REQUEST['id']):0;
		if($uid>0 && $bid>0)
		{
			$board=$db->fetch_first("select * from ".tname("board")." where board_id=".$bid." and user_id=".$uid);
			if($board['board_id']>0)
			{
				$query=$db->query("select pin_id,file_id,via from ".tname('pin')." where board_id=".$bid);
				$fids[0]=0;
				while($rows=$db->fetch_array($query))
				{
					if($rows['via']==0)
					{
						$fids[]=$rows['file_id'];
					}
				}
				$db->query("delete from ".tname('pin')." where board_id=".$bid);
				$db->query("delete from ".tname("file")." where file_id in (".implode(",",$fids).")");
				$db->query("delete from ".tname('board')." where board_id=".$bid);
				echo '{"err":0,"board":"²Ù×÷³É¹¦"}';
			}
			else
			{
				echo '{"err":1,"board":"²Ù×÷Ê§°Ü£¬»­°å²»´æÔÚ"}';
			}
		}
		else
		{
			echo '{"err":1,"board":"²Ù×÷Ê§°Ü£¬²ÎÊı´íÎó"}';
		}

	}
	function edit_action()
	{
		global $db,$session;
		$uid=$session->get('uid');
		$board=array();
		$bid=isset($_REQUEST['id']) && $_REQUEST['id']>0?intval($_REQUEST['id']):0;

		if($uid>0 && $bid>0)
		{
			if(submitcheck('commit'))
			{
				if(isset($_POST['category']) && !empty($_POST['category']))
				{
					if(in_array($_POST['category'],array_keys($GLOBALS['cate'])))
					{
						$category=$_POST['category'];
						$categoryname=$GLOBALS['cate'][$_POST['category']]['catename'];
					}
				}
				$title=trim(strip_tags($_POST['title']));
				$description=trim(strip_tags($_POST['description']));
				$sql="update ".tname('board')." set title='".$title."',description='".$description."'";
				if(!empty($category))
				{
					$sql.=",category_id='".$category."',category_name='".$categoryname."'";
				}
				$sql.=" where user_id=".$uid." and board_id=".$bid;
				$db->query($sql);
				echo '{"err":0,"board":{"board_id":"'.$bid.'"}}';
			}
			else
			{
				$board=getboard($bid);
				if(isset($board['board_id']) && $board['board_id']>0)
				{
				
					$board['user']=getuser($board['user_id']);
					include template('boards_edit');
				}
				else
				{
					sheader("index.php&con=user&act=boards");
				}
			}
		}
		else
		{
			sheader("index.php");
		}
	}
}
