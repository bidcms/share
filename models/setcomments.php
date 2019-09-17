<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: setpin.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
include '../inc/pin.inc.php';
$uid=$session->get('uid');

$pin_id=intval($_REQUEST['id']);
$text=isset($_POST['text'])?trim(strip_tags($_POST['text'])):'';
if(!empty($text) && $pin_id>0  && $uid>0)
{
	$sql="insert into ".tname("comments")." (pin_id,user_id,raw_text,created_at) values('".$pin_id."','".$uid."','".$text."','".time()."')";
	$db->query($sql);
	$cid=$db->insert_id();
	if($cid>0)
	{
		$db->query("update ".tname('pin')." set comment_count=comment_count++1 where pin_id=".$pin_id);
		$comment=array('pin_id'=>$pin_id,'user_id'=>$uid,'raw_text'=>$text,'text_meta'=>array(),'created_at'=>time(),'comment_id'=>$cid);
		$comment['pin']=getpin($pin_id);
		$comment['user']=getuser($uid,1);
		echo bidcms_encode(array('comment'=>$comment));
		exit;
	}
	else
	{
		echo '{"err":1,"msg":"评论失败"}';
		exit;
	}
}
else
{
	echo '{"err":1,"msg":"评论失败"}';
	exit;
}
//{"comment":{"pin_id":37642248,"user_id":118030,"raw_text":"EXO是什么？","text_meta":{},"created_at":1355890112,"comment_id":357728,"pin":{"pin_id":37642248,"user_id":23345,"board_id":1722157,"file_id":9028708,"file":{"farm":"farm1","bucket":"hbimg","key":"0ec4cef0d41184310b8c65f2fea2272d65cc47352434e-yjy5fY","type":"image/jpeg","width":1280,"height":924,"frames":1},"media_type":0,"source":null,"link":"","raw_text":"","text_meta":{},"via":37640052,"via_user_id":263360,"original":37640052,"created_at":"1355841136","like_count":0,"comment_count":0,"repin_count":0,"is_private":0,"orig_source":null},"user":{"user_id":118030,"username":"limengqi","urlname":"phpup","avatar":{"id":8992655,"farm":"farm1","bucket":"hbimg","key":"a0622f5a10e6190f7864b122acaf7149f875e102258f10-vzYRWd","type":"image/jpeg","width":750,"height":4996,"frames":1},"roles":"","rating":8191,"bindings":{"weibo":"weibo-1644360034"},"profile":{},"status":{"lr":1355889392,"default_board":2097475,"share":"0","invites":0},"location":"山西 太原"}}}
?>
