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

<div class="table-list">
<form method="post" action="">
<input type="hidden" name="groupid" value="<?php echo $groupid;?>">
<input type="hidden" name="commit" value="1">
<TABLE cellpadding="1" cellspacing="1" style="width:100%;margin:auto;">

<?php foreach($roles as $key=>$val){?>
<TR class="tr1">
<th style="text-align:left;"><?php echo $key;?></th>
</TR>
<TR class="tr1"><td>
<?php foreach($val as $k=>$v){?>
	<input type="checkbox" name="roles[]" id="role<?php echo $v['roleid'];?>" value="<?php echo $v['rolekey'];?>" <?php echo $v['checked'];?>>&nbsp;&nbsp;<label for="role<?php echo $v['roleid'];?>"><?php echo $v['rolename'];?></label>&nbsp;
<?php }?></td>
</TR>
<?php }?>
<tr class="tr1">
<td style="text-align:center;"><INPUT TYPE="submit" class="normal_button" value="提交"></td>
</tr>
</TABLE>
</form>
</div>
<DIV id="cate_area" style="display:none;border:2px solid #ccc;width:300px;position:absolute;left:260px;top:60px;background:#fff;z-index:10px;"></DIV>
</body>
</html>
