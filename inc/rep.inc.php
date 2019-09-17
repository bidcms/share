<?php
/*
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms

	$Id: session.class.php 2010-08-24 10:42 $
*/

if(!defined('IN_BIDCMS')) {
	exit('Access Denied');
}

$app['host']=str_replace('http://','',SITE_ROOT);
$app['scheme']='http';
$app['settings']['imgHosts']['hbimg']=str_replace('http://','',STATIC_ROOT);
$app['settings']['hbfile']['hbfile']=str_replace('http://','',STATIC_ROOT);;
$app['settings']['minImageWidth']=16;
$app['timestamp']=time();
if(!empty($pcate))
{
	foreach($pcate as $k=>$v)
	{
		$app['settings']['categories'][]=array('id'=>$v['cateindex'],'name'=>$v['catename'],'cateindex'=>$v['id'],'group'=>$v['categroup'],'nav_link'=>$v['customurl']);
	}
}
else
{
	$app['settings']['categories'][]=array();
}
$app['settings']['fav_categories']=array("beauty", "home", "food_drink", "photography", "apparel", "wedding_events", "men", "travel_places", "illustration", "design", "modeling_hair", "people", "tips");
$app['settings']['channels']=array(array("id"=>"videos", "name"=>"视频", "group"=>5),array("id"=>"web_captures", "name"=>"网页截图", "group"=>5),array("id"=>"taomm", "name"=>"淘女郎潮搭", "group"=>5));
$app["req"]=array('shopping'=>'null','sid'=>'okFU9Rmelqyuj8F5PjWxkyUa.aUqp4VTK0DmwTsoSm1Cpf4Hsa7aeFtgGrx9dwuuYKKk');

//My Info
if($session->get('uid')>0)
{
	$app['req']['user']=getuser($session->get('uid'),1,1,1,1,1);
	$app['page']['user_info']=!empty($app['req']['user']['user_id'])?array('follower_count'=>$app['req']['user']['like_count'],'board_count'=>$app['req']['user']['board_count'],'pin_count'=>$app['req']['user']['pin_count']):array();
}

$app['page']['stores']=array("tmall"=>array("id"=>"tmall", "name"=>"天猫商城", "url_rule"=>array()), "taobao"=>array("id"=>"taobao", "name"=>"淘宝", "url_rule"=>array()), "nuandao"=>array("id"=>"nuandao", "name"=>"暖岛", "url_rule"=>array()), "1626buy"=>array("id"=>"1626buy", "name"=>"1626潮流精选", "url_rule"=>array()), "xipin"=>array("id"=>"xipin", "name"=>"稀品网", "url_rule"=>array()), "jue"=>array("id"=>"jue", "name"=>"觉", "url_rule"=>array()), "creatife"=>array("id"=>"creatife", "name"=>"创意生活", "url_rule"=>array()), "emoi"=>array("id"=>"emoi", "name"=>"emoi基本生活", "url_rule"=>array()), "shijue"=>array("id"=>"shijue", "name"=>"视觉中国", "url_rule"=>array()), "360buy"=>array("id"=>"360buy", "name"=>"京东商城", "url_rule"=>array()), "dangdang"=>array("id"=>"dangdang", "name"=>"当当网", "url_rule"=>array()), "wowsai"=>array("id"=>"wowsai", "name"=>"哇噻网", "url_rule"=>array()), "zara"=>array("id"=>"zara", "name"=>"zara", "url_rule"=>array()), "crucco"=>array("id"=>"crucco", "name"=>"初刻", "url_rule"=>array()), "apous"=>array("id"=>"apous", "name"=>"百汇馆", "url_rule"=>array()), "magibuy"=>array("id"=>"magibuy", "name"=>"美奇", "url_rule"=>array()), "quwan"=>array("id"=>"quwan", "name"=>"趣玩", "url_rule"=>array()), "shejijia"=>array("id"=>"shejijia", "name"=>"设计家", "url_rule"=>array()), "nop"=>array("id"=>"nop", "name"=>"NOP", "url_rule"=>array()), "doin"=>array("id"=>"doin", "name"=>"Doin", "url_rule"=>array()), "liveport"=>array("id"=>"liveport", "name"=>"优集品", "url_rule"=>array()), "sopool"=>array("id"=>"sopool", "name"=>"素铺", "url_rule"=>array()), "inoutmall"=>array("id"=>"inoutmall", "name"=>"里外优购", "url_rule"=>array()), "unandu"=>array("id"=>"unandu", "name"=>"有男度", "url_rule"=>array()));