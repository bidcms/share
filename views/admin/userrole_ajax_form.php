<iframe src="" name="groupmodify" style="display:none"></iframe>
<FORM METHOD="POST" ACTION="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=userrolemodify" target="groupmodify">
<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $role['groupid'];?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<table width="300px" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_style">
<tr>
<td width="70px" class="left_title_1"><span class="left-title">名称：</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="rolename"  value="<?php echo $group['rolename'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">字段名：</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="rolekey"  value="<?php echo $group['rolekey'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">分组名：</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="roletype"  value="<?php echo $group['roletype'];?>"></td>
</tr>
<td colspan="2" align="center"><INPUT TYPE="submit" value="提交" class="normal_button"></td>
</tr>
</table>
</FORM>