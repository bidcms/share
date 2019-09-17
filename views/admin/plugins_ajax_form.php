<iframe src="" name="groupmodify" style="display:none"></iframe>

<SCRIPT LANGUAGE="JavaScript">
<!--
	function checkform(theform)
	{
		if($('#cityname').val()=='')
		{
			alert('请填写插件名称');
			return false;
		}
	}
//-->
</SCRIPT>

<form action="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];  ?>&act=pluginsmodify" method="post"  target="groupmodify" onsubmit="return checkform(this);" >
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $plugins['id']; ?>">
	<table  border="0" class="table_form" style="width:100%;">
		<tr>
			<th width="120px">插件名称：</th>
			<td><INPUT TYPE="text" class="input-text" NAME="title" id="title"   value="<?php echo $plugins['pluginsname']['title']; ?>"></td>
		</tr>
	
		<tr>
			<th width="120px">显示位置：</th>
			<td>
			<select name="isshow">
				<?php foreach($GLOBALS['pluginsshow'] as $k=>$v){?>
				<option value="<?php echo $k;?>" <?php echo $plugins['pluginsname']['isshow']==$k?'selected':'';?>><?php echo $v;?>
				<?php }?>
			</select>
			</td>
		</tr>
		<tr>
			<th width="120px">是否显示在前台：</th>
			<td><input type="radio" name="isok" value="1" <?php echo $plugins['isok']==1?'checked':'';?>>是 <input type="radio" name="isok" value="0"  <?php echo $plugins['isok']==0?'checked':'';?>>否</td>
		</tr>
		<tr>
			<th width="120px">显示方式：</th>
			<td><input type="radio" name="showtype" value="1" <?php echo $plugins['pluginsname']['showtype']==1?'checked':'';?>>外部地址 <input type="radio" name="showtype" value="0" <?php echo $plugins['pluginsname']['showtype']==0?'checked':'';?>>插件文件夹</td>
		</tr>
		<tr>
			<th width="120px">地址：</th>
			<td><INPUT TYPE="text" class="input-text" NAME="url" id="url" value="<?php echo $plugins['pluginsname']['url']; ?>"><br/>如果是插件文件夹，请直接填写文件夹</td>
		</tr>
		<tr>
			<th width="120px"></th>
			<td><INPUT TYPE="submit" class="button" value="提交"></td>
		</tr>
	</table>
</FORM>

