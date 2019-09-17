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
function addboard(id)
{
	url=site_root+"/index.php?con="+adminpath+"&act=boardmodify&update="+id;
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'添加画板',
		width: 400,
		height:250,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function modifyboard(id)
{
	url="index.php?con="+adminpath+"&act=boardmodify&updateid="+id;
		$.get(url,{},
		function(data){
			$('#dialog').html(data);
		});
		$('#blurdiv').show();
		$('#blurdiv').height($(document).height());
		$('#dialog').dialog('open');
		$('#dialog').dialog({
			title:'修改画板',
			width: 400,
			height:250,
			buttons: {},
			close:function(){$('#blurdiv').hide();$('#dialog').html('');}
		});
}
function parseMyboardData()
{
	window.location.reload();
}

//-->
</SCRIPT>
<div class="subnav">
	<div class="content-menu ib-a blue line-x">
		
	</div>
</div>
<form method="post" action="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=board"  name="searchform">
<table width="100%" cellspacing="0" class="search-form">
    <tbody>
		<tr>
		<td>
		<div class="explain-col">
		关键字：<INPUT TYPE="text" NAME="keyword" class="input-text" value="<?php  echo $_REQUEST['keyword']; ?>" > 
			
		      <input type="submit"  class="button"  value="确定" > <p style="text-align:right;">注意：修改分类时应同时修改主键和名称</p>
			</div>
		</td>
		
		</tr>
    </tbody>
</table>
</form>
<div class="table-list">
<TABLE cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
<TR>
	<TH style="width:150px;">名称</TH>
	<TH>描述</TH>
	<TH>采集数</TH>
	<TH>关注度</TH>
	<TH>分类主键</TH>
	<TH>分类名称(<a href="#" style="color:#ff0000" onclick="window.open('index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=showcate&si=1','','width=300px,height=400px');">查看</a>)</TH>
	<TH style="width:200px;">操作</TH>
</TR>
</thead>
<tbody>
<?php foreach($infolist['data'] as $key=>$val){?>
<TR class="tr1"  level="1" id="board<?php echo $val['board_id'];?>">
	<TD style="text-align:center;width:50px;">
	<div id="title-<?php echo $val['board_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('titleinput-<?php echo $val['board_id'];?>');"><?php echo $val['title'];?>
	</div>
	<input class="hideinput" id="titleinput-<?php echo $val['board_id'];?>" ondblclick="confirmValue('board',this.value,'titleinput-<?php echo $val['board_id'];?>','board_id');">
	</TD>
	<TD style="text-align:center;">
<div id="description-<?php echo $val['board_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('descriptioninput-<?php echo $val['board_id'];?>');"><?php echo $val['description'];?>
</div>
<input class="hideinput" id="descriptioninput-<?php echo $val['board_id'];?>" ondblclick="confirmValue('board',this.value,'descriptioninput-<?php echo $val['board_id'];?>','board_id');">
</TD>
	<td style="text-align:center;width:50px;">
	<?php echo $val['pin_count'];?>
	</td>
	<td style="text-align:center;width:50px;">
	<?php echo $val['follow_count'];?>
	</td>
	<TD style="text-align:center;width:100px;">
<div id="category_id-<?php echo $val['board_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('category_idinput-<?php echo $val['board_id'];?>');"><?php echo $val['category_id'];?>
</div>
<input class="hideinput" id="category_idinput-<?php echo $val['board_id'];?>" ondblclick="confirmValue('board',this.value,'category_idinput-<?php echo $val['board_id'];?>','board_id');">
</TD>
	<TD style="text-align:center;width:100px;">
<div id="category_name-<?php echo $val['board_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('category_nameinput-<?php echo $val['board_id'];?>');"><?php echo $val['category_name'];?>
</div>
<input class="hideinput" id="category_nameinput-<?php echo $val['board_id'];?>" ondblclick="confirmValue('board',this.value,'category_nameinput-<?php echo $val['board_id'];?>','board_id');">
</TD>
	
	<td width="170px" align="center">
	<A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=board&type=del&id=<?php echo $val['board_id'];?>" onclick="return confirm('其下采集也会一并删除，确认删除？');">删除</A>
	
	</td>
</TR>
<?php }?>
</tbody>
</TABLE>
<div class="pages" style="padding:10px;text-align:center;"><?php echo $infolist['pageinfo'];?></div>
</div>
<div id="dialog" style="display:none;"><IMG SRC="<?php echo STATIC_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT=""></div>
<div style="z-index: 1000; background-color: rgb(0, 0, 0); visibility: visible; display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; width:100%;filter:alpha(opacity=50); opacity: 0.5; -moz-opacity:0.5;" id="blurdiv"></div>
</body>
</html>
