// DOMContentLoaded;
/*
	DOM文档加载的步骤:
	1. 解析html结构,
	2. 加载外部脚本文件
	3. 解析并执行脚本代码
	4. DOM树结构加载完成  //DOMContentLoaded
	5. 加载图片等外部文件,
	6. 页面加载完成     //onload
*/
(function (doc,win){
	var resetPage = function (){
		var deviceWidth = document.documentElement.clientWidth;
		var scale = deviceWidth/640;
		if( deviceWidth>=640 ){
			document.body.style.zoom = 1;
		}else{
			document.body.style.zoom = scale;
		}
	};
	if( !doc.addEventListener ){
		return ;
	}
	win.addEventListener('resize',resetPage,false);
	doc.addEventListener("DOMContentLoaded",resetPage,false);

})(document,window);