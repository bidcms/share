<iframe src="" name="linkmodify" style="display:none"></iframe>

<SCRIPT LANGUAGE="JavaScript">
<!--
	function checkform(theform)
	{
		if($('#title').val()=='')
		{
			alert('请填写标题');
			return false;
		}


		if($('#url').val()=='')
		{
			alert('请填写连接地址');
			return false;
		}
	}
//-->
</SCRIPT>

<form action="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];  ?>&act=linkmodify"  enctype="multipart/form-data"  method="post"  target="linkmodify" onsubmit="return checkform(this);" >
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $link['id']; ?>">
	<table  border="0" class="table_form" style="width:100%;">
		<tr>
			<th width="120px">标题：</th>
			<td><INPUT TYPE="text" class="input-text" NAME="title" id="title"   value="<?php echo $link['title']; ?>"></td>
		</tr>

		<tr>
			<th width="120px">地址：</th>
			<td><INPUT TYPE="text" class="input-text" NAME="url" id="url"   value="<?php echo $link['url']; ?>"></td>
		</tr>
		<tr>
			<th width="120px">类型：</th>
			<td><input type="radio" value="1"    <?php if(empty($link['type'])){ ?>   checked  <?php }?>    <?php if($link['type'] == 1){ ?>   checked  <?php }?>   name="type">文字 <input type="radio" value="2"  <?php if($link['type'] == 2){ ?>   checked  <?php }?> name="type">图片</td>
		</tr>
		<tr>
			<th width="120px">图片：</th>
			<td>
				<input type="file" name="thumb">
				<?php
					if($othersite['thumb'])
					{
					     echo "<img src='".$othersite['thumb']."' height='100px'>";
					}
				?>
			</td>
		</tr>

		<tr>
			<th width="120px">排序：</th>
			<td><INPUT TYPE="text" class="input-text" NAME="sortorder" id="sortorder"   value="<?php echo $link['sortorder']; ?>"></td>
		</tr>

		<tr>
			<th width="120px">描述：</th>
			<td>
				<textarea style="width:200px;height:50px;" id="decs" name="decs"></textarea>
			</td>
		</tr>


		<tr>
			<th width="120px"></th>  
			<td><INPUT TYPE="submit" class="button" value="提交"></td>
		</tr>
	</table>
</FORM>

