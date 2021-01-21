// header
$(window).on("resize scroll", function () {
	if ($(window).scrollTop() > 60) {
        $(".l-header").children(".top-header").slideUp(100);
        $(".l-header").children(".container").children(".bottom-header").css("height","60px");
		$(".l-header").children(".container").children(".bottom-header").children("ul").css("width", "80%");
		$(".l-header").children(".container").children(".bottom-header").children(".home").css("width", "10%");
		$(".l-header").children(".container").children(".bottom-header").children(".home").children(".logo").css("width", "100%").css("height","auto").css("margin-right","0").css("display","block");
		$(".l-header").children(".container").children(".bottom-header")
			.children(".bh-icon")
			.css("width", "15%")
			.css("display", "block")
	} else {
        $(".l-header").children(".top-header").slideDown(100);
        $(".l-header").children(".container").children(".bottom-header").css("height","50px");
		$(".l-header").children(".container").children(".bottom-header").children("ul").css("width", "100%");
		$(".l-header").children(".container").children(".bottom-header").children(".home").css("width", "0");
		$(".l-header").children(".container").children(".bottom-header").children(".logo").css("width", "0").css("display","none");
		$(".l-header").children(".container").children(".bottom-header")
			.children(".bh-icon")
			.css("width", "0")
			.css("display", "none");
	}
	var cH = $(".carousel-item").width()*0.4 + $(".classify").height() + 20;
	if ($(window).scrollTop() > cH) {
		console.log(">cH");
        $(".home-header").children(".top-header").slideUp(100);
        $(".home-header").children(".container").children(".bottom-header").css("display","none");
		$(".home-header").children(".container").children(".class-header").css("display","block");
	} else {
		console.log("<cH");
        $(".home-header").children(".top-header").slideDown(100);
        $(".home-header").children(".container").children(".bottom-header").css("display","flex");
		$(".home-header").children(".container").children(".class-header").css("display","none");
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

// class-menu
$(".nav-menu").click(function(){
	$(this).children(".class-menu").slideToggle(200);
})
$(document).click(function (event) {
	var s_con = $(".nav-menu");
	if (!s_con.is(event.target) && s_con.has(event.target).length === 0) {
		$(".class-menu").slideUp(200);
	}
});

// buy num
$(".fa-minus").click(function(){
	var buyNum = $(this).parents(".p-num").children("input").val();
	var clickNum;
	if (buyNum == 0 || buyNum < 0) {
		clickNum = 0;
	} else if (buyNum == "") {
		clickNum = 0;
	} else {
		clickNum = parseInt(buyNum) - 1;
	}
	$(this).parents(".p-num").children("input").val(clickNum);
})
$(".fa-plus").click(function(){
	var buyNum = $(this).parents(".p-num").children("input").val();
	var clickNum;
	if (buyNum < 0) {
		clickNum = 0;
	} else if (buyNum == "") {
		clickNum = 0;
	} else {
		clickNum = parseInt(buyNum) + 1;
	}
	$(this).parents(".p-num").children("input").val(clickNum);
})

// addtocart
$(".addtocart").click(function(){
	var buyNum = $(this).parents(".product-intr").children(".p-num").children("input").val();
	if(buyNum>0) {
		$(".success").fadeIn(300);
	}else {
		$(".fail").fadeIn(300);
	}
	$(".add-alert").delay(1000).fadeOut(300);
})