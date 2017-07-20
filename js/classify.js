$(function(){
	$.getJSON('./js/classify.json',setJSON);
	function setJSON(data){
		for(var i=0;i<data.length;i++){
			var $ali='<li><img src="'+data[i].img+'" alt="" /><p>'+data[i].name+'</p></li>'
			$('.content ul').append($ali);
		}
		
	}
})
