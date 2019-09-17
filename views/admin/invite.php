<?php
/*
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms

	$Id: admin.class.php 2010-08-24 10:42 $
*/
if(!defined('IN_BIDCMS')) {
	exit('Access Denieds');
}
?>
<?php include ROOT_PATH.'/views/admin/header.php';?>
<body>
<SCRIPT LANGUAGE="JavaScript">
<!--

function modifyinvite(id)
{
	url=bidcms_index+"?con="+adminpath+"&act=invitemodify&updateid="+id;
		jq.get(url,{},
		function(data){
			jq('#dialog').html(data);
		});
		jq('#blurdiv').show();
		jq('#blurdiv').height(jq(document).height());
		jq('#dialog').dialog('open');
		jq('#dialog').dialog({
			title:'设置时间与地点',
			width: 450,
			height:500,
			buttons: {},
			close:function(){jq('#blurdiv').hide();jq('#dialog').html('');}
		});
}
function parseMyinviteData()
{
	window.location.reload();
}


//-->
</SCRIPT>
<script type="text/javascript" src="http://api.go2map.com/maps/js/api_v2.5.1.js"></script>

<div class="subnav">
    <div class="content-menu ib-a blue line-x">
        <A HREF="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=goodsmodify"  class="add fb"><em>添加竞拍</em></A>
	</div>
</div>
<form method="post" action="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=listgoods<?php  echo $sortform; ?>"  name="searchform">
<table width="100%" cellspacing="0" class="search-form">
    <tbody>
		<tr>
		<td>
		<div class="explain-col">
		关键字：<INPUT TYPE="text" NAME="keyword" id="keyword" class="input-text" value="<?php  echo $_REQUEST['keyword']; ?>" >
		      <input type="submit"  class="button"  value="确定" >
			</div>
		</td>
		</tr>
    </tbody>
</table>
</form>
<div class="table-list">


<TABLE cellpadding="1" cellspacing="1" width="100%">
<thead>
<TR>
	<TH></TH>
	<TH style="text-align:left;">标题</TH>
	<TH style="text-align:left;">现价</TH>
	<TH>被邀请人</TH>
	<TH>状态</TH>
	<TH>结束时间</TH>
	<TH>约会时间</TH>
	<TH>约会地址</TH>
	<TH width="100px">操作</TH>
</TR>
</thead>
<tbody>
<?php foreach($infolist['data'] as $key=>$val){?>
<TR class="tr<?php echo $key%2;?>" id="goods<?php echo $val['goods_id'];?>">
	
	<td><img src="<?php $thumb=explode(',',$val['thumb']);echo $thumb[0];?>" style="width:100px;"/></td>
	<td><a href="paishi.php?act=item&id=<?php echo $val['goods_id'];?>" target="_blank"><?php echo $val['goods_name'];?></a></td>
	<td><?php echo $val['nowprice'];?></td>
	<td style="text-align:center;"><a href="<?php echo $GLOBALS['sellertype'][$val['sellertype']]['url'];?>/<?php echo $val['selleruid'];?>" target="_blank"><?php echo $val['seller'];?></a></td>
	<td style="text-align:center;"><?php echo $GLOBALS['accept'][$val['accept']];?></td>
	<td><?php echo date("Y-m-d H:i:s",$val['lasttime']);?></td>
	<td><?php echo date("Y-m-d H:i:s",$val['usertime']);?></td>
	<td><?php echo $val['address'];?><br/><?php echo $val['lng'];?>,<?php echo $val['lat'];?></td>
	<td style="text-align:center;">
	<a HREF="javascript:modifyinvite('<?php echo $val['goods_id'];?>')">设置时间与地点</a>
	</td>
</TR>
<?php }?>
</tbody>
</TABLE>
</div>
<div class="pages" style="padding:10px;text-align:center;"><?php echo $infolist['pageinfo'];?></div>
<div id="dialog" style="display:none;"><IMG SRC="<?php echo SITE_ROOT;?>/views/js/i/032.gif" WIDTH="32" HEIGHT="32" BORDER="0" ALT=""></div>
<div style="z-index: 1000; background-color: rgb(0, 0, 0); visibility: visible; display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; width:100%;filter:alpha(opacity=50); opacity: 0.5; -moz-opacity:0.5;" id="blurdiv"></div>
</body>
</html>
