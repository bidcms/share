<?php include("header.php");?>
</head>

<body> <div id="page"></div> <div class="clear"></div> <div id="page_overlay" style="display: none;" class="overlay"></div> <a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a>  

<script> 
var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmsact_board/bidcmsid_<?php echo $id;?>";
app.page["board"] = {};
app._csr = true;
var view = app.view = $("page").hide();

app.route(); </script>  
<script src="static/bidcms/js/views_dialog.js" type="text/javascript"></script> 
</body></html>
