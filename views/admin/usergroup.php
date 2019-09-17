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
function addgroup()
{
	url=site_root+"/index.php?con="+adminpath+"&act=usergroupmodify";
	
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'添加分组',
		width: 340,
		height:170,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}

function parseMyGroupData(data)
{
	var objdata=data;
	$('#user0').append('<TR class="tr1" id="user'+objdata.id+'"><TD>'+objdata.groupname+'</TD><TD>'+objdata.groupkey+'</TD><td width="70px" align="center"><A HREF="javascript:deleteVal(\'user_group\',\''+objdata.id+'\',\'cate'+objdata.id+'\',\'groupid\')">删除</A></td></TR>');
	Dialog_close();
}
//-->
</SCRIPT>
<div class="subnav">
    <div class="content-menu ib-a blue line-x">
    <a href="javascript:addgroup();" class="add fb"><em>添加会员组</em></a>
<a class="on" href="javascript:;"><em>管理会员组</em></a>    </div>
</div>
<div class="table-list">
<TABLE cellpadding="1" cellspacing="1" style="width:100%;margin:auto;">
<thead>
<TR>
	<TH>会员组</TH>
	<TH>组标志</TH>
	<TH>操作</TH>
</TR>
</thead>
<tbody id="user0">

<?php foreach($usergroup['data'] as $key=>$val){?>
<TR class="tr1" id="user<?php echo $val['groupid'];?>">
	
	<TD  width="170px"><div id="groupname-<?php echo $val['groupid'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('groupnameinput-<?php echo $val['groupid'];?>');"><?php echo $val['groupname'];?>
</div>
<input TYPE="text" class="hideinput" id="groupnameinput-<?php echo $val['groupid'];?>" ondblclick="confirmValue('user_group',this.value,'groupnameinput-<?php echo $val['groupid'];?>','groupid');"/></TD>
<TD  width="100px"><div id="groupkey-<?php echo $val['groupid'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('groupkeyinput-<?php echo $val['groupid'];?>');"><?php echo $val['groupkey']?$val['groupkey']:'--';?>
</div>
<input TYPE="text" class="hideinput" id="groupkeyinput-<?php echo $val['groupid'];?>" ondblclick="confirmValue('user_group',this.value,'groupkeyinput-<?php echo $val['groupid'];?>','groupid');"/></TD>
	<TD align="center" width="130px">
	<A HREF="javascript:deleteVal('user_group','<?php echo $val['groupid'];?>','user<?php echo $val['groupid'];?>','groupid')">删除</A>
	<A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=roletogroup&gid=<?php echo $val['groupkey'];?>">分配权限</A>
	</TD>
</TR>
<?php }?>
</tbody>
</TABLE>
</div>
<div class="pages" style="text-align:center;padding:10px;"><?php echo $usergroup['pageinfo'];?></div>
<div id="dialog" style="display:none;"><IMG SRC="<?php echo STATIC_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT=""></div>
<div style="z-index: 1000; background-color: rgb(0, 0, 0); visibility: visible; display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; width:100%;filter:alpha(opacity=50); opacity: 0.5; -moz-opacity:0.5;" id="blurdiv"></div>
</body>
</html>
