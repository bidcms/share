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
<li id="tab_setting_3" class="on" ><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=email">邮箱设置</A></li>
<li id="tab_setting_5"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=template">模板设置</A></li>
<li id="tab_setting_6"><A HREF="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=login">登录设置</A></li>
</ul>
<div  class="contentList pad-10">
   <form enctype="multipart/form-data" action="index.php" method="post">
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="hidden" NAME="dotype" value="email">
	<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS['setting']['adminpath'];?>">
	<INPUT TYPE="hidden" NAME="act" value="settingdata">
   <table width="100%" class="table_form">
	<tr>
      <td colspan="2" style="font-size:14px;">邮箱设置</td>
    </tr>
    <tr>
      <th>邮箱SMTP：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="email_smtp" id="email_smtp"  size="70" value="<?php echo $GLOBALS['setting']['email_smtp'];?>"></td>
    </tr>
	 <tr>
      <th>邮箱端口：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="email_port" id="email_port"  size="50" value="<?php echo $GLOBALS['setting']['email_port'];?>">(一般为25)</td>
    </tr>
	 <tr>
      <th>邮箱用户名：</th>
      <td width="82%"><INPUT TYPE="text" class="input-text" NAME="email_user" id="email_user"  size="50" value="<?php echo $GLOBALS['setting']['email_user'];?>"></td>
    </tr>
    <tr>
      <th>邮箱密码：</th>
      <td> <INPUT TYPE="password" class="input-text" NAME="email_password" id="email_password"  value="">为了密码安全,此处不显示密码,修改其它设置时请重新填写密码</td>
    </tr>
    <tr>
      <th>邮箱：</td>
      <td><INPUT TYPE="text" class="input-text" name="email" id="email" VALUE="<?php echo $GLOBALS['setting']['email'];?>" > <INPUT TYPE="button" onclick="testsend();" class="button" value="测试发邮件">
	 </td>
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
      <td><INPUT TYPE="password" class="input-text" name="sms_password" id="sms_password" VALUE="" >为了密码安全,此处不显示密码,修改其它设置时请重新填写密码
	 </td>
    </tr>
	
	<tr>
      <td></td>
      <td><INPUT TYPE="submit" class="normal_button" value="提交"></td>
    </tr>
  </table>
  </FORM>
</div>
<SCRIPT LANGUAGE="JavaScript">
<!--
	function testsend()
	{
		$('#test_email').val($('#email').val());
		$('#test_email_user').val($('#email_user').val());
		$('#test_email_password').val($('#email_password').val());
		$('#test_email_smtp').val($('#email_smtp').val());
		$('#test_email_port').val($('#email_port').val());
		$('#email_area').show();
	}
//-->
</SCRIPT>
<DIV id="email_area" style="display:none;border:2px solid #ccc;width:320px;position:absolute;left:330px;top:60px;height:30px;background:#fff;z-index:10px;padding:10px;">
<iframe src="" style="display:none" name="testemail"></iframe>
<FORM METHOD="POST" ACTION="index.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=testmail" target="testemail">
	收件人：<INPUT TYPE="text" class="input-text" NAME="get_email">
	<INPUT TYPE="hidden" NAME="test_email" id="test_email">
	<INPUT TYPE="hidden" NAME="test_email_user" id="test_email_user">
	<INPUT TYPE="hidden" NAME="test_email_password" id="test_email_password">
	<INPUT TYPE="hidden" NAME="test_email_smtp" id="test_email_smtp">
	<INPUT TYPE="hidden" NAME="test_email_port" id="test_email_port">
	<INPUT TYPE="submit" class="normal_button" value="发送"><INPUT TYPE="button" class="normal_button" value="关闭" onclick="$('#email_area').hide();">
</FORM>

</DIV>
</body>
</html>
