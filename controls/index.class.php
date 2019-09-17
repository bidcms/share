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
class index_controller
{
	function index_controller()
	{
		include ROOT_PATH.'./models/common.php';
	}

	function index_action()
	{
		global $session;
		$uid=$session->get('uid');
		//前20个推荐的采集
		$pins=bidcms_encode(getallpins());
		$userinfo=array();
		if($uid>0)
		{
			$userinfo=getuser($uid,0,1);
		}
		include template('index_all');
	}
	function all_action()
	{
		global $session;
		$uid=$session->get('uid');
		//前20个推荐的采集
		$pins=bidcms_encode(getallpins());
		$userinfo=array();
		if($uid>0)
		{
			$userinfo=getuser($uid,0,1);
		}
		include template('index_all');
	}
	function favorite_action()
	{
		global $session,$db;
		$cateid=isset($_GET['cid'])?($_GET['cid']):0;
		$cateindex=isset($_GET['cindex'])?($_GET['cindex']):'home';
		$category=array();
		
		if(!empty($cateid))
		{
			$query=$db->query("select catename,cateindex,customurl,categroup from ".tname('catelist')." where parentid='".$cateid."'");
			while($rows=$db->fetch_array($query))
			{
				$category[$rows['categroup']][]=$rows['catename'];
			}
		}
		$favcate=bidcms_encode($category);
		//前20个推荐的采集
		$pins=bidcms_encode(getallpins());
		include template('index_favorite');
	}
	function popular_action()
	{
		global $session,$db;
		//前20个视频
		$pins=bidcms_encode(getallpins(0,'and media_type=1'));
		include template('index_popular');
	}
	function videos_action()
	{
		global $session,$db;
		//前20个视频
		$cate=isset($_GET['cate'])?$_GET['cate']:'';
		$container='and media_type=1';
		if(!empty($cate))
		{
			$container.=' and source="youku.com"';
		}
		$pins=bidcms_encode(getallpins(0,$container));
		include template('index_videos');
	}
	function xdm_action()
	{
		include template('index_xdm');
	}
	
}
