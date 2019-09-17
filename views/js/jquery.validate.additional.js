/**
 * jQuery Validation Plugin 1.8.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 J枚rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {
	// 镓嬫満
	$.validator.addMethod("phone",function(value,element){
		 var length = value.length;   
		 var mobile = /^(((13[0-9]{1})|(18[0-9]{1})|(15[0-9]{1}))+\d{8})$/;   
		 return this.optional(element) || (length == 11 && mobile.test(value)); 
	});
	
	// 搴ф満
	$.validator.addMethod("tel",function(value,element){
		  var tel = /^[+]{0,1}(\d){1,3}[ ]?([-||杞琞?((\d)|[ ]){1,12})+$/; 
  		  return this.optional(element) || (tel.test(value)); 
	});
	
	// 鑱旗郴鐢佃瘽(镓嬫満/搴ф満镄嗗彲)楠岃瘉 
	$.validator.addMethod("telphone",function(value,element){
		  var length = value.length; 
		  var mobile = /^(((13[0-9]{1})|(18[0-9]{1})|(15[0-9]{1}))+\d{8})$/;   
		  var tel = /^[+]{0,1}(\d){1,3}[ ]?([-||杞琞?((\d)|[ ]){1,12})+$/;  
		  return this.optional(element) || (tel.test(value) || mobile.test(value)); 
	});
	
	//涓嶈兘链夌┖镙?	$.validator.addMethod("notspace",function(value,element){
		var nickName = /\w*\s+\w*/g;
		return !nickName.test(value);
	});
	
	$.validator.addMethod("isGuluyu",function(value,element){
		var guluyu =  /.*鍜昜-_]*[鍣滃殨][-_]*[楸奸瓪].*/;
		return !guluyu.test(value);
	});
	
	$.validator.addMethod("validChar",function(value,element){
		var reg = /^([\u4e00-\u9fa5]|[-_]|[a-zA-Z0-9]){2,15}$/;
		return  reg.test(value);
	});
	
	
})(jQuery);
