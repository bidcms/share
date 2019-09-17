<?php
/*
	[Bidcms.com!] (C)2009-2011 Bidcms.com.
	This is NOT a freeware, use is subject to license terms
	$author limengqi
	$Id: setpin.php 2010-08-24 10:42 $
*/

include '../inc/common.simple.php';
header('Content-Type: image/jpeg');
$url=isset($_GET['url'])?$_GET['url']:'';
if(!empty($url))
{
	$content=bidcms_fsockopen($url);
	if(strpos($url,'tudou'))
	{
		preg_match("#pic: (.*)#",$content,$match);
		if(!empty($match[1]))
		{
			echo file_get_contents(str_replace('"','',str_replace("'","",$match[1])));
		}
	}
}