<table width="300px" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_style">
<tr>
<td width="70px" class="left_title_1"><span class="left-title">用户名：</span></td>
<td><?php echo $user['username'];?></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">IP：</span></td>
<td><?php echo $user['ip'];?></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">手机：</span></td>
<td><?php echo $user['mobile'];?></td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">邮箱：</span></td>
<td><?php echo $user['email'];?></td>
</tr>
<td colspan="2" align="center"><INPUT TYPE="button" value="关闭" class="normal_button" onclick="$('#user_area').hide();"></td>
</tr>
</table>