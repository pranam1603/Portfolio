$(document).ready(function(){
$('#slides').superslides({
    animation: "fade",
    // play: 5000,
    pagination: false
});

var typed = new Typed(".typed",{
strings: ["Web Developer." , "Computer Engineering." , "Student."],
typeSpeed: 70,
loop: true ,
startDelay: 1000,
showCursor: false
});

$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});

var skillsTopOffset = $(".skillsSection").offset().top;

	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
            });
        }    

    });
    
    // $("[data-fancybox]").fancybox();
    
    // var iso = new Isotope( ".items", {
	// 	filter: '*',
	// 	animationOptions: {
	// 		duration: 1500,
	// 		easing: 'linear',
	// 		queue: false
	// 	}
    // });

    // $("#filters a").click(function() {

	// 	$("#filters .current").removeClass("current");
	// 	$(this).addClass("current");


    //     var elem = document.querySelector('.items');
    //      var iso = new Isotope( elem, {
	// 	// var selector = $(this).attr("data-filter");

    //     // var $grid = new Isotope('.items', {	
    //     	filter: selector,
	// 		animationOptions: {
	// 			duration: 1500,
	// 			easing: 'linear',
	// 			queue: false
	// 		}
	// 	});

	// 	return false;
	// });


    
	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});