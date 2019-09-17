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
function addsite(id)
{
	url=site_root+"/index.php?con="+adminpath+"&act=linkmodify";
	$.get(url,{},
	function(data){
		$('#dialog').html(data);
	});
	$('#blurdiv').show();
	$('#blurdiv').height($(document).height());
	$('#dialog').dialog('open');
	$('#dialog').dialog({
		title:'添加网站',
		width: 500,
		height:400,
		buttons: {},
		close:function(){$('#blurdiv').hide();$('#dialog').html('');}
	});
}
function modifycate(id)
{
	url="index.php?con="+adminpath+"&act=linkmodify&updateid="+id;
		$.get(url,{},
		function(data){
			$('#dialog').html(data);
		});
		$('#blurdiv').show();
		$('#blurdiv').height($(document).height());
		$('#dialog').dialog('open');
		$('#dialog').dialog({
			title:'修改网站',
			width: 500,
			height:400,
			buttons: {},
			close:function(){$('#blurdiv').hide();$('#dialog').html('');}
		});
}
function parseMysitecateData(data)
{
	var objdata=data;
	if(objdata.dotype=='add')
	{	
		if(objdata.thumb)
		{
			var thumb ="<img src="+objdata.thumb+" height='60px' >";
		}else{
            var thumb ="";
		}
		
		$('#link').append('<TR class="tr1" id="link'+objdata.id+'"><TD id="title-"'+objdata.id+' style="text-align:center;" >'+objdata.title+'</TD><TD style="text-align:center;"  id="url-"'+objdata.id+' >'+objdata.url+'</TD><TD style="text-align:center;" id="sortorder-"'+objdata.id+' >'+objdata.sortorder+'</TD><TD  style="text-align:center;"  id="thumb-"'+objdata.id+' >'+thumb+'</TD><td style="text-align:center;" ><A HREF="javascript:deleteVal(\'link\',\''+objdata.id+'\',\'link'+objdata.id+'\',id)">删除</A> <a href="javascript:modifycate('+objdata.id+')">修改</a></td></TR>');
		Dialog_close();
	}
	else
	{
		var  img = objdata.img?'<img src="'+objdata.img+'" width="60px" >':'';

		$('#title-'+objdata.id).html(objdata.title);
		$('#url-'+objdata.id).html(objdata.url);
		if(objdata.thumb)
		{
			var thumb ="<img src="+objdata.thumb+" height='60px' >";
		}else{
            var thumb ="";
		}
		
		$('#thumb-'+objdata.id).html(thumb);
		$('#sortorder-'+objdata.id).html(objdata.sortorder);
		Dialog_close();
	}
}
//-->
</SCRIPT>
<div class="subnav">
	<div class="content-menu ib-a blue line-x">
	<a href="javascript:addsite(0);" class="add fb"><em>添加链接</em></a>
	</div>
</div>
<div class="table-list">
<TABLE cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
<TR>
	<TH>标题</TH>
	<TH>地址</TH>
	<TH>排序</TH>
	<TH>图片</TH>
	<TH>操作</TH>
</TR>
</thead>
<tbody  id="link">
<tr id="link0"><td colspan="3"></td></tr>
<?php foreach($linklist['data'] as $key=>$val){?>

<TR class="tr1" id="link<?php echo $val['id'];?>">
	<TD id="title-<?php echo $val['id'];?>" style="text-align:center;"  >
	<?php echo $val['title'];?> 
	</TD>
	<TD id="url-<?php echo $val['id'];?>" style="text-align:center;"  >
	<?php echo $val['url'];?>
	</TD>
	<TD id="sortorder-<?php echo $val['id'];?>" style="text-align:center;"  >
	<?php echo $val['sortorder'];?> 
	</TD>
	<TD id="thumb-<?php echo $val['id'];?>" style="text-align:center;"  >
		<?php  if($val['thumb']){ ?>  <img src="<?php echo $val['thumb'];?>" > <?php  } ?>
	</TD>

	<td width="170px" align="center">
		<a href="javascript:modifycate('<?php echo $val['id'];?>')">修改</a>
		<A HREF="javascript:deleteVal('link','<?php echo $val['id'];?>','link<?php echo $val['id'];?>','id')">删除</A>
	</td>
</TR>

<?php }?>
</tbody>
</TABLE>
</div>
<div class="pages" style="padding:10px;text-align:center;"><?php echo $othersite_info['pageinfo'];?></div>
<div id="dialog" style="display:none;"><IMG SRC="<?php echo STATIC_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT=""></div>
<div style="z-index: 1000; background-color: rgb(0, 0, 0); visibility: visible; display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; width:100%;filter:alpha(opacity=50); opacity: 0.5; -moz-opacity:0.5;" id="blurdiv"></div>
</body>
</html>
