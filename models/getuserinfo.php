<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: upload.php 2010-08-24 10:42 $
*/
include '../inc/common.simple.php';
$uid=$session->get('uid');
if($uid<1)
{
	echo '{"err":404,"msg":"用户不存在"}';
	exit;
}
else
{
	echo '{"err":0,"msg":"用户存在"}';
	exit;
}