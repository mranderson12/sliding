


$(document).ready(function(){
           $('#container > a.arrow.left').click(function(e){
		   e.preventDefault;
		   var rotate =$('#container .images');
rotate.children('.imageholder').first().animate({marginLeft:"-=480px"},
function(){
           $(this).appendTo(rotate).removeAttr("style");
		   });
		 });
	$('#container > a.arrow.right').click(function(e){
		   e.preventDefault;
		   var rotate =$('#container .images');
rotate.children('.imageholder').last().prependTo(rotate).removeAttr("style").css("margin-left","-480px").animate({marginLeft:"0"});
});
});
	