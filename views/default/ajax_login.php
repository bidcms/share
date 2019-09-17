<?php include("header.php");?>
<link rel="stylesheet" href="static/bidcms/css/login.css?1343961008.css">
</head>
<body> 
<div id="page"></div> <div class="clear"></div> 
<div id="page_overlay" style="display: none;" class="overlay"></div> 
<a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a>


<script> 
var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmsact_user";
app.page["title"] = "登录BidCms";
app.page["flash"] = <?php echo bidcms_encode($err['error']);?>;
app.page["email"] = "<?php echo $err['email'];?>";
app.page["referer"] = "<?php echo $err['referer'];?>";
app.page["is_taobao"] = "<?php echo $err['is_taobao'];?>";
app._csr = true;
var view = app.view = $("page").hide();

app.render("login/login_dialog", view, function(code, html){view.show();}); </script>  
<script type="text/javascript" src="static/bidcms/js/views_dialog.js?1355734024.js"></script>

</body></html>


