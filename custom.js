// JavaScript Document
$('#tes').owlCarousel({
    loop:true,
    margin:30,
	autoplay: true,
	autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1,
			dot:false,
			nav: true,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})