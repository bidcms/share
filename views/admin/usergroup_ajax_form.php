<iframe src="" name="groupmodify" style="display:none"></iframe>
<FORM METHOD="POST" ACTION="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=usergroupmodify" target="groupmodify">
<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $group['groupid'];?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<table width="300px" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_form">
<tr>
<td width="70px" class="left_title_1"><span class="left-title">会员组名：</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="groupname"  value="<?php echo $group['groupname'];?>"></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">组标志：</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="groupkey"  value="<?php echo $group['groupkey'];?>"></td>
</tr>
<td colspan="2" align="center"><INPUT TYPE="submit" value="提交" class="button"></td>
</tr>
</table>
</FORM>