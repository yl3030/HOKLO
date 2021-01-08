var brandSwiper = new Swiper(".more-brand", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    navigation: {
		nextEl: ".Rnext", // 上一頁按鈕物件
		prevEl: ".Rprev", // 下一頁按鈕物件
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		500: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		700: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1024: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
    },
   
});
