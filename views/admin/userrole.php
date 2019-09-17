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
function addrole()
{

	url=site_root+"/index.php?con="+adminpath+"&act=userrolemodify";
	
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'添加字段',
		width: 340,
		height:170,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function parseMyRoleData(data)
{
	var objdata=data;
	$('#user0').append('<TR class="tr1" id="user'+objdata.id+'"><TD width="100px">'+objdata.rolename+'</TD><TD width="100px">'+objdata.rolekey+'</TD><TD width="100px">'+objdata.roletype+'</TD><td width="50px" align="center"><A HREF="javascript:deleteVal(\'user_role\',\''+objdata.id+'\',\'cate'+objdata.id+'\',\'roleid\')">删除</A></td></TR>');
	$('#cate_area').hide();
}
//-->
</SCRIPT>
<div class="subnav">
    <div class="content-menu ib-a blue line-x">
    <a href="javascript:addrole();" class="add fb"><em>添加字段</em></a>
<a class="on" href="javascript:;"><em>管理会员权限字段</em></a>    </div>
</div>
<div class="table-list">
<TABLE cellpadding="1" cellspacing="1" style="width:100%;margin:auto;">
<thead>
<TR>
	<TH>权限名称</TH>
	<TH>权限标志符</TH>
	<TH>权限分组</TH>
	<TH>操作</TH>
</TR>
</thead><tbody id="user0">
<?php foreach($userrole['data'] as $key=>$val){?>
<TR class="tr1" id="user<?php echo $val['roleid'];?>">

	<TD  width="100px"><div id="rolename-<?php echo $val['roleid'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('rolenameinput-<?php echo $val['roleid'];?>');"><?php echo $val['rolename']?$val['rolename']:'--';?>
	</div>
	<input TYPE="text" class="hideinput" id="rolenameinput-<?php echo $val['roleid'];?>" ondblclick="confirmValue('user_role',this.value,'rolenameinput-<?php echo $val['roleid'];?>','roleid');"/></TD>

	<TD  width="100px"><div id="rolekey-<?php echo $val['roleid'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('rolekeyinput-<?php echo $val['roleid'];?>');"><?php echo $val['rolekey']?$val['rolekey']:'--';?>
	</div>
	<input TYPE="text" class="hideinput" id="rolekeyinput-<?php echo $val['roleid'];?>" ondblclick="confirmValue('user_role',this.value,'rolekeyinput-<?php echo $val['roleid'];?>','roleid');"/></TD>

	<TD  width="100px"><div id="roletype-<?php echo $val['roleid'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('roletypeinput-<?php echo $val['roleid'];?>');">
	<?php echo $val['roletype']?$val['roletype']:'--';?>
	</div>
	<input TYPE="text" class="hideinput" id="roletypeinput-<?php echo $val['roleid'];?>" ondblclick="confirmValue('user_role',this.value,'roletypeinput-<?php echo $val['roleid'];?>','roleid');"/></TD>

	<TD align="center" width="50px">
	<A HREF="javascript:deleteVal('user_role','<?php echo $val['roleid'];?>','user<?php echo $val['roleid'];?>','roleid')">删除</A>
	</TD>
</TR>
<?php }?>
</tbody>
</TABLE>
</div>
<div class="pages" style="text-align:center;padding:10px;"><?php echo $userrole['pageinfo'];?></div>
<div id="dialog" style="display:none;"><IMG SRC="<?php echo STATIC_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT=""></div>
<div style="z-index: 1000; background-color: rgb(0, 0, 0); visibility: visible; display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; width:100%;filter:alpha(opacity=50); opacity: 0.5; -moz-opacity:0.5;" id="blurdiv"></div>
</body>
</html>
