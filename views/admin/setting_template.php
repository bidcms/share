<?php include ROOT_PATH.'/views/admin/header.php';?>
<body>
<style type="text/css">
	html{_overflow-y:scroll}
</style>

<div class="pad-10">
<div class="col-tab">
<ul class="tabBut cu-li">
<li id="tab_setting_1"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=site">站点信息</A></li>
<li id="tab_setting_2"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=seo">SEO设置</A></li>
<li id="tab_setting_3"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=email">邮箱设置</A></li>
<li id="tab_setting_5" class="on" ><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=template">模板设置</A></li>
<li id="tab_setting_6"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=login">登录设置</A></li>

</ul>
<div  class="contentList pad-10">
<FORM METHOD="POST" ACTION="index.php">
<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS['setting']['adminpath'];?>">
<INPUT TYPE="hidden" NAME="act" value="settingdata">
<div id="man_zone">
<TABLE  style="background:none;">
<TR style="width:33%px;">
<?php foreach($tpldir as $k=>$v){?>
<td style="padding:10px;"><table cellspacing="0" cellpadding="0" style="margin-left: 10px; width: 200px;"><tbody><tr><td style="width: 120px;border-top: medium none;">
<p style="margin-bottom: 2px;"><img alt="预览" src="<?php echo $v['thumb'];?>" onclick="window.open('index.php?tplview=<?php echo $v['tplname'];?>','_blank','');" style="width:128px;"></p>
</td>
<td style="padding-left: 17px; width: 80px; border-top: medium none; vertical-align: top;">
<label>默认 <input type="radio" value="<?php echo $v['tplname'];?>" name="site_template_dir" class="radio" <?php echo TPL_DIR==$v['tplname']?'checked':'';?>></label><br/>
<?php echo $v['desc'];?>
</td></tr>
<tr><td colspan="2"><textarea style="margin-right: 0pt; width:180px;border:0px;background:none;"><?php echo $v['info'];?></textarea></td></tr>
</tbody></table></td>
<?php if(($k+1)%3==0){?></tr><tr><?php }?>
<?php }?>
</TR>
</TABLE>
<DIV ID="" CLASS="" style="padding-left:20px;">
	<INPUT TYPE="hidden" NAME="dotype" value="template">
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="submit" class="normal_button" value="提交">
</DIV>
</div>

</FORM>
</div>



<div class="bk15"></div>
</div>
</div>
</body>

</html>