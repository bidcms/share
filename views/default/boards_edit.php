<?php include("header.php");?>
</head>
<body> 
<div id="page"></div> <div class="clear"></div> 
<div id="page_overlay" style="display: none;" class="overlay"></div> 
<a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a>
  

<script> var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmsact_boards/bidcmsid_340432/bidcmstype_edit/";
app.page["board"] = <?php echo bidcms_encode($board);?>;
app._csr = true;
var view = app.view = $("page").hide();

app.render("edit/board_edit", view, function(code, html){view.show();}); </script>  
<script type="text/javascript" src="static/bidcms/js/views_dialog.js?1355734024.js"></script>
</body></html>