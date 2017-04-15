var Screen = {
	width: $(window).width()
};

var App = {
	init: function () {
		$('a[href="#"]').click(function (e) {
				e.preventDefault();
	    });
	}
};

$(document).ready(function(){
	App.init();
});

$(window).on('load', function() {});

window.addEventListener('popstate', function (e) {});