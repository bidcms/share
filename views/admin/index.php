<?php
/*
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms

	$Id: admin.class.php 2010-08-24 10:42 $
*/

if(!defined('IN_BIDCMS')) {
	exit('Access Denied');
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="off">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<title>BidCms图片分享管理系统</title>
<link href="views/admin/css/reset.css" rel="stylesheet" type="text/css" />
<link href="views/admin/css/zh-cn-system.css" rel="stylesheet" type="text/css" />
<link href="views/admin/css/dialog.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="views/js/jquery.js"></script>
<SCRIPT LANGUAGE="JavaScript">
<!--
	var adminpath='<?php echo $GLOBALS["setting"]["adminpath"]?$GLOBALS["setting"]["adminpath"]:"admin";?>';
	var site_root='<?php echo SITE_ROOT;?>';
//-->
</SCRIPT>
<style type="text/css">
.objbody{overflow:hidden}
</style>
<script language="javascript" src="views/admin/js/menu.js"></script>
<script language="javascript" src="views/admin/js/nav.js"></script>

</head>
<body scroll="no" class="objbody" id="objbody">

<div class="header">
	<div class="logo lf"><a href="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>"><span class="invisible">BidCms图片分享管理系统</span></a></div>
    <div class="rt-col">
    	<div class="tab_style white cut_line text-r"><a href="http://www.bidcms.com" target="_blank">官方网站</a><span>|</span><a href="http://trade.bidcms.com/" target="_blank">授权查询</a><span>|</span><a href="http://bbs.bidcms.com" target="_blank">支持论坛</a><span>|</span><a href="http://www.bidcms.com/help.html" target="_blank">帮助？</a>
    
        </div>
    </div>
    <div class="col-auto">
    	<div class="log white cut_line">您好！<?php echo $GLOBALS['session']->get('adminuser');?> [管理员]<span>|</span><a href="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=logout">[退出]</a><span>|</span>
    		<a href="index.php" target="_blank" id="site_homepage">站点首页</a><span>|</span>
    		
    	</div>
        <ul class="nav white" id="top_menu">
			 <li id="man_nav_1" onclick="list_sub_nav('man_nav_1','管理首页')"  style="outline:none;"  class="on top_menu"><A HREF="#">管理首页</A></li><li id="man_nav_2" onclick="list_sub_nav('man_nav_2','站点设置')"  style="outline:none;"  class="top_menu"><A HREF="#">站点设置</A></li><li id="man_nav_3" onclick="list_sub_nav('man_nav_3','会员管理')"  style="outline:none;"  class="top_menu"><A HREF="#">会员管理</A></li><li id="man_nav_4"  onclick="list_sub_nav('man_nav_4','数据信息')"  style="outline:none;"  class="top_menu"><A HREF="#">数据信息</A></li>
        </ul>
    </div>
</div>
<SCRIPT LANGUAGE="JavaScript">
<!--
	function showDiglog(content)
	{
		$('#showdiglog').html(content);
		$('#showdiglog').show('slow');
		setTimeout(function(){$('#showdiglog').hide('slow');},2000);
	}
//-->
</SCRIPT>
<div id="content">
	<div class="col-left left_menu">
    	<div class="col-left left_menu">
    	<div id="Scroll" style="height: 374px;"><div id="leftMain"></div></div>

        <a title="展开与关闭" class="open" hidefocus="hidefocus" style="outline-style: none; outline-width: medium; height: 424px;" id="openClose" href="javascript:;"><span class="hidden">展开</span></a>
		</div>
    </div>
    <div class="col-auto mr8">
    <div class="crumbs">
    <div class="shortcut cu-span"><span id="showdiglog" style="color:#ff0000;"></span><a href="index.php" target="_blank"><span>站点首页</span></a><a href="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=delcache" target="cache"><span>清空缓存</span></a></div>
    当前位置：<span id="current_pos"></span></div>
    	<div class="col-1">
        	<div class="content" style="position:relative; overflow:hidden">
                <iframe name="right" id="rightMain" src="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=main" frameborder="false" scrolling="auto" style="border:none; margin-bottom:30px" width="100%" height="100%"></iframe>
                <div class="fav-nav">
					<div id="panellist"></div>
					<div id="paneladd"></div>
                    <div id="help" class="fav-help"></div>
				</div>
        	</div>
        </div>
    </div>
</div>
<SCRIPT LANGUAGE="JavaScript">
<!--
	getbyitem('管理首页');
//-->
</SCRIPT>
<iframe src="" style="display:none" name="cache"></iframe>
<script language="javascript" src="views/admin/js/windows.js"></script>
</body>
</html>