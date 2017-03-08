$(function(){
	$(".vertical-list li").on("click", function(){
		$(this).addClass("active");
		var data = $(this).data("value");
	});
});
