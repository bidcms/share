<?php
if(!defined('IN_BIDCMS')) {
	exit('Access Denied');
}
?>
<?php include ROOT_PATH.'/views/admin/header.php';?>

<body>
<style type="text/css">
	html{_overflow-y:scroll}
</style>
<div id="main_frameid" class="pad-10 display" style="_margin-right:-12px;_width:98.9%;display:block;">

<div class="col-2 lf mr10" style="width:48%">
	<h6>我的个人信息</h6>
	<div class="content adtyhz">
	您好，<?php  echo $userinfo['username']; ?><br />
	所属角色：管理员 <br />
	
	</div>
</div>
<div class="col-2 col-auto">
	<h6>系统信息</h6>
	<div class="content adtyhz">
	程序版本：<?php echo VERSION;?><br />
	<div style="color:#ff0000;font-weight:bold;" id='changev'></div>
	
	
	操作系统：<?php echo PATH_SEPARATOR==':'?'Linux/Unix':'windows';?> <br />

	服务器软件：<?php echo $_SERVER['SERVER_SOFTWARE'];?> <?php echo PHP_VERSION;?> <br />
	MySQL 版本：<?php echo $GLOBALS['db']->version();?><br />
	上传文件：<?php echo get_cfg_var('upload_max_filesize');?><br />	
	</div>
</div>
<div class="bk10"></div>
<div class="col-2 lf mr10" style="width:48%">
	<h6>BidCms_PINS开发团队</h6>
	<div class="content adtyhz">
	版权所有：BidCms项目组<br />
	项目经理：<A HREF="http://weibo.com/phpup" style="color:#3A6EA5;"  target="_blank">李孟琦</A><br />
	开发与支持团队：<A HREF="http://weibo.com/phpup" style="color:#3A6EA5;" target="_blank">李孟琦</a>、<A HREF="http://weibo.com/1695267302" style="color:#3A6EA5;" target="_blank">枫叶的忧伤</a><br />
	UI/美工设计：Android应用控<br />
	官方网站：<a href="http://www.bidcms.com/" target="_blank">http://www.bidcms.com/</a> <br />
	</div>
</div>
<div class="col-2 col-auto">
	<h6>授权信息</h6>
	<div class="content" id="code">
		<iframe src="http://www.bidcms.com/version.php?v=<?php echo VERSION;?>" frameborder="0" style="width:100%;height:100px;"></iframe>
	</div>
	
</div>


</div>
<iframe src="http://www.bidcms.com/ad.html" style="width:100%;height:200px;" scrolling="no" frameborder="0" ></iframe>
</body></html>