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


<form method="post" action="" name="searchform">
<INPUT TYPE="hidden" NAME="usertype" value="<?php echo $_GET['act'];?>">
<table width="100%" cellspacing="0" class="search-form">
    <tbody>
		<tr>
		<td><div class="explain-col">会员名： <INPUT TYPE="text" NAME="username" class="input-text"> <input type="submit" name="dosubmit" class="button" value="搜索"> 
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
	<TH style="text-align:left;">用户名</TH>
	<TH style="text-align:left;">邮箱</TH>
	
	<TH>注册时间</TH>
	<TH>操作</TH>
</TR>
</thead>
<tbody>
<?php foreach($userlist['data'] as $key=>$val){?>
<TR class="tr<?php echo $key%2;?>" id="user<?php echo $val['user_id'];?>">
	<TD>
	<div id="username-<?php echo $val['user_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('usernameinput-<?php echo $val['user_id'];?>');"><?php echo $val['username'];?>
	</div>
	<input class="hideinput" id="usernameinput-<?php echo $val['user_id'];?>" ondblclick="confirmValue('user',this.value,'usernameinput-<?php echo $val['user_id'];?>','user_id');">
	</TD>

	<TD>
	<div id="email-<?php echo $val['user_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('emailinput-<?php echo $val['user_id'];?>');"><?php echo $val['email'];?>
	</div>
	<input class="hideinput" id="emailinput-<?php echo $val['user_id'];?>" ondblclick="confirmValue('user',this.value,'emailinput-<?php echo $val['user_id'];?>','user_id');">
	</TD>

	

	<TD  align="center"><?php echo date('Y-m-d',$val['created_at']);?></TD>

	
	<TD align="center">
	<A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=usermodify&updateid=<?php echo $val['user_id'];?>">修改</A>
	<A HREF="javascript:deleteVal('user','<?php echo $val['user_id'];?>','user<?php echo $val['user_id'];?>','user_id')">删除</A>
	</TD>
</TR>
<?php }?>
</tbody>
</TABLE>
</div>
<div class="pages"><?php echo $userlist['pageinfo'];?></div>

</body>
</html>
