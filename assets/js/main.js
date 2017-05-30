var Banner = {

    carousel: function () {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:25,
            nav:false,
            stagePadding: 20,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });
    }
};

var Header = {

    fixed: function () {
        $(window).scroll(function () {
            var top = 35;
            var menu = $('.header').innerHeight();

            if ($(window).width() >= 768) {

                if ($(window).scrollTop() >= top){

                    $('.header').addClass('fixed');
                } else {

                    $(".header").removeClass('fixed');
                }
            } 
        });
    }
}


var Screen = {
	width: $(window).width()
};

var App = {
	init: function () {
		$('a[href="#"]').click(function (e) {
				e.preventDefault();
	    });

        Banner.carousel();
        Header.fixed();
    }
};

$(document).ready(function(){
	App.init();
});

$(window).on('load', function() {});

window.addEventListener('popstate', function (e) {});