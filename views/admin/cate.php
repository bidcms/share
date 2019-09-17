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
function addcate(id)
{
	url=site_root+"/index.php?con="+adminpath+"&act=catemodify&parentid="+id;
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'添加分类',
		width: 400,
		height:450,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function modifycate(id)
{
	url="index.php?con="+adminpath+"&act=catemodify&updateid="+id;
		$.get(url,{},
		function(data){
			$('#dialog').html(data);
		});
		$('#blurdiv').show();
		$('#blurdiv').height($(document).height());
		$('#dialog').dialog('open');
		$('#dialog').dialog({
			title:'修改分类',
			width: 400,
			height:450,
			buttons: {},
			close:function(){$('#blurdiv').hide();$('#dialog').html('');}
		});
}
function parseMyCateData()
{
	window.location.reload();
}


function showmore(id)
{
	if($('#showtag'+id).html()=='+')
	{
		url=site_root+"/models/getmorecate.php?pid="+id+"&rand="+Math.random();
		$('#showtag'+id).html('<IMG SRC="<?php echo STATIC_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT="">');
		$.get(url,{},
		function(data){
			if(data)
			{
				$('#cate'+id).after(data);
				
			}
			$('#showtag'+id).html('-');
		});
	}
	else
	{
		$('.tr1').each(
			function()
			{
				p=$('#cate'+id).attr('level')!='1'?$('#cate'+id).attr('parent').substr(1):$('#cate'+id).attr('parent');
				
				if($(this).attr('parent').indexOf(p+'-')>-1)
				{
					$(this).remove();
				}
			});
		$('#showtag'+id).html('+');
	}
		
}

//-->
</SCRIPT>
<div class="subnav">
	<div class="content-menu ib-a blue line-x">
	<a href="javascript:addcate(0);" class="add fb"><em>添加分类</em></a>
	</div>
</div>
<form method="post" action="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=cate"  name="searchform">
<table width="100%" cellspacing="0" class="search-form">
    <tbody>
		<tr>
		<td>
		<div class="explain-col">
		关键字：<INPUT TYPE="text" NAME="keyword" class="input-text" value="<?php  echo $_REQUEST['keyword']; ?>" > 
			
		      <input type="submit"  class="button"  value="确定" >
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
	<TH style="width:200px;">类别</TH>
	<TH>推荐</TH>
	<TH>排序</TH>
	<TH>主键</TH>
	<TH>分组</TH>
	<TH style="width:200px;">操作</TH>
</TR>
</thead>
<tbody>
<?php foreach($catelist as $key=>$val){?>
<TR class="tr1" parent="<?php echo $val['layer'];?>" level="1" id="cate<?php echo $val['id'];?>">
	<TD>
	<span style="cursor:pointer;" onclick="showmore('<?php echo $val['id'];?>');">　<b id="showtag<?php echo $val['id'];?>">+</b>　</span><strong style="<?php echo $val['css'];?>"><?php echo $val['catename'];?> </strong>
	</TD>
	
	<td style="text-align:center;width:50px;">
	<div id="recommend-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff0000';" onmouseout="this.style.backgroundColor='';" onclick="updateVal('catelist','recommendinput-<?php echo $val['id'];?>','id','',['是','否']);">
	<?php echo $val['recommend']?'是':'否';?>
	</div>
	<INPUT TYPE="text" class="hideinput" id="recommendinput-<?php echo $val['id'];?>" value="<?php echo intval(!$val['recommend']);?>" title='nochange'>
	</td>
	
	
	<TD style="text-align:center;width:50px;">
	<div id="sortorder-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('sortorderinput-<?php echo $val['id'];?>');"><?php echo $val['sortorder'];?>
	</div>
	<input class="hideinput" id="sortorderinput-<?php echo $val['id'];?>" ondblclick="confirmValue('catelist',this.value,'sortorderinput-<?php echo $val['id'];?>','id');">
	</TD>
	<TD style="text-align:center;width:50px;">
	<div id="cateindex-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('cateindexinput-<?php echo $val['id'];?>');"><?php echo $val['cateindex'];?>
	</div>
	<input class="hideinput" id="cateindexinput-<?php echo $val['id'];?>" ondblclick="confirmValue('catelist',this.value,'cateindexinput-<?php echo $val['id'];?>','id');">
	</TD>
	<TD style="text-align:center;width:50px;">
	<div id="categroup-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('categroupinput-<?php echo $val['id'];?>');"><?php echo $val['categroup'];?>
	</div>
	<input class="hideinput" id="categroupinput-<?php echo $val['id'];?>" ondblclick="confirmValue('catelist',this.value,'categroupinput-<?php echo $val['id'];?>','id');">
	</TD>
	<td width="170px" align="center">
	<A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=cate&type=del&id=<?php echo $val['id'];?>" onclick="return confirm('其下子分类也一并删除，确认删除？');">删除</A>
	<a href="javascript:modifycate('<?php echo $val['id'];?>')">修改</a>
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
