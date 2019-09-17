(function(rt){var templates=rt.templates,attrs=function(){return rt.attrs.apply(rt,arguments)},_=function(){return rt._.apply(rt,arguments)},img=function(){return rt.img.apply(rt,arguments)},imgURL=function(){return rt.imgURL.apply(rt,arguments)},imgSize=function(){return rt.imgSize.apply(rt,arguments)},avatar=function(){return rt.avatar.apply(rt,arguments)},url=function(){return rt.url.apply(rt,arguments)},mkurl=function(){return rt.mkurl.apply(rt,arguments)},escape=function(){return rt.escape.apply(rt,arguments)},
__t=rt.templates,emerge=function(){return rt.renderSync.apply(rt,arguments)};
__t["account/settings_subscription"]=function(locals){var buf=[];with(locals||{}){var interp,sub_info=page.sub_info;buf.push("<div"),buf.push(attrs({"class":"hwfx"})),buf.push(">");var __val__=emerge("bidcms/header");buf.push(null==__val__?"":__val__),buf.push("</div><div"),buf.push(attrs({"class":"wfx"})),buf.push("><form"),buf.push(attrs({id:"subscription_settings",action:"/settings/subscription/",method:"post","class":"Form StaticForm"})),buf.push("><h3>修改订阅设置</h3><ul><li><label"),buf.push(attrs({style:"margin-bottom: 8px"})),buf.push(">订阅状态</label><div"),buf.push(attrs({style:"width: 700px","class":"Right NoInput"})),buf.push("><label"),buf.push(attrs({style:"padding-top: 0"})),buf.push(">"),sub_info.weekly==1?(buf.push("<input"),buf.push(attrs({type:"checkbox",name:"weekly",checked:!0,style:"margin-right: 10px"})),buf.push("/>")):(buf.push("<input"),buf.push(attrs({type:"checkbox",name:"weekly",style:"margin-right: 10px"})),buf.push("/>")),buf.push("订阅花瓣周刊</label><div"),buf.push(attrs({style:"font-size: 14px"})),buf.push(">注：有可能在你修改订阅状态时，当期周刊的邮件发送队列已经生成，直到下一期周刊发送的时候，你的更改才能生效</div></div></li></ul><div"),buf.push(attrs({"class":"Submit"})),buf.push("><a"),buf.push(attrs({id:"submit_btn",href:"#",onclick:"return false;","class":"btn btn24 rbtn"})),buf.push('><strong> 提交</strong><span></span></a></div></form><script>(function(a){new Button("submit_btn",{click:function(){return a("subscription_settings").submit(),!1}})})(document.id)</script></div>')}return buf.join("")},
__t["account/settings"]=function(locals){var buf=[];with(locals||{}){var interp,flash=page.flash,user=page.user;buf.push("<div"),buf.push(attrs({"class":"hwfx"})),buf.push(">");var __val__=emerge("bidcms/header");buf.push(null==__val__?"":__val__),buf.push("</div><div"),buf.push(attrs({id:"page","class":"wfx profile"})),buf.push("><form"),buf.push(attrs({id:"profile_edit",action:"index.php",method:"post",name:"profile_edit","class":"Form StaticForm"})),buf.push("><input type='hidden' name='commit' value='1'/>"),buf.push("<input type='hidden' name='con' value='user'/>"),buf.push("<input type='hidden' name='act' value='profile'/>"),buf.push("<h3>帐号设置</h3>");if(flash.info){buf.push("<div"),buf.push(attrs({"class":"success"})),buf.push(">");for(var $index=0,$$l=flash.info.length;$index<$$l;$index++){var msg=flash.info[$index];buf.push("<p>"+escape((interp=msg)==null?"":interp)+"</p>")}buf.push("</div>")}if(flash.error){buf.push("<div"),buf.push(attrs({"class":"error"})),buf.push(">");for(var $index=0,$$l=flash.error.length;$index<$$l;$index++){var msg=flash.error[$index];buf.push("<p>"+escape((interp=msg)==null?"":interp)+"</p>")}buf.push("</div>")}buf.push("<ul><li><label"),buf.push(attrs({"for":"id_email"})),buf.push(">邮箱地址</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_email",type:"text",name:"user[email]",value:user.email,maxlength:"75"})),buf.push("/><a"),buf.push(attrs({href:"/settings/subscription/",style:"margin-left: 12px;","class":"btn btn18 wbtn"})),buf.push("><strong> 订阅设置</strong><span></span></a></div></li>"),user.status.sts?(buf.push("<li><label"),buf.push(attrs({"for":"id_new_password"})),buf.push(">密码</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_new_password",type:"password",name:"password[new]"})),buf.push("/><span"),buf.push(attrs({"class":"help_text"})),buf.push(">密码必须为6-32个字符</span></div></li><li><label"),buf.push(attrs({"for":"id_confirm_password"})),buf.push(">确认密码</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_confirm_password",type:"password",name:"password[confirm]"})),buf.push("/><span"),buf.push(attrs({"class":"help_text"})),buf.push(">再输一次新密码</span></div></li>")):(buf.push("<li"),buf.push(attrs({id:"email_field",style:"display:"+(user.email?";":"none;")})),buf.push("><label>密码</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><a"),buf.push(attrs({href:"index.php?con=user&act=password","class":"btn btn18 wbtn"})),buf.push("><strong> 修改密码</strong><span></span></a></div></li>")),buf.push("<li><label"),buf.push(attrs({"for":"id_username"})),buf.push(">昵称</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_username",type:"text",name:"user[username]",value:user.username})),buf.push("/></div></li><li"),buf.push(attrs({"class":"urlname"})),buf.push("><label"),buf.push(attrs({"for":"id_urlname"})),buf.push(">个性网址</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_urlname",type:"text",name:"user[urlname]",value:user.urlname})),buf.push("/><span"),buf.push(attrs({"class":"help_text urlname_available"})),buf.push(">http://huaban.com/个性网址</span></div></li><li><input"),buf.push(attrs({id:"avatar_holder",type:"hidden",name:"user[avatar]"})),buf.push("/><label"),buf.push(attrs({"for":"id_avatar"})),buf.push(">头像</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><div"),buf.push(attrs({"class":"current_avatar_wrapper fl"})),buf.push("><img"),buf.push(attrs({src:"static/bidcms/img/load2.gif",style:"display:none;","class":"load"})),buf.push("/><img"),buf.push(attrs({id:"current_avatar",src:avatar(user,"fw192"),"class":"fl"})),buf.push("/></div><div"),buf.push(attrs({style:"padding-left: 12px;position:relative;","class":"NoInput fl"})),buf.push("><p><a"),buf.push(attrs({id:"avatar_upload_button",href:"#",onclick:"return false;","class":"upload_avatar btn btn18 wbtn"})),buf.push("><strong> 上传头像</strong><span></span></a></p>"),user.bindings.weibo&&(buf.push("<p><a"),buf.push(attrs({data:"weibo",href:"#",onclick:"return false;","class":"refresh_avatar btn btn18 wbtn"})),buf.push("><strong> 从微博同步头像</strong><span></span></a></p>")),user.bindings.douban&&(buf.push("<p><a"),buf.push(attrs({data:"douban",href:"#",onclick:"return false;","class":"refresh_avatar btn btn18 wbtn"})),buf.push("><strong> 从豆瓣同步头像</strong><span></span></a></p>")),user.bindings.renren&&(buf.push("<p><a"),buf.push(attrs({data:"renren",href:"#",onclick:"return false;","class":"refresh_avatar btn btn18 wbtn"})),buf.push("><strong> 从人人网同步头像</strong><span></span></a></p>")),user.bindings.qzone&&(buf.push("<p><a"),buf.push(attrs({data:"qzone",href:"#",onclick:"return false;","class":"refresh_avatar btn btn18 wbtn"})),buf.push("><strong> 从QQ空间同步头像</strong><span></span></a></p>")),user.bindings.tqq&&(buf.push("<p><a"),buf.push(attrs({data:"tqq",href:"#",onclick:"return false;","class":"refresh_avatar btn btn18 wbtn"})),buf.push("><strong> 从腾讯微博同步头像</strong><span></span></a></p>")),buf.push('<!--if user.bindings.taobao--><!--  p: abtn.refresh_avatar(size="18", data="taobao") 从淘宝同步头像--></div></div></li><li'),buf.push(attrs({"class":"NoInput"})),buf.push("><label>新浪微博</label><div"),buf.push(attrs({"class":"Right NoInput"})),buf.push("><p>");if(user.bindings.weibo){var urlname=user.bindings.weibo.user_info.urlname||user.bindings.weibo.user_info.id;buf.push("<a"),buf.push(attrs({href:"http://weibo.com/"+urlname,target:"_blank"})),buf.push("><span>weibo.com/"+escape((interp=user.bindings.weibo.user_info.username)==null?"":interp)+"</span></a><a"),buf.push(attrs({id:"weibo_connect",href:"/oauth/weibo/binding/",style:"margin-left: 12px;","class":"connect btn wbtn"})),buf.push("><strong> 重新绑定新浪微博</strong><span></span></a><input"),buf.push(attrs({type:"hidden",name:"weibo_connected",value:"1"})),buf.push("/><label"),buf.push(attrs({"for":"hide_weibo"})),buf.push("><input"),buf.push(attrs({id:"hide_weibo",type:"checkbox",name:"status[hide_weibo]",value:"1",checked:user.status.hide_weibo})),buf.push("/>不在主页显示我的新浪微博</label>")}else buf.push("<a"),buf.push(attrs({id:"weibo_connect",href:"/oauth/weibo/binding/","class":"connect btn btn18 wbtn"})),buf.push("><strong> 绑定新浪微博</strong><span></span></a>");buf.push("</p></div></li><li"),buf.push(attrs({"class":"NoInput"})),buf.push("><label>豆瓣</label><div"),buf.push(attrs({"class":"Right NoInput"})),buf.push("><p>"),user.bindings.douban?(buf.push("<a"),buf.push(attrs({href:"http://www.douban.com/people/"+user.bindings.douban.user_info.urlname,target:"_blank"})),buf.push("><span>douban.com/"+escape((interp=user.bindings.douban.user_info.urlname)==null?"":interp)+"</span></a><a"),buf.push(attrs({id:"douban_connect",href:"/oauth/douban/binding/",style:"margin-left: 12px;","class":"connect btn btn18 wbtn"})),buf.push("><strong> 重新绑定豆瓣</strong><span></span></a><input"),buf.push(attrs({type:"hidden",name:"douban_connected",value:"1"})),buf.push("/><label"),buf.push(attrs({"for":"hide_douban"})),buf.push("><input"),buf.push(attrs({id:"hide_douban",type:"checkbox",name:"status[hide_douban]",checked:user.status.hide_douban})),buf.push("/>不在主页显示我的豆瓣</label>")):(buf.push("<a"),buf.push(attrs({id:"douban_connect",href:"/oauth/douban/binding/","class":"connect btn btn18 wbtn"})),buf.push("><strong> 绑定豆瓣</strong><span></span></a>")),buf.push("</p></div></li><li"),buf.push(attrs({"class":"NoInput"})),buf.push("><label>人人网</label><div"),buf.push(attrs({"class":"Right NoInput"})),buf.push("><p>"),user.bindings.renren?(buf.push("<a"),buf.push(attrs({href:"http://www.renren.com/profile.do?id="+user.bindings.renren.user_info.id,target:"_blank"})),buf.push("><span>www.renren.com</span></a><a"),buf.push(attrs({id:"renren_connect",href:"/oauth/renren/binding/",style:"margin-left: 12px;","class":"connect btn btn18 wbtn"})),buf.push("><strong> 重新绑定人人网</strong><span></span></a><input"),buf.push(attrs({type:"hidden",name:"renren_connected",value:"1"})),buf.push("/><label"),buf.push(attrs({"for":"hide_renren"})),buf.push("><input"),buf.push(attrs({id:"hide_renren",type:"checkbox",name:"status[hide_renren]",checked:user.status.hide_renren})),buf.push("/>不在主页显示我的人人网帐号</label>")):(buf.push("<a"),buf.push(attrs({id:"renren_connect",href:"/oauth/renren/binding/","class":"connect btn btn18 wbtn"})),buf.push("><strong> 绑定人人网</strong><span></span></a>")),buf.push("</p></div></li><li"),buf.push(attrs({"class":"NoInput"})),buf.push("><label>QQ空间</label><div"),buf.push(attrs({"class":"Right NoInput"})),buf.push("><p>"),user.bindings.qzone?(buf.push("<a"),buf.push(attrs({href:"http://qzone.qq.com/",target:"_blank"})),buf.push("><span>qzone.qq.com</span></a><a"),buf.push(attrs({id:"qzone_connect",href:"/oauth/qzone/binding/",style:"margin-left: 12px;","class":"connect btn btn18 wbtn"})),buf.push("><strong> 重新绑定QQ空间</strong><span></span></a><input"),buf.push(attrs({type:"hidden",name:"qzone_connected",value:"1"})),buf.push('/><!--label(for="hide_qzone")<input'),buf.push(attrs({id:"hide_qzone",type:"checkbox",name:"status[hide_qzone]",checked:user.status.hide_qzone})),buf.push("/>不在主页显示我的QQ空间-->")):(buf.push("<a"),buf.push(attrs({id:"qzone_connect",href:"/oauth/qzone/binding/","class":"connect btn btn18 wbtn"})),buf.push("><strong> 绑定QQ空间</strong><span></span></a>")),buf.push("</p></div></li><li"),buf.push(attrs({"class":"NoInput"})),buf.push("><label>腾讯微博</label><div"),buf.push(attrs({"class":"Right NoInput"})),buf.push("><p>"),user.bindings.tqq?(buf.push("<a"),buf.push(attrs({href:"http://t.qq.com/"+user.bindings.tqq.user_info.urlname,target:"_blank"})),buf.push("><span>t.qq.com/"+escape((interp=user.bindings.tqq.user_info.urlname)==null?"":interp)+"</span></a><a"),buf.push(attrs({id:"tqq_connect",href:"/oauth/tqq/binding/",style:"margin-left: 12px;","class":"connect btn btn18 wbtn"})),buf.push("><strong> 重新绑定腾讯微博</strong><span></span></a><input"),buf.push(attrs({type:"hidden",name:"tqq_connected",value:"1"})),buf.push("/><label"),buf.push(attrs({"for":"hide_tqq"})),buf.push("><input"),buf.push(attrs({id:"hide_tqq",type:"checkbox",name:"status[hide_tqq]",checked:user.status.hide_tqq})),buf.push("/>不在主页显示我的腾讯微博</label>")):(buf.push("<a"),buf.push(attrs({id:"tqq_connect",href:"/oauth/tqq/binding/","class":"connect btn btn18 wbtn"})),buf.push("><strong> 绑定腾讯微博</strong><span></span></a>")),buf.push('</p></div></li><!--li.NoInput--><!--  label 淘宝--><!--  .Right.NoInput--><!--    p--><!--      if user.bindings.taobao--><!--        abtn#taobao_connect.connect(size="18", href="/oauth/taobao/binding/") 重新绑定淘宝--><!--      else--><!--        abtn#taobao_connect.connect(size="18", href="/oauth/taobao/binding/") 绑定淘宝--><li><label'),buf.push(attrs({"for":"id_about"})),buf.push(">关于自己</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><textarea"),buf.push(attrs({id:"id_about",name:"profile[about]",rows:"3",cols:"54"})),buf.push(">"+escape((interp=user.profile.about)==null?"":interp)+"</textarea></div></li><li><label"),buf.push(attrs({"for":"id_location"})),buf.push(">所在城市</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_location",type:"text",name:"profile[location]",value:user.profile.location})),buf.push("/></div></li><li><label"),buf.push(attrs({"for":"id_url"})),buf.push(">个人主页</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_url",type:"text",name:"profile[url]",value:user.profile.url})),buf.push("/></div></li></ul><div"),buf.push(attrs({"class":"Submit"})),buf.push("><a"),buf.push(attrs({id:"submit_btn",href:"#",onclick:"return false;","class":"btn btn24 rbtn"})),buf.push('><strong> 保存设置</strong><span></span></a></div></form><script>(function(a){function f(a){a?(d.hide(),b.set("src",a).setStyle("opacity",1)):(d.show(),b.setStyle("opacity",.3))}function g(a){var b=window.open(a,"binding_win","status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=680,height=500,left=50,top=40");window.focus&&b.focus()}var b=a("current_avatar"),c=a("avatar_upload_button"),d=a(document.body).getElements("img.load"),e=new Uploadr(c);e.addEvents({start:function(){f()},complete:function(b){var c=app.imgURL(b,"fw192");new Asset.image(c,{onload:function(){f(c)}}),a("avatar_holder").set("value",b.id)}}),$$("a.refresh_avatar").addEvent("click",function(b){var c=b.target;c.get("tag")!=="a"&&(c=c.getParent("a"));var e=new Button(c,{disabledTitle:"正在加载..."});e.disable(),f(),(new Request.JSON({url:"/refresh_avatar/?from="+c.get("data"),noCache:!0,onSuccess:function(b){if(b.err)return e.enable(),d.hide(),alert(b.msg||app.COMMON_ERRMSG);b.file||(d.hide(),alert("同步失败"));var c=app.imgURL(b.file,"fw192");new Asset.image(c,{onload:function(){e.enable(),f(c)}}),a("avatar_holder").set("value",b.file.id)}})).get()}),$$(".connect").addEvent("click",function(a){var b=a.target.hasClass("connect")?a.target:a.target.getParent(".connect");a.stop(),g(b.get("href"))}),new Button("submit_btn",{click:function(){return a("profile_edit").submit(),!1}})})(document.id)</script></div>')}return buf.join("")},
__t["account/settings_password"]=function(locals){var buf=[];with(locals||{}){var interp,flash=page.flash;buf.push("<div"),buf.push(attrs({"class":"hwfx"})),buf.push(">");var __val__=emerge("bidcms/header");buf.push(null==__val__?"":__val__),buf.push("</div><div"),buf.push(attrs({"class":"wfx profile"})),buf.push("><form"),buf.push(attrs({id:"profile_edit",action:"index.php",method:"post",name:"profile_edit","class":"Form StaticForm"})),buf.push("><input type='hidden' name='commit' value='1'/>"),buf.push("<input type='hidden' name='con' value='user'/>"),buf.push("<input type='hidden' name='act' value='password'/>"),buf.push("<h3>修改密码</h3>");if(flash.error){buf.push("<div"),buf.push(attrs({"class":"error"})),buf.push(">");for(var $index=0,$$l=flash.error.length;$index<$$l;$index++){var msg=flash.error[$index];buf.push("<p>"+escape((interp=msg)==null?"":interp)+"</p>")}buf.push("</div>")}buf.push("<ul><li><label"),buf.push(attrs({"for":"id_old_password"})),buf.push(">当前密码</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_old_password",type:"password",name:"password[old]"})),buf.push("/><span"),buf.push(attrs({"class":"help_text"})),buf.push(">安全起见，请先输入当前密码。<br/>如果没有设置过密码，不用输入。</span></div></li><li><label"),buf.push(attrs({"for":"id_new_password"})),buf.push(">新密码</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_new_password",type:"password",name:"password[new]"})),buf.push("/><span"),buf.push(attrs({"class":"help_text"})),buf.push(">密码必须为6-32个字符</span></div></li><li><label"),buf.push(attrs({"for":"id_confirm_password"})),buf.push(">确认新密码</label><div"),buf.push(attrs({"class":"Right"})),buf.push("><input"),buf.push(attrs({id:"id_confirm_password",type:"password",name:"password[confirm]"})),buf.push("/><span"),buf.push(attrs({"class":"help_text"})),buf.push(">再输一次新密码</span></div></li></ul><div"),buf.push(attrs({"class":"Submit"})),buf.push("><a"),buf.push(attrs({id:"submit_btn",href:"#",onclick:"return false;","class":"btn btn24 rbtn"})),buf.push('><strong> 保存密码</strong><span></span></a></div></form><script>(function(a){new Button("submit_btn",{click:function(){return a("profile_edit").submit(),!1}})})(document.id)</script></div>')}return buf.join("")},
__t["account/password_reset"]=function(locals){var buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({id:"login"})),buf.push("><a"),buf.push(attrs({href:"/"})),buf.push("><h1"),buf.push(attrs({id:"login_logo"})),buf.push("></h1></a><div"),buf.push(attrs({"class":"login_bar"})),buf.push("></div><form"),buf.push(attrs({id:"auth_form",action:"/auth/",method:"post","class":"Form FancyForm AuthForm"})),buf.push("><input"),buf.push(attrs({id:"token",type:"hidden",value:page.token.token,name:"token"})),buf.push("/><ul><li><div"),buf.push(attrs({"class":"input"})),buf.push("><input"),buf.push(attrs({id:"id_password1",name:"password1",type:"password"})),buf.push("/><label>新密码</label><span"),buf.push(attrs({"class":"fff"})),buf.push("></span><div"),buf.push(attrs({id:"password1_msgr","class":"msgr left-arrow"})),buf.push("><span"),buf.push(attrs({"class":"txt"})),buf.push("></span><span"),buf.push(attrs({"class":"arrow"})),buf.push(">◣</span><span"),buf.push(attrs({"class":"arrow-mask"})),buf.push("></span></div></div></li><li><div"),buf.push(attrs({"class":"input"})),buf.push("><input"),buf.push(attrs({id:"id_password2",name:"password2",type:"password"})),buf.push("/><label>确认密码</label><span"),buf.push(attrs({"class":"fff"})),buf.push("></span><div"),buf.push(attrs({id:"password2_msgr","class":"msgr left-arrow"})),buf.push("><span"),buf.push(attrs({"class":"txt"})),buf.push("></span><span"),buf.push(attrs({"class":"arrow"})),buf.push(">◣</span><span"),buf.push(attrs({"class":"arrow-mask"})),buf.push("></span></div></div></li></ul><div"),buf.push(attrs({"class":"non_inputs"})),buf.push("><a"),buf.push(attrs({id:"reset_btn",href:"#",onclick:"return false;","class":"btn btn18 wbtn"})),buf.push("><strong> 重置</strong><span></span></a></div></form><div"),buf.push(attrs({id:"reset_msg",style:"display: none;","class":"success"})),buf.push("><p>已经成功重置了密码，<a"),buf.push(attrs({href:"/login/"})),buf.push('>马上登录</a></p></div></div><script>(function(a){function e(b,c){var d=a(b+"_msgr");return d.getFirst("span").set("html",c),d.getParent().addClass("showmsgr"),d.show(),!1}function f(b){var c=a(b+"_msgr");c&&c.hide()}function g(){var f=b.get("value"),g=c.get("value");if(f.trim()=="")return e("password1","请输入新密码");if(g.trim()=="")return e("password2","请输入确认密码");if(f!=g)return e("password2","两次密码输入不一致");var h=a("token").get("value");return d.disable(),(new Request.JSON({url:"/password/reset/",data:{password1:f,password2:g,token:h},onSuccess:function(b){if(b.err){d.enable();if(b.msgs)for(var c in b.msgs)e(c,b.msgs[c].join("; "));else e("password1",b.msg);return}a("auth_form").hide(),a("reset_msg").show()}})).post(),!1}var b,c,d;window.addEvent("domready",function(){b=a("id_password1"),c=a("id_password2"),new FancyInput(b),new FancyInput(c),d=new Button("reset_btn",{click:g,disabledTitle:"重置..."}),$$("input").addEvent("blur",function(a){f(a.target.get("name"))})})})(document.id)</script>')}return buf.join("")}})(app);