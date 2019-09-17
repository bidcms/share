<iframe src="" name="catemodify" style="display:none"></iframe>

<FORM METHOD="POST" ACTION="paishi.php" onsubmit="return checkform(this);" target="catemodify" >
<INPUT TYPE="hidden" NAME="con" value="<?php echo $GLOBALS["setting"]["adminpath"];?>">
<INPUT TYPE="hidden" NAME="act" value="invitemodify">
<INPUT TYPE="hidden" NAME="updateid" value="<?php echo $goods['goods_id'];?>">
<INPUT TYPE="hidden" NAME="commit" value="1">
<input type="hidden" value="<?php echo formhash();?>" name="formhash">
<table width="100%" border="0" align="center"  cellpadding="3" cellspacing="1" class="table_form">

<tr>
<td width="70px" class="left_title_1"><span class="left-title">约会地点</span></td>
<td><input type="text" name="address" id="address" value="<?php echo $goods['address'];?>" size="50"><br/><input type="text" name="gps" id="gps" value="<?php echo $goods['lng'];?>,<?php echo $goods['lat'];?>" size="50">
<div id="map_canvas" style="width:300px;height:200px;"></div>

<script type="text/javascript">

var markers=new Array();
var myLatLng = new sogou.maps.Point(12957062,4827187);
var myOptions = {zoom: 10,center: myLatLng};
var map = new sogou.maps.Map(document.getElementById("map_canvas"), myOptions);
var geo=new sogou.maps.Geocoder();
<?php if($goods['lat'] && $goods['lng']){?>
geo.geocode({location:{points:['{$goods[lat]}','{$goods[lng]}'],type:0}},callback);
<?php }?>
function callback(a){
	if(a.status=='ok')
	{
		var geometry=a.data[0];
		document.getElementById("gps").value = geometry.location;
		document.getElementById("address").value = geometry.province+geometry.city+geometry.address;
		var marker = new sogou.maps.Marker({map:map,position:geometry.location});
		map.setCenter(marker.getPosition());
	}
}

sogou.maps.event.addListener(map,"click",function(mouseEvent){
	   var point = mouseEvent.point;
	   map.clearAll();//清除标记
	   geo.geocode({location:{points:[point],type:0}},callback);
});
</script>
</td>
</tr>
<tr>
<td width="70px" class="left_title_1"><span class="left-title">约会时间</span></td>
<td><INPUT TYPE="text" class="input-text" NAME="usertime" id="usertime"  value="<?php echo date('Y-m-d H:i:s',$goods['usertime']);?>"  onclick="HS_setDate(document.getElementById('usertime'))"></td>
</tr>

<tr>
<td width="70px" class="left_title_1"><span class="left-title">备注</span></td>
<td><textarea class="input-text" NAME="notice" style="height:100px;width:300px;"><?php echo $goods['notice'];?></textarea></td>
</tr>
<td colspan="2" align="center"><INPUT TYPE="submit" value="确认接受" class="button"></td>
</tr>
</table>
</FORM>