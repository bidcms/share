<?php
/*
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms

	$Id: getinfo.php 2010-08-24 10:42 $
*/

include('../inc/common.simple.php');
//分类id
$bigcateid=empty($_REQUEST['pid'])?0:intval($_REQUEST['pid']);


if($bigcateid)
{
	$sql="select * from `".$bidcmstable_prefix."catelist` where parentid= ".$bigcateid." order by sortorder desc";
	$cates=array();
	$query=mysql_query($sql);
	while($data=mysql_fetch_array($query))
	{
		$cates[]=$data;
	}
}
?>
<?php if($cates){?>
<?php foreach($cates as $key=>$val){

?>
<TR class="tr1" parent="<?php echo $val['layer'];?>" level="<?php echo $val['level'];?>" id="cate<?php echo $val['id'];?>">
	<TD>
	<?php echo str_repeat('　',$val['level']);?><span style="cursor:pointer;" onclick="showmore('<?php echo $val['id'];?>');">　<b id="showtag<?php echo $val['id'];?>">+</b>　</span><span><?php echo $val['catename'];?> </span>
	</TD>
	
	<td style="text-align:center;width:50px;">
	<div id="recommend-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff0000';" onmouseout="this.style.backgroundColor='';" onclick="updateVal('catelist','recommendinput-<?php echo $val['id'];?>','id','',['是','否']);">
	<?php echo $val['recommend']?'是':'否';?>
	</div>
	<INPUT TYPE="text" class="hideinput" id="recommendinput-<?php echo $val['id'];?>" value="<?php echo intval(!$val['recommend']);?>" title='nochange'>
	</td>
	<TD style="text-align:center;width:50px;">
	<div id="sortorder-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('sortorderinput-<?php echo $val['id'];?>');"><?php echo $val['sortorder']>0?$val['sortorder']:'0';?>
	</div>
	<input class="hideinput" id="sortorderinput-<?php echo $val['id'];?>" ondblclick="confirmValue('catelist',this.value,'sortorderinput-<?php echo $val['id'];?>','id');">
	</TD>
	<TD style="text-align:center;width:50px;">
	<div id="cateindex-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('cateindexinput-<?php echo $val['id'];?>');"><?php echo $val['cateindex'];?>
	</div>
	<input class="hideinput" id="cateindexinput-<?php echo $val['id'];?>" ondblclick="confirmValue('catelist',this.value,'cateindexinput-<?php echo $val['id'];?>','id');">
	</TD>
	<TD style="text-align:center;width:50px;">
	<div id="categroup-<?php echo $val['id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('categroupinput-<?php echo $val['id'];?>');"><?php echo $val['categroup'];?>
	</div>
	<input class="hideinput" id="categroupinput-<?php echo $val['id'];?>" ondblclick="confirmValue('catelist',this.value,'categroupinput-<?php echo $val['id'];?>','id');">
	</TD>
	<td width="170px" align="center">
	<A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=cate&type=del&id=<?php echo $val['id'];?>" onclick="return confirm('其下子分类也一并删除，确认删除？');">删除</A>
	<a href="javascript:modifycate('<?php echo $val['id'];?>')">修改</a>
	</td>
</TR>
<?php }?>
<?php }?>