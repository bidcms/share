<?php include ROOT_PATH.'/views/admin/header.php';?>
<body>
<style type="text/css">
	html{_overflow-y:scroll}
</style>

<div class="pad-10">
<div class="col-tab">
<ul class="tabBut cu-li">
<li id="tab_setting_1"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=site">站点信息</A></li>
<li id="tab_setting_2" class="on"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=seo">SEO设置</A></li>
<li id="tab_setting_3"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=email">邮箱设置</A></li>
<li id="tab_setting_5"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=template">模板设置</A></li>
<li id="tab_setting_6"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=login">登录设置</A></li>
</ul>
<div  class="contentList pad-10">
      <form action="index.php" method="post">
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="hidden" NAME="dotype" value="seo">
	<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS['setting']['adminpath'];?>">
	<INPUT TYPE="hidden" NAME="act" value="settingdata">
  <table width="100%"  class="table_form">
	 <tr>
      <th width="120px">伪静态：</th>
      <td><INPUT TYPE="radio"  NAME="seo_rewrite" id="seo_rewrite" value="1" <?php if($GLOBALS['setting']['seo_rewrite']){?>checked<?php }?>>开启 <INPUT TYPE="radio" NAME="seo_rewrite" id="seo_rewrite" value="0" <?php if(!$GLOBALS['setting']['seo_rewrite']){?>checked<?php }?>>关闭 </td>
    </tr>
    <tr>
      <th width="120px">标题附加字：</th>
      <td><INPUT TYPE="text" class="input-text" NAME="seo_title" id="seo_title"  size="70" value="<?php echo $GLOBALS['setting']['seo_title'];?>"></td>
    </tr>
	 <tr>
      <th width="120px">关键字：</th>
      <td><INPUT TYPE="text" class="input-text" NAME="seo_keyword" id="seo_keyword"  size="50" value="<?php echo $GLOBALS['setting']['seo_keyword'];?>"></td>
    </tr>
	 <tr>
     <th width="120px">描述：</th>
      <td><textarea NAME="seo_description" id="seo_description"  style="width:500px;height:200px;"><?php echo $GLOBALS['setting']['seo_description'];?></textarea></td>
    </tr>
	<tr>
      <td></td>
      <td><INPUT TYPE="submit" class="normal_button" value="提交"></td>
    </tr>
  </table>
  </FORM>
</div>



<div class="bk15"></div>
</div>
</div>
</body>

</html>