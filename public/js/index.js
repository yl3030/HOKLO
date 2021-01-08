// header
$(window).on("resize scroll", function () {
	if ($(window).scrollTop() > 60) {
        $("header").children(".top-header").slideUp(100);
        $(".bottom-header").css("height","60px");
		$(".bottom-header").children("ul").css("width", "75%");
		$(".bottom-header").children(".home").css("width", "10%");
		$(".bottom-header").children(".home").children(".logo").css("width", "100%").css("height","auto").css("margin-right","0").css("display","block");
		$(".bottom-header")
			.children(".bh-icon")
			.css("width", "15%")
			.css("display", "block")
	} else {
        $("header").children(".top-header").slideDown(100);
        $(".bottom-header").css("height","50px");
		$(".bottom-header").children("ul").css("width", "100%");
		$(".bottom-header").children(".home").css("width", "0");
		$(".bottom-header").children(".logo").css("width", "0").css("display","none");
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

// brand
$(".feature").children(".select").children(".select-brand").click(function(){
	$(this).parents(".feature").children(".select").children(".select-brand").removeClass("active");
	$(this).addClass("active");
	$(this).parents(".feature").children(".brand-product").hide();
	if($(this).hasClass("sb1")){
		$(this).parents(".feature").children(".brand-product1").css("display","flex");
	}else if($(this).hasClass("sb2")){
		$(this).parents(".feature").children(".brand-product2").css("display","flex");
	}else if($(this).hasClass("sb3")){
		$(this).parents(".feature").children(".brand-product3").css("display","flex");
	}else if($(this).hasClass("sb4")){
		$(this).parents(".feature").children(".brand-product4").css("display","flex");
	}else if($(this).hasClass("sb5")){
		$(this).parents(".feature").children(".brand-product5").css("display","flex");
	}
})
$(".new").children(".select").children(".select-brand").click(function(){
	$(this).parents(".new").children(".select").children(".select-brand").removeClass("active");
	$(this).addClass("active");
	$(this).parents(".new").children(".brand-product").hide();
	if($(this).hasClass("sb1")){
		$(this).parents(".new").children(".brand-product1").css("display","flex");
	}else if($(this).hasClass("sb2")){
		$(this).parents(".new").children(".brand-product2").css("display","flex");
	}else if($(this).hasClass("sb3")){
		$(this).parents(".new").children(".brand-product3").css("display","flex");
	}else if($(this).hasClass("sb4")){
		$(this).parents(".new").children(".brand-product4").css("display","flex");
	}else if($(this).hasClass("sb5")){
		$(this).parents(".new").children(".brand-product5").css("display","flex");
	}
})

// classify
$("#class-box").children(".modal-dialog").children(".modal-content").children(".modal-body").children("ul").children("li").click(function(){
	console.log("點！");
	$("#class-box").children(".modal-dialog").children(".modal-content").children(".modal-body").children("ul").children("li").removeClass("active");
	$(this).addClass("active");
	var select = $(this).text();
	$(".active-class").children("p").empty();
	$(".active-class").children("p").append(select);
})