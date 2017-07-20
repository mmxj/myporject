$(function(){
//	提取json文件里的数据
	$.getJSON('js/index.json',showCom);
	function showCom(data){
		for(var i=0;i<data.length;i++){
			var $ali='<li><img src="'+data[i].img+'" alt="" /><div><h4>'+data[i].tittle+'</h4><p><span>￥</span>'+data[i].pirce+'</p></div></li>';
			$('.commodity ul').append($ali);
		}
	}
	$(window).on('scroll',function(){
		if($('body').scrollTop()>0){
			$('.search').css('position','fixed');
			$('.search').animate({'width':60/50+'rem'});
		}else if($('body').scrollTop()==0){
			$('.search').stop(true,true);
			$('.search').css('position','absolute');
			$('.search').animate({'width':690/50+'rem'});
		}
	})
});
