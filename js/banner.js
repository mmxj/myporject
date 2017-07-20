$(function(){
	banner('ul');
	});
function banner(obj){
	var startX=0;
	var saveStartX=0;
	var endX=0;
	var moveX=0;
	var touchendX=0;
	var Obj=$(obj);
	var num=0;
	Obj.on('touchstart',startMove);
	function startMove(ev){
		var ev=ev||window.event;
		startX=ev.originalEvent.changedTouches[0].pageX;
		saveStartX=endX;
	}
	Obj.on('touchmove',move);
	function move(ev){
		var ev = ev || window.event;
		moveX=ev.originalEvent.changedTouches[0].pageX;
		endX=moveX-startX+saveStartX;
		objLeft();
	}
	function objLeft(){
		if(endX>0){
			endX=0;
		}else if(endX<-Obj.outerWidth()+Obj.children('li').outerWidth()){
			endX=-Obj.outerWidth()+Obj.children('li').outerWidth();
		}
		Obj.css('left',endX);
	}
	Obj.on('touchend',end);
	function end(ev){
		var ev = ev || window.event;
		touchendX=ev.originalEvent.changedTouches[0].pageX-startX;
		var Now=Math.round(-touchendX/$(window).width());
		num+=Now;
		if(num<0){
			num=0
		}
		if(num>Obj.find('li').size()-1){
			num=Obj.find('li').size()-1;
		}
		endX=-num*$(window).width();
		Obj.animate({'left':endX});
	}
}
