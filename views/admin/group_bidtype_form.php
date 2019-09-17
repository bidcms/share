<iframe src="" name="catemodify" style="display:none"></iframe>

<SCRIPT LANGUAGE="JavaScript">
<!--
	function checkform(theform)
	{
		if(theform.catename.value=='')
		{
			alert('分类名不能为空');
			return false;
		}
		if(theform.keywords.value=='')
		{
			alert('关键字不能为空');
			return false;
		}
		
	}
//-->
</SCRIPT>

<FORM METHOD="POST" ACTION="paishi.php" onsubmit="return checkform(this);" target="catemodify" >
<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS["setting"]["adminpath"];?>">
<INPUT TYPE="hidden" NAME="act" value="groupbidtype">
<INPUT TYPE="hidden" NAME="id" value="<?php echo $cateid;?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<input type="hidden" value="<?php echo formhash();?>" name="formhash">
<!--
发起和出价根据拍卖类型设置m豆
结算根据用户组设置折扣
-->
<table width="100%" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_form">
<?php $cateconfig['bidtype']=unserialize($cateconfig['bidtype']);
?>
<tr>
	<th>用户组</th>
	<?php foreach($GLOBALS['bidtype'] as $k=>$v){?><td><?php echo $v;?></td><?php }?>
</tr>

<tr>
	<th>会员组</th>
	<?php foreach($GLOBALS['bidtype'] as $k=>$v){?><td style="text-align:center;">
	<INPUT TYPE="checkbox" NAME="bidtype[member][<?php echo $k;?>]" <?php echo in_array($k,$cateconfig['bidtype']['member'])?'checked':'';?> value="<?php echo $k;?>"></td><?php }?>
</tr>
<?php foreach($systemgroup as $k=>$v){?>
<tr>
	<th><?php echo $v[1];?></th>
	<?php foreach($GLOBALS['bidtype'] as $key=>$val){?><td style="text-align:center;">
	<INPUT TYPE="checkbox" NAME="bidtype[system][<?php echo $v[0];?>][<?php echo $key;?>]" <?php echo in_array($key,$cateconfig['bidtype']['system'][$v[0]])?'checked':'';?> value="<?php echo $key;?>"></td><?php }?>
</tr>
<?php }?>
<?php foreach($usergroup as $k=>$v){?>
<tr>
	<th><?php echo $v[1];?></th>
	<?php foreach($GLOBALS['bidtype'] as $key=>$val){?><td style="text-align:center;">
	<INPUT TYPE="checkbox" NAME="bidtype[special][<?php echo $v[0];?>][<?php echo $key;?>]" <?php echo in_array($key,$cateconfig['bidtype']['special'][$v[0]])?'checked':'';?> value="<?php echo $key;?>"></td><?php }?>
</tr>
<?php }?>


<td colspan="6" align="center"><INPUT TYPE="submit" value="提交" class="button"></td>
</tr>
</table>
</FORM>