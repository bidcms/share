<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: setpin.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
include '../inc/pin.inc.php';
include '../inc/pincreate.inc.php';
$pin_id=$session->get('pinid');
$uid=$session->get('uid');
$boardid=$session->get('boardid');
$board_id=isset($_POST['board_id'])?intval($_POST['board_id']):($boardid>0?$boardid:0);
$text=isset($_POST['text'])?trim(strip_tags($_POST['text'])):'';
$via=isset($_POST['via'])?intval($_POST['via']):0;
$media_type=isset($_POST['media_type'])?intval($_POST['media_type']):0;
$media=isset($_POST['video'])?trim($_POST['video']):'';
$link=isset($_POST['link'])?trim($_POST['link']):'';
$original=0;
$img_url=isset($_POST['img_url'])?$_POST['img_url']:'';

if(!empty($img_url))
{
	$file=_loadimg($img_url);
	$session->set('fileid',$file['id']);
	$file_id=$file['id'];
	$pin_id=0;
}
else
{
	$file_id=$session->get('fileid');
}
if(!empty($link))
{
	$p=parse_url($link);
	$source=str_replace('www.','',isset($p['host'])?$p['host']:$link);
	$sprice=createprice($link);
	$text_meta='';
	if($sprice['price']>0)
	{
		$text_meta=serialize(array("commodity"=>true));
	}
}
else
{
	$source='';
}
if(!empty($video))
{
	$video=createvideo($media);
	$media_type=1;
}
elseif(!empty($text))
{
	preg_match("#.*?(http://.*?\.swf).*?#",str_replace("\n","",$text),$match);
	if(!empty($match[1]))
	{
		$video=$match[1];
		$media_type=1;
	}
}

$share_button=isset($_POST['share_button'])?intval($_POST['share_button']):0;
$affid=0;
if($uid>0)
{
	if($via>0)
	{
		$repins=$db->fetch_first("select pin_id,file_id,user_id,original,orig_source from ".tname('pin')." where pin_id=".$via);
	}
	if(isset($repins['pin_id']) && $repins['pin_id']>0)
	{
		$file_id=$repins['file_id'];
		$viauid=$repins['user_id'];
		$original=$repins['original']>0?$repins['original']:$repins['pin_id'];
	}
	else
	{
		$viauid=0;
	}
	if($via>0)
	{
		$db->query("update ".tname('pin')." set repin_count=repin_count+1 where pin_id=".$via);
	}
	$db->query("update ".tname('board')." set pin_count=pin_count+1 where board_id=".$board_id);
	$db->query("insert into ".tname('pin')." (board_id,raw_text,via,media_type,orig_source,user_id,file_id,via_user_id,created_at,link,source,original,text_meta) values('".$board_id."','".$text."','".$via."','".$media_type."','".$video."','".$uid."','".$file_id."','".$viauid."','".time()."','".$link."','".$source."','".$original."','".$text_meta."')");
	
	$affid=$db->insert_id();
	if($affid>0)
	{
		$session->set('boardid',$board_id);
		if(isset($file_id) && $file_id>0)
		{
			$db->query("update ".tname('file')." set isused=1 where file_id=".$file_id);
		}
		if($sprice['price']>0)
		{
			$db->query("insert into ".tname('commodity')." (board_id,pin_id,user_id,title,price,link,selling,store) values('".$board_id."','".$affid."','".$uid."','".charset_encode($sprice['title'],'utf-8','gbk')."','".$sprice['price']."','".$sprice['link']."','1','".$sprice['store']."')");
		}
		$pin=getpin($affid,0);
	}
}

$pin['is_share_btn']=$share_button>0?true:false;
$pin['share_button']=$share_button;

$ps['pin']=$pin;
echo bidcms_encode($ps);
/*{"warning":100,"pin":{"pin_id":36430485,"user_id":118030,"board_id":2097475,"file_id":8713579,"file":{"farm":"farm1","bucket":"hbimg","key":"eddb364ba6b80fbc9947aa92ac7b695ef400d25139bd-Z16L3z","type":"image/jpeg","width":296,"height":120,"frames":1},"media_type":0,"source":"tudou.com","link":"http://www.tudou.com/","raw_text":"土豆网_每个人都是生活的导演_在线视频观看,原创视频上传,海量视频搜索","text_meta":{},"via":2,"via_user_id":0,"original":null,"created_at":"1355132815","like_count":0,"comment_count":0,"repin_count":0,"is_private":0,"orig_source":null,"board":{"board_id":2097475,"user_id":118030,"title":"默认画板","description":"","category_id":null,"seq":9,"pin_count":4,"follow_count":0,"created_at":"1347108733","updated_at":1355132847,"is_private":2}}}*/
?>