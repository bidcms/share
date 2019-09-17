<?php include("header.php");?>
<link rel="stylesheet" href="static/bidcms/css/login.css?1353670776.css">
</head>
 <body> <div id="page"></div> <div class="clear"></div> <div id="page_overlay" style="display: none;" class="overlay"></div> <a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a>  <script> var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmscon_user/bidcmsact_bind";
app.page["title"] = "注册BidCms帐号";
app.page["binding"] = [];
app.page["user_info"] = [];
app.page["following"] = false;
app.page["user"] = {"username":""};
app.page["referer"] = "index.php";
app._csr = true;
var view = app.view = $("page").hide();
app.render("signup/signup_step2", view, function(code, html){view.show();}); </script> 
<script type="text/javascript" src="static/bidcms/js/views_dialog.js?1354679133.js"></script>
</body></html>