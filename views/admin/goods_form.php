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

	
	function checkform(theform)
	{
		if(theform.title.value=='')
		{
			alert('标题不能为空');
			return false;
		}
	
		
	}
</SCRIPT>
<div class="subnav">
    <div class="content-menu ib-a blue line-x">
        <A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=listgoods"class="on"><em>商品管理</em></A>
	</div>
</div>
<div id="man_zone">
  <form action="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=goodsmodify"  onsubmit="return checkform(this);"  enctype="multipart/form-data"  method="post">
  <INPUT TYPE="hidden" NAME="commit" value="1">
  <INPUT TYPE="hidden" NAME="updateid" value="<?php echo $goods_info['id'];?>">
<table width="100%" class="table_form">
		<tbody>
		<tr>
			<td width="80">商品标题：</td> 
			<td><input type="text" size="30"  id="title" value="<?php echo $goods_info['title'];?>" class="input-text" name="title"></td>
		</tr>
		
		<tr>
			<td>属性：</td>
			<td>
			<select name="mediatype">
				<option value="0">请选择
				<?php foreach($GLOBALS['mediatype'] as $k=>$v){?>
				<option value="<?php echo $k;?>" <?php echo $goods_info['mediatype']==$k?'selected':'';?>><?php echo $v;?>
				<?php }?>
			</select>
			</td>
		</tr>
		<tr>
			<td>所属画板：</td>
			<td>
				<input type="text" name="catename" class="input-text" value="<?php  echo  $goods_info['catename']; ?>">
			</td>
		</tr>
		<tr>
			<td>视频：</td>
			<td>
				<input type="text" size="60" name="video" class="input-text" value="<?php  echo  $goods_info['video']; ?>">
		</tr>
		<tr>
			<td>所属会员：</td>
			<td>
				<input type="text" name="username" class="input-text" value="<?php  echo  $goods_info['username']; ?>">
			</td>
		</tr>
		<tr>
			<td>缩略图：</td>
			<td>
			<?php
			
				if($goods_info['thumb'])
				{
                     echo "<img src='".createthumb($goods_info['thumb'])."' height='100px'><br/>";
				}
			?>
            本地图片：<input type="file" name="thumb"><br/>
			外部地址：<input type="text" name="thumburl" class="input-text"  style="width:300px;" value="<?php echo $goods_info['thumb'];?>">
			</td>
		</tr>

		<tr>
			<td>来源地址：</td>
			<td><input type="text" size="30" id="url" class="input-text" value="<?php echo $goods_info['url'];?>" name="url" ></td>
		</tr>
		
		<tr>
			<td valign="top">关键字：</td>
			<td>
			<textarea class="input-text" name="keywords" style="width:400px;height:200px;"><?php echo $goods_info['keywords'];?></textarea></td>
		</tr>
		
		<tr>
			<td></td>
			<td>
			<INPUT TYPE="submit" class="button" value="提交">
			</td>
		</tr>
	</tbody></table>
  </FORM>
</div>

</body>
</html>
