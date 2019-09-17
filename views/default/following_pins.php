<?php include("header.php");?>
</head>
 <body> <div id="page"></div> <div class="clear"></div> <div id="page_overlay" style="display: none;" class="overlay"></div> <a id="elevator" href="#" onclick="return false;" class="Indicator off btn wbtn"><strong>回到<br/>顶部</strong><span></span></a>  
<script>
var app = app || {};
app.page = app.page || {};
app.page["bidcmsurl"] = "bidcmsact_following";
app.page["filter"] = "pin:following:all";
app.page["suggestion_friends"] = [{"user_id":129229, "username":"横戈", "urlname":"hengge", "created_at":1331631673, "avatar":{"id":1055539, "farm":"farm1", "bucket":"hbimg", "key":"523cfb18fb98545fe573cc111ef85489d5af7c8d3465-WXmdBO", "type":"image/jpeg", "width":180, "height":180, "frames":1}, "service_name":"weibo", "user_info":{"id":"1642082161", "username":"横戈", "realname":"横戈", "urlname":"hengge", "avatar":{"id":1055539, "farm":"farm1", "bucket":"hbimg", "key":"523cfb18fb98545fe573cc111ef85489d5af7c8d3465-WXmdBO", "type":"image/jpeg", "width":180, "height":180, "frames":1}, "profile":{"location":"上海 卢湾区", "about":"无他，做喜欢的而已", "url":"http://hengge.blogbus.com"}}}, {"user_id":276361, "username":"murong", "urlname":"b276361", "created_at":1336034322, "avatar":{"id":2184874, "farm":"farm1", "bucket":"hbimg", "key":"e6121b5cf838b7ec820adf87b5a9d8733fb4e42d5c94-8tmp87", "type":"image/jpeg", "width":180, "height":180, "frames":1}, "service_name":"weibo", "user_info":{"id":"1686531655", "username":"穆荣", "realname":"穆荣", "urlname":"rongmu", "avatar":{"id":2184874, "farm":"farm1", "bucket":"hbimg", "key":"e6121b5cf838b7ec820adf87b5a9d8733fb4e42d5c94-8tmp87", "type":"image/jpeg", "width":180, "height":180, "frames":1}, "profile":{"location":"江苏 苏州", "about":"移动位置服务实践者，驴博士、开开～ :)", "url":"http://blog.sina.com.cn/saltytalk"}}}, {"user_id":1, "username":"BidCms", "urlname":"huaban", "created_at":"1317181333", "avatar":{"id":202132, "farm":"farm1", "bucket":"hbimg", "key":"2aa85f7f37370b506e31bf1d704f4381a987e94d2df4-x16TtI", "width":192, "height":192}, "service_name":"weibo", "user_info":{"id":2493118952, "username":"BidCms网", "email":null, "avatar":{"id":6805544, "farm":"farm1", "bucket":"hbimg", "key":"2d416bd30305c40a361ed122cc7ba51489cbc5ce76b-UUsyFZ", "type":"image/jpeg", "width":50, "height":50, "frames":1}}}];
app.page["pins"] = <?php echo bidcms_encode($pins);?>;
app._csr = true;
var view = app.view = $("page").hide();

app.route(); </script>
<script type="text/javascript" src="static/bidcms/js/views_dialog.js?1354679133.js"></script>
</body></html>