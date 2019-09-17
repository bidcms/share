<?php
/*
	[Phpup.Net!] (C)2009-2011 Phpup.net.
	This is NOT a freeware, use is subject to license terms

	$Id: admin.class.php 2010-08-24 10:42 $
*/
if(!defined('IN_BIDCMS')) {
	exit('Access Denieds');
}
?>
<?php include ROOT_PATH.'/views/admin/header.php';?>
<body>

<div class="subnav">
    <div class="content-menu ib-a blue line-x">
       
	</div>
</div>
<form method="post" action="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=listgoods<?php  echo $sortform; ?>"  name="searchform">
<table width="100%" cellspacing="0" class="search-form">
    <tbody>
		<tr>
		<td>
		<div class="explain-col">
		关键字：<INPUT TYPE="text" NAME="keyword" id="keyword" class="input-text" value="<?php  echo $_REQUEST['keyword']; ?>" >
		      <input type="submit"  class="button"  value="确定" >
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
	<TH style="text-align:center;width:200px;">描述</TH>
	<TH style="text-align:center;">所属画板(<a href="#" style="color:#ff0000" onclick="window.open('index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=showboard','','width=300px,height=400px');">查看</a>)</TH>
	<TH style="text-align:center;">分类数字ID(<a href="#" style="color:#ff0000" onclick="window.open('index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=showcate','','width=300px,height=400px');">查看</a>)</TH>
	<TH style="text-align:center;">所有者</TH>
	<TH>转采次数</TH>
	<TH>收藏次数</TH>
	<TH>评论数</TH>
	<TH>级别</TH>
	<TH style="text-align:center;width:150px;">关键字</TH>
	<TH  width="100px">操作</TH>
</TR>
</thead>
<tbody>
<?php foreach($infolist['data'] as $key=>$val){?>
<TR class="tr<?php echo $key%2;?>" id="goods<?php echo $val['pin_id'];?>">
	<TD>
	<div id="raw_text-<?php echo $val['pin_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('raw_textinput-<?php echo $val['pin_id'];?>');"><?php echo !empty($val['raw_text'])?$val['raw_text']:'-';?>
	</div>
	<textarea class="hideinput" style="height:40px;" id="raw_textinput-<?php echo $val['pin_id'];?>" ondblclick="confirmValue('pin',this.value,'raw_textinput-<?php echo $val['pin_id'];?>','pin_id');"></textarea>
	</TD>
	<TD style="text-align:center;width:120px;">
	<div id="board_id-<?php echo $val['pin_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('board_idinput-<?php echo $val['pin_id'];?>');"><?php echo $val['board_id'];?>
	</div>
	<input class="hideinput" id="board_idinput-<?php echo $val['pin_id'];?>" ondblclick="confirmValue('pin',this.value,'board_idinput-<?php echo $val['pin_id'];?>','pin_id');">
	</TD>
	<TD style="text-align:center;width:120px;">
	<div id="cate-<?php echo $val['pin_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('cateinput-<?php echo $val['pin_id'];?>');"><?php echo !empty($val['cate'])?$val['cate']:'0';?>
	</div>
	<input class="hideinput" id="cateinput-<?php echo $val['pin_id'];?>" ondblclick="confirmValue('pin',this.value,'cateinput-<?php echo $val['pin_id'];?>','pin_id');">
	</TD>
	<td style="text-align:center;width:80px;"><?php echo $val['user_id'];?></td>
	<td  style="text-align:center;width:80px;"><?php echo $val['repin_count'];?></td>
	<td  style="text-align:center;width:80px;"><?php echo $val['like_count'];?></td>
	<td style="text-align:center;width:80px;"><?php echo $val['comment_count'];?></td>
	<TD style="text-align:center;width:80px;">
<div id="level-<?php echo $val['pin_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('levelinput-<?php echo $val['pin_id'];?>');"><?php echo !empty($val['level'])?$val['level']:'0';?>
</div>
<input class="hideinput" id="levelinput-<?php echo $val['pin_id'];?>" ondblclick="confirmValue('pin',this.value,'levelinput-<?php echo $val['pin_id'];?>','pin_id');">
</TD>
<TD>
	<div id="keywords-<?php echo $val['pin_id'];?>" onmouseover="this.style.backgroundColor='#ff8800';" onmouseout="this.style.backgroundColor='';" onclick="modifyValue('keywordsinput-<?php echo $val['pin_id'];?>');"><?php echo !empty($val['keywords'])?$val['keywords']:'-';?>
	</div>
	<textarea class="hideinput" style="height:40px;" id="keywordsinput-<?php echo $val['pin_id'];?>" ondblclick="confirmValue('pin',this.value,'keywordsinput-<?php echo $val['pin_id'];?>','pin_id');"></textarea>
	</TD>
	<TD style="text-align:center;">
	<a href="#" onclick="window.open('index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=showfile&fileid=<?php echo $val['file_id'];?>','','width=400px,height=400px');">查看图片</a><br/>
	<A HREF="javascript:deleteVal('pin','<?php echo $val['pin_id'];?>','goods<?php echo $val['pin_id'];?>','pin_id')">删除</A>
	<A HREF="index.php?con=pins&act=item&id=<?php echo $val['pin_id'];?>" target="_blank">查看采集</A>
	
	</TD>
</TR>
<?php }?>
</tbody>
</TABLE>
</div>
<div class="pages" style="padding:10px;text-align:center;"><?php echo $infolist['pageinfo'];?></div>
</body>
</html>
