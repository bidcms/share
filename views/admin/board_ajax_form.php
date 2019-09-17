<iframe src="" name="catemodify" style="display:none"></iframe>

<SCRIPT LANGUAGE="JavaScript">
<!--
	function checkform(theform)
	{
		if(theform.catename.value=='')
		{
			alert('画板名不能为空');
			return false;
		}
		
	}
//-->
</SCRIPT>
<FORM METHOD="POST" ACTION="index.php" onsubmit="return checkform(this);" target="catemodify">
<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS["setting"]["adminpath"];?>">
<INPUT TYPE="hidden" NAME="act" value="boardmodify">
<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $board['id'];?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<table width="100%" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_form">

<tr>
<td width="70px" class="left_title_1"><span class="left-title">画板名</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="name"   id="name"   value="<?php echo $board['name'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">所属会员</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="username" id="username" value="<?php echo $userinfo['username'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">排序</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="sortorder"   id="sortorder"  value="<?php echo $board['sortorder'];?>"></td>
</tr>

<tr>
<td>所属分类：</td>
<td>
	<select name="cate"  id="cate"> 
		<option value="0">请选择</option>
		<?php  foreach($GLOBALS['cate'] AS $key => $val){  ?>	
		<option value="<?php  echo  $key; ?>"  <?php  if( $key ==  $board['cateid']){ echo "selected";}   ?>  ><?php  echo  $val['othername']; ?>　<?php  echo  $val['catename']; ?></option>
		<?php  }  ?>
	</select>
</td>
</tr>
<td colspan="2" align="center"><INPUT TYPE="submit" value="提交" class="button"></td>
</tr>
</table>
</FORM>