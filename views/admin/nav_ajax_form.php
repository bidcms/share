<iframe src="" name="sitecatemodify" style="display:none"></iframe>
<FORM METHOD="POST" ACTION="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=navmodify" target="sitecatemodify">
<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $nav['id'];?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<table width="300px" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_form">
<tr>
	<th width="60px">导航名称：</th>
	<td><INPUT TYPE="text" class="input-text" NAME="navname" id="navname"   value="<?php echo $nav['navname']; ?>"></td>
</tr>

<tr>
	<th width="60px">类别：</th>
	<td>
		<SELECT NAME="type">
			<OPTION VALUE="0">选择类别</option>
			<OPTION VALUE="1" <?php  if($nav['type'] ==1 ){ echo 'selected'; }  ?> >分类</option>
			<OPTION VALUE="2" <?php  if($nav['type'] ==2 ){ echo 'selected'; }  ?> >关键字</option>
			<OPTION VALUE="3" <?php  if($nav['type'] ==3 ){ echo 'selected'; }  ?> >外部链接</option>
		</SELECT>
	</td>
</tr>

<tr>
	<th width="60px">位置：</th>
	<td>
		<SELECT NAME="location">
			<OPTION VALUE="3" <?php  if($nav['location'] ==3 ){ echo 'selected'; }  ?> >上部导航</option>
			<OPTION VALUE="1" <?php  if($nav['location'] ==1 ){ echo 'selected'; }  ?> >中部导航</option>
			<OPTION VALUE="4" <?php  if($nav['location'] ==4 ){ echo 'selected'; }  ?> >下部导航</option>
		</SELECT>
	</td>
</tr>

<tr>
	<th width="60px">排序：</th>
	<td><INPUT TYPE="text" class="input-text" NAME="sotr" id="sort"   value="<?php echo $nav['sotr']; ?>"></td>
</tr>

<tr>
	<th width="60px">新窗口：</th>
	<td><input type="radio" value="1" name="target" <?php echo $nav['target']?'checked':'';?>>是&nbsp;<input type="radio" value="0" name="target" <?php echo !$nav['target']?'checked':'';?>>否</td>
</tr>

<tr>
	<th width="60px">内容：</th>
	<td>
		<INPUT TYPE="text" class="input-text" NAME="content" id="content"   value="<?php echo $nav['content']; ?>"><br>
		请输入多个分类id号用,号间隔，或输入一个关键字 <br>
		例如:1,2,3或手机或者一个外部链接
	</td>
</tr>

<tr>
<td colspan="2" align="center"><INPUT TYPE="submit" value="提交" class="button"></td>
</tr>
</table>
</FORM>