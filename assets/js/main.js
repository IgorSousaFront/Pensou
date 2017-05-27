var Banner = {

    carousel: function () {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    }
};


var Screen = {
	width: $(window).width()
};

var App = {
	init: function () {
		$('a[href="#"]').click(function (e) {
				e.preventDefault();
	    });

        Banner.carousel();
	}
};

$(document).ready(function(){
	App.init();
});

$(window).on('load', function() {});

window.addEventListener('popstate', function (e) {});