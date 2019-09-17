<?php
if(!defined('IN_BIDCMS')) {
	exit('Access Denied');
}
//»º´æ·ÖÀà
if(!checkfile('cate',86400))
{
	$query=$db->query('select id,catename,level,layer,parentid,cateindex,categroup,customurl from '.tname('catelist').' order by layer asc');
	while($rows=$db->fetch_array($query))
	{
		$cate[$rows['id']]=$rows;
		if($rows['level']==1)
		{
			$pcate[$rows['id']]=$rows;
		}
	}
	write('pcate',$pcate);
	write('cate',$cate);
}
else
{
	$cate=read('cate');
	$pcate=read('pcate');
}