$(function(){
	$.getJSON('js/discover.json',function(str){
		var data=str.data;
		for(var i=0;i<data.length;i++){
			var time=new Date(parseInt(str.data[i].article_publish_time)*1000);
			var aTime=time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
			var $ali='<li><h3>'+data[i].article_title+'</h3><h4><span class="name">'+data[i].article_origin+'</span><span class="time">'+aTime+'</span></h4><div class="img"><img src="'+data[i].article_imgsrc+'" alt="" /></div><div class="read">阅读全文<img src="img/readAll.png" alt="" /></div></li>'
			$('.content ul').append($ali);
		}
	})
})
	