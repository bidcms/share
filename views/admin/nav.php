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
<?php include ROOT_PATH.'/views/admin/header.php';?>
<body>
<SCRIPT LANGUAGE="JavaScript">
<!--

function addnav()
{
	url=site_root+"/index.php?con="+adminpath+"&act=navmodify";
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'首页导航',
		width: 400,
		height:400,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function modifynav(id)
{
	url=site_root+"/index.php?con="+adminpath+"&act=navmodify&updateid="+id;
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'首页导航',
		width: 400,
		height:400,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function parseMynavData()
{
	window.location.reload();
}

</SCRIPT>
<div class="subnav">
	<div class="content-menu ib-a blue line-x">
	<a href="javascript:addnav();" class="add fb"><em>添加导航</em></a>
	</div>
</div>
<div class="table-list">
<TABLE cellpadding="1" cellspacing="1" style="width:600px;">
<thead>
<TR>
	<TH>名称</TH>
	<TH>内容</TH>
	<TH>类别</TH>
	<TH>位置</TH>
	<TH>排序</TH>
	<TH>新窗口</TH>
	<TH>操作</TH>
</TR>
</thead>
<tbody id="nav0">
<?php foreach($navinfo as  $key=>$val){?>
<TR class="tr1" id="nav<?php echo $key;?>">
	<TD id="navname-<?php echo $key;?>" style="text-align:center">
	<?php echo $val['navname'];?>
	</TD>
	<TD id="content-<?php echo $key;?>" style="text-align:center">
	<?php echo $val['navname'];?>
	</TD>
	<TD id="type-<?php echo $key;?>" style="text-align:center">
	<?php   if($val['type'] == 1) {  ?>分类<?php } ?>
	<?php   if($val['type'] == 2) {  ?>关键字<?php } ?>
	</TD>
	<TD id="location-<?php echo $key;?>" style="text-align:center">
	<?php   if($val['location'] == 3) {  ?>上部导航<?php } ?>
	<?php   if($val['location'] == 1) {  ?>中部导航<?php } ?>
	<?php   if($val['location'] == 4) {  ?>下部导航<?php } ?>
	</TD>
	<TD id="sort-<?php echo $key;?>" style="text-align:center">
	<?php echo $val['sotr'];?>
	</TD>
	<TD id="target-<?php echo $key;?>" style="text-align:center">
	<?php  if($val['target']){  echo '是';  }else{  echo '否'; } ?>
	</TD>
	<td width="160px" align="center">
	<A HREF="javascript:modifynav('<?php echo $val['id'];?>')">修改</A>&nbsp;&nbsp;&nbsp;&nbsp;
	<A HREF="javascript:deleteVal('nav','<?php echo $val['id'];?>','nav<?php echo $key;?>')">删除</A>
	</td>
</TR>
<?php }?>
</tbody>
</TABLE>
</div>
<div id="dialog" style="display:none;"><IMG SRC="<?php echo STATIC_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT=""></div>
<div style="z-index: 1000; background-color: rgb(0, 0, 0); visibility: visible; display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; width:100%;filter:alpha(opacity=50); opacity: 0.5; -moz-opacity:0.5;" id="blurdiv"></div>
</body>
</html>
