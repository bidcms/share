(function(){window.addEvent("domready",function(){var a=new easyXDM.Rpc({local:"static/bidcms/js/xdm/name.html",swf:"static/bidcms/js/xdm/easyxdm.swf"},{local:{request:function(a,b,c){var d=a.method||"get";d.toLowerCase(),a.onSuccess=b,a.onError=c,a.onFailure=c,(new Request.JSON(a))[d]()}},serializer:{parse:JSON.decode,stringify:JSON.encode}})})})()