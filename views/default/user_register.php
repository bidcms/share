<?php include("header.php");?>
<link rel="stylesheet" href="static/bidcms/css/login.css?1353670776.css">
</head>
 <body> <div id="page"></div> <div class="clear"></div> <div id="page_overlay" style="display: none;" class="overlay"></div> <a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a>  
 <script> var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmscon_user/bidcmsact_register";
app.page["title"] = "注册BidCms帐号";
app.page["invite"] = null;
app.page["binding"] = null;
app.page["user"] = null;
app.page["referer"] = null;
app._csr = true;
var view = app.view = $("page").hide();

app.render("signup/signup", view, function(code, html){view.show();}); 
</script>
<script type="text/javascript" src="static/bidcms/js/views_dialog.js?1354679133.js"></script>
</body></html>