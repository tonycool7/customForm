$(function(){
	$(".vertical-list li span").on("click", function(){
		$(".vertical-list li").removeClass("active");
		$(this).closest("li").addClass("active");
		var data = $(this).data("value");
	});

	$(".horizontal-list li span").on("click", function(){
		$(".horizontal-list li").removeClass("active");
		$(this).closest("li").addClass("active");
		var data = $(this).data("value");
	});
});
