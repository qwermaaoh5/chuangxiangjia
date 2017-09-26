$(".chuang").fadeOut(0);
$(".chuang").fadeIn(3700,function(){
	// console.log(1);
	$(".Slide1 .liuxing .blueXing").fadeIn();
	$(".Slide1 .liuxing .pinkXing").fadeIn();
	$(".Slide1 .liuxing .blueXing").animate({
		top:"8.3rem",
	},1000);
	$(".Slide1 .liuxing .pinkXing").animate({
		left:"0",
	},1000);
})

time2 = setInterval(function(){
	$(".arrow").animate({
	top: "11.74rem"
},function(){
	$(".arrow").css({
		top:"12.2rem"
	})
})
},800)





