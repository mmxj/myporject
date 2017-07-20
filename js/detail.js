$(function(){
//	$.getJSON('js/detail.json',function(data){
//		console.log(data);
//	})
	var xhr=new XMLHttpRequest();
	
	var url='js/detail.json';
	xhr.open('get',url,true);
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data=JSON.parse(xhr.responseText);
				for(var i=0;i<data.length;i++){
					var $ali='<li class="clearfix"><div class="index"><p><span>'+data[i].index+'</span></p></div><h2>'+data[i].tit+'</h2><p>'+data[i].content+'</p><div class="img"><img src="'+data[i].img+'" alt="" /></div><div class="pri"><span class="price">'+data[i].pri+'</span><a href="###">查看详情</a></div></li>'
					$('.content ul').append($ali);
				}
				
			}
		}
	}
})
