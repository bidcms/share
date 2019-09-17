
var Class = {
  create: function() {
	return function() {
	  this.initialize.apply(this, arguments);
	}
  }
}

Object.extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
	return destination;
}

var TransformView = Class.create();
TransformView.prototype = {
  //瀹瑰櫒瀵硅薄,婊戝姩瀵硅薄,鍒囨崲鍙傛暟,鍒囨崲鏁伴噺
  initialize: function(container, slider, parameter, count, options) {
	if(parameter <= 0 || count <= 0) return;
	var oContainer = document.getElementById(container), oSlider = document.getElementById(slider), oThis = this;

	this.Index = 0;//褰揿墠绱㈠紩
	
	this._timer = null;//瀹氭椂鍣?
	this._slider = oSlider;//婊戝姩瀵硅薄
	this._parameter = parameter;//鍒囨崲鍙傛暟
	this._count = count || 0;//鍒囨崲鏁伴噺
	this._target = 0;//鐩爣鍙傛暟
	
	this.SetOptions(options);
	
	this.Up = !!this.options.Up;
	this.Step = Math.abs(this.options.Step);
	this.Time = Math.abs(this.options.Time);
	this.Auto = !!this.options.Auto;
	this.Pause = Math.abs(this.options.Pause);
	this.onStart = this.options.onStart;
	this.onFinish = this.options.onFinish;
	
	oContainer.style.overflow = "hidden";
	oContainer.style.position = "relative";
	
	oSlider.style.position = "absolute";
	oSlider.style.top = oSlider.style.left = 0;
  },
  //璁剧疆榛樿灞炴€?
  SetOptions: function(options) {
	this.options = {//榛樿链?
		Up:			true,//鏄惁鍚戜笂(鍚﹀垯鍚戝乏)
		Step:		5,//婊戝姩鍙桦寲鐜?
		Time:		10,//婊戝姩寤舵椂
		Auto:		true,//鏄惁镊姩杞崲
		Pause:		2000,//锅滈】镞堕棿(Auto涓篓rue镞舵湁鏁?
		onStart:	function(){},//寮€濮嬭浆鎹㈡椂镓ц
		onFinish:	function(){}//瀹屾垚杞崲镞舵墽琛?
	};
	Object.extend(this.options, options || {});
  },
  //寮€濮嫔垏鎹㈣缃?
  Start: function() {
	if(this.Index < 0){
		this.Index = this._count - 1;
	} else if (this.Index >= this._count){ this.Index = 0; }
	
	this._target = -1 * this._parameter * this.Index;
	this.onStart();
	this.Move();
  },
  //绉诲姩
  Move: function() {
	clearTimeout(this._timer);
	var oThis = this, style = this.Up ? "top" : "left", iNow = parseInt(this._slider.style[style]) || 0, iStep = this.GetStep(this._target, iNow);
	
	if (iStep != 0) {
		this._slider.style[style] = (iNow + iStep) + "px";
		this._timer = setTimeout(function(){ oThis.Move(); }, this.Time);
	} else {
		this._slider.style[style] = this._target + "px";
		this.onFinish();
		if (this.Auto) { this._timer = setTimeout(function(){ oThis.Index++; oThis.Start(); }, this.Pause); }
	}
  },
  //銮峰彇姝ラ昵
  GetStep: function(iTarget, iNow) {
	var iStep = (iTarget - iNow) / this.Step;
	if (iStep == 0) return 0;
	if (Math.abs(iStep) < 1) return (iStep > 0 ? 1 : -1);
	return iStep;
  },
  //锅沧
  Stop: function(iTarget, iNow) {
	clearTimeout(this._timer);
	this._slider.style[this.Up ? "top" : "left"] = this._target + "px";
  }
};
function Each(list, fun){
			for (var i = 0, len = list.length; i < len; i++) { fun(list[i], i); }
};