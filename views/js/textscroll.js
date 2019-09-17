function AutoScroll(obj){
$(obj).find("ul:first").animate({
marginTop:"-18px"
},500,function(){
$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
});
}

