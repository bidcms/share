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
<li id="tab_setting_5"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=template">模板设置</A></li>
<li id="tab_setting_6" class="on" ><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=login">登录设置</A></li>
</ul>
<div  class="contentList pad-10">
   <form enctype="multipart/form-data" action="index.php" method="post">
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="hidden" NAME="dotype" value="login">
	<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS['setting']['adminpath'];?>">
	<INPUT TYPE="hidden" NAME="act" value="settingdata">
   <table width="100%" class="table_form">
	<tr>
      <td colspan="2" style="font-size:14px;">新浪设置</td>
    </tr>
    <tr>
      <th>App Key：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="sina_appkey" size="40" value="<?php echo $GLOBALS['setting']['sina_appkey'];?>"><a href="http://open.weibo.com" target="_blank">申请</a></td>
    </tr>
	 <tr>
      <th>App Secret：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="sina_appsecret"  size="40" value="<?php echo $GLOBALS['setting']['sina_appsecret'];?>"></td>
    </tr>
	<tr>
      <td colspan="2" style="font-size:14px;">QQ空间设置</td>
    </tr>
    <tr>
      <th>App Id：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="qq_appid" size="40" value="<?php echo $GLOBALS['setting']['qq_appid'];?>"><a href="http://connect.opensns.qq.com" target="_blank">申请</a></td>
    </tr>
	<tr>
      <th>App Key：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="qq_appkey"  size="40" value="<?php echo $GLOBALS['setting']['qq_appkey'];?>"></td>
    </tr>
	<tr>
      <td colspan="2" style="font-size:14px;">人人网设置</td>
    </tr>
    <tr>
      <th>API Key：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="renren_appkey" size="40" value="<?php echo $GLOBALS['setting']['renren_appkey'];?>"><a href="http://api.renren.com" target="_blank">申请</a></td>
    </tr>
	<tr>
      <th>Secret Key：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="renren_appsecret"  size="40" value="<?php echo $GLOBALS['setting']['renren_appsecret'];?>"></td>
    </tr>

	<tr>
      <td colspan="2" style="font-size:14px;">豆瓣设置</td>
    </tr>
    <tr>
      <th>API Key：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="douban_appkey" size="40" value="<?php echo $GLOBALS['setting']['douban_appkey'];?>"><a href="http://www.douban.com/service/" target="_blank">申请</a></td>
    </tr>
	<tr>
      <th>Secret Key：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="douban_appsecret"  size="40" value="<?php echo $GLOBALS['setting']['douban_appsecret'];?>"></td>
    </tr>
	<tr>
      <td colspan="2" style="font-size:14px;">短信设置</td>
    </tr>
    <tr>
      <th>短信用户名：</th>
      <td><INPUT TYPE="text" class="input-text" name="sms_user" id="sms_user" VALUE="<?php echo $GLOBALS['setting']['sms_user'];?>" >
	 </td>
    </tr>
	<tr>
      <th>短信密码：</th>
      <td><INPUT TYPE="password" class="input-text" name="sms_password" id="sms_password" VALUE="<?php echo $GLOBALS['setting']['sms_password'];?>" >
	 </td>
    </tr>
	
	<tr>
      <td></td>
      <td><INPUT TYPE="submit" class="button" value="提交"></td>
    </tr>
  </table>
  </FORM>
</div>

</body>
</html>
