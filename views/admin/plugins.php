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
function addplugins(id)
{
	url=site_root+"/index.php?con="+adminpath+"&act=pluginsmodify&updateid="+id;
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'添加插件',
		width: 500,
		height:350,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function modifyplugins(id)
{
	url=site_root+"/index.php?con="+adminpath+"&act=pluginsmodify&updateid="+id;
		$.get(url,{},
		function(data){
			$('#dialog').html(data);
		});
		$('#blurdiv').show();
		$('#blurdiv').height($(document).height());
		$('#dialog').dialog('open');
		$('#dialog').dialog({
			title:'修改插件',
			width: 400,
			height:350,
			buttons: {},
			close:function(){$('#blurdiv').hide();$('#dialog').html('');}
		});
}
function parseMyCateData()
{
	window.location.reload();
}


//-->
</SCRIPT>
<div class="subnav">
	<div class="content-menu ib-a blue line-x">
	<a href="javascript:addplugins(0);" class="add fb"><em>添加插件</em></a>
	</div>
</div>
<div class="table-list">
<TABLE cellpadding="1" cellspacing="1" style="width:500px;">
<thead>
<TR>
	<TH>插件名</TH>
	<TH>显示位置</TH>
	<TH>文件夹名</TH>
	<TH>操作</TH>
</TR>
</thead>
<tbody>
<?php foreach($plugins as $key=>$val){?>
<TR class="tr1" id="plugins<?php echo $val['id'];?>">
	<TD align="center" id="pluginsname-<?php echo $val['id'];?>">
	<?php echo $val['pluginsname']['title'];?> 
	</TD>
	<TD align="center" id="sortorder-<?php echo $key;?>">
	<?php echo $GLOBALS['pluginsshow'][$val['pluginsname']['isshow']];?> 
	</TD>
	<TD id="url-<?php echo $key;?>">
	<?php echo $val['pluginsname']['url'];?> 
	</TD>
	<td align="center">
	<a href="javascript:modifyplugins('<?php echo $val['id'];?>')">修改</a> <?php if($val['pluginsname']['showtype']==0){?><A HREF="plugins/<?php echo $val['pluginsname']['url'];?>/install.php?id=<?php echo $val['id'];?>">卸载</A><?php } else{?><A HREF="javascript:deleteVal('plugins','<?php echo $val['id'];?>','plugins<?php echo $val['id'];?>')">删除</A><?php }?>
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
