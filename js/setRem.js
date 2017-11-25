(function (doc,win){
	var docEl = doc.documentElement;
	resetScale = function (){
		var deviceWidth = docEl.clientWidth;
		if( deviceWidth>=640 ){
			docEl.style.fontSize = '100px';
		}else{
			docEl.style.fontSize = 100 * (deviceWidth/640) + "px";
		}
	};
	if( !doc.addEventListener ){
		return ;
	};
	win.addEventListener('resize',resetScale,false);
	doc.addEventListener('DOMContentLoaded',resetScale,false);
})(document,window)