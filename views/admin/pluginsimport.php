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
<TR class="tr1" id="plugins<?php echo $key;?>">
	<TD align="center" id="pluginsname-<?php echo $val['id'];?>">
	<?php echo $val['title'];?> 
	</TD>
	<TD align="center" id="sortorder-<?php echo $key;?>">
	<?php echo $GLOBALS['pluginsshow'][$val['isshow']];?> 
	</TD>
	<TD id="url-<?php echo $key;?>">
	<?php echo $val['url'];?> 
	</TD>
	<td align="center">
	
	<A HREF="plugins/<?php echo $val['url'];?>/install.php">安装</A>

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
