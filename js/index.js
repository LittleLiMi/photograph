	//记录当前正在显示的是第几第图片
	var curIndex=0;
	var intervalHandler=null;
	window.onload=function(){
		initAds();
	};
	function initAds(){
		//1.自动开始播放
		start();
		//2.适时停止和重新启动自动播放
		var oBox=document.getElementById('banner');
		oBox.onmouseover=stop;
		oBox.onmouseout=start;	
	}
	function start(){	//开始自动播放
		intervalHandler=setInterval(function(){
			changeImg(curIndex+1>3?0:curIndex+1);
		},2000);
	}
	function stop(){	//停止自动播放
		clearInterval(intervalHandler);
	}
	//切换图片,参数为要显示的图片
	function changeImg(index){
		var oBox=document.getElementById('banner');
		var aImg=oBox.getElementsByTagName('img');
		aImg[curIndex].className="unselect";
		aImg[index].className="select";
		curIndex=index;
	}
//图片特效
	

