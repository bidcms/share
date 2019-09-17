<?php include("header.php");?>
</head>
<body> <div id="page"></div> <div class="clear"></div> <div id="page_overlay" style="display: none;" class="overlay"></div> <a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a> 
<script> 
var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmsact_boards/bidcmstype_all";
app.page["filter"] = "board:popular:all";
app.page["boards"] = <?php echo bidcms_encode($boards);?>;
app._csr = true;
var view = app.view = $("page").hide();
app.route(); 
</script>

 
<script type="text/javascript" src="static/bidcms/js/views_dialog.js?1354679133.js"></script>
</body></html>