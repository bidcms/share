<?php include ROOT_PATH.'/views/admin/header.php';?>
<body>
<style type="text/css">
	html{_overflow-y:scroll}
</style>

<div class="pad-10">
<div class="col-tab">
<ul class="tabBut cu-li">
<li id="tab_setting_1"><A HREF="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=site">站点信息</A></li>
<li id="tab_setting_2"><A HREF="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=seo">SEO设置</A></li>
<li id="tab_setting_3"><A HREF="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=email">邮箱设置</A></li>
<li id="tab_setting_5"><A HREF="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=template">模板设置</A></li>
<li id="tab_setting_6" class="on" ><A HREF="paishi.php?con=<?php echo $GLOBALS['setting']['adminpath'];?>&act=setting&type=bid">拍卖设置</A></li>
</ul>
<div  class="contentList pad-10">
   <form action="paishi.php" method="post">
	<INPUT TYPE="hidden" NAME="commit" value="1">
	<INPUT TYPE="hidden" NAME="dotype" value="bid">
	<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS['setting']['adminpath'];?>">
	<INPUT TYPE="hidden" NAME="act" value="settingdata">
	<INPUT TYPE="hidden" NAME="formhash" value="<?php echo formhash();?>">
   <table width="100%" class="table_form">
    <tr><td>邀请拍卖默认增加时间(秒)</td><td><INPUT TYPE="text" class="input-text" NAME="site_iaddtime"  value="<?php echo $GLOBALS['setting']['site_iaddtime'];?>"> 默认为50*24*3600秒</td></tr>
	<tr><td>开启自动取价</td><td><INPUT TYPE="text" class="input-text" NAME="auto_getinfo"  value="<?php echo $GLOBALS['setting']['auto_getinfo'];?>"> 1为自动取价，0为停止取价</td></tr>
	<tr>
      <td colspan="2" style="font-size:14px;">金币设置</td>
    </tr>
    <tr>
      <th>可用资金：</th>
      <td width="82%">
	  <select name="site_extcredits1" id="extcredits1">
	  <?php foreach($credits as $k=>$v){?>
	  <option value="extcredits<?php echo $k;?>" <?php echo 'extcredits'.$k==$GLOBALS['setting']['site_extcredits1']?'selected':'';?>><?php echo $v['title'];?></option>
	  <?php
	  }
	  ?>
	  </select>
	  </td>
    </tr>
	 <tr>
      <th>M豆：</th>
      <td width="82%"><select name="site_extcredits2" id="extcredits2">
	  <?php foreach($credits as $k=>$v){?>
	  <option value="extcredits<?php echo $k;?>" <?php echo 'extcredits'.$k==$GLOBALS['setting']['site_extcredits2']?'selected':'';?>><?php echo $v['title'];?></option>
	  <?php
	  }
	  ?>
	  </select>
	 
	  </td>
    </tr>
	
	<tr>
      <th>冻结资金：</th>
      <td width="82%"><select name="site_extcredits3" id="extcredits3">
	  <?php foreach($credits as $k=>$v){?>
	  <option value="extcredits<?php echo $k;?>" <?php echo 'extcredits'.$k==$GLOBALS['setting']['site_extcredits3']?'selected':'';?>><?php echo $v['title'];?></option>
	  <?php
	  }
	  ?>
	  </select>
	 
	  </td>
    </tr>
	<tr>
      <td colspan="2" style="font-size:14px;">结算设置</td>
    </tr>
	<tr>
		<th>用户组</th>
		<td>竞拍折扣</td>
	</tr>
	<tr>
		<th>系统组</th>
		<td><INPUT TYPE="text" class="input-text" NAME="sitemoney_bid[system]"  value="<?php echo $GLOBALS['setting']['sitemoney_bid']['system'];?>"></td>
	</tr>
	<tr>
		<th>会员组</th>
		<td><INPUT TYPE="text" class="input-text" NAME="sitemoney_bid[member]"  value="<?php echo $GLOBALS['setting']['sitemoney_bid']['member'];?>"></td>
	</tr>
	<?php foreach($usergroup as $k=>$v){?>
	<tr>
		<th><?php echo $v[1];?></th>
		<td><INPUT TYPE="text" class="input-text" NAME="sitemoney_bid[special][<?php echo $v[0];?>]" value="<?php echo $GLOBALS['setting']['sitemoney_bid']['special'][$v[0]];?>"></td>
	</tr>
	<?php }?>
	
	<tr>
      <td></td>
      <td><INPUT TYPE="submit" class="button" value="提交"></td>
    </tr>
  </table>
  </FORM>
</div>

</body>
</html>
