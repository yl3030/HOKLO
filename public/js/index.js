// header
$(window).on("resize scroll", function () {
	if ($(window).scrollTop() > 60) {
        $("header").children(".top-header").slideUp(100);
        $(".bottom-header").css("height","60px");
		$(".bottom-header").children("ul").css("width", "80%");
		$(".bottom-header")
			.children(".bh-icon")
			.css("width", "20%")
			.css("display", "block")
	} else {
        $("header").children(".top-header").slideDown(100);
        $(".bottom-header").css("height","50px");
		$(".bottom-header").children("ul").css("width", "100%");
		$(".bottom-header")
			.children(".bh-icon")
			.css("width", "0")
			.css("display", "none");
	}
});

// search
$(".search-icon").click(function () {
	if ($(this).hasClass("active")) {
		$("#search-box").slideUp(300);
		$(this).parents("header").css("box-shadow", "0 2px 4px rgba(0,0,0,0.2)");
		$(".search-icon").removeClass("active");
	} else {
		$("#search-box").slideDown(300);
		$(this).parents("header").css("box-shadow", "none");
		$(this).addClass("active");
	}
});
$(document).click(function (event) {
	var d_con = $("#search-box");
	var s_con = $(".search-icon");
	if (!d_con.is(event.target) && d_con.has(event.target).length === 0) {
		if (!s_con.is(event.target) && s_con.has(event.target).length === 0) {
			$("#search-box").slideUp(300);
			$("header").css("box-shadow", "0 2px 4px rgba(0,0,0,0.2)");
			$(".search-icon").removeClass("active");
		}
	}
});

// menu
$(".menu").click(function(){
    $(".menu-box").css("right","0");
})
$(".menu-header").children(".back-box").click(function(){
    $(".menu-box").css("right","-100%");
})
