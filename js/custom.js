$(document).ready(function () {

    "use strict";


    /* _____________________________________

     Preloader
     _____________________________________ */

    if ((".loader").length) {
      // show Preloader until the website ist loaded
      $(window).on('load', function () {
        $(".loader").fadeOut("slow");
      });
    }

    /* _____________________________________

     Smooth Scroll
     _____________________________________ */


    var topHeight = 0;

    if ($(".navbar-fixed-top").length) {
      topHeight = 80;
    }
    $('a.smooth-scroll').on('click', function (event) {
	  $("li.menu-item").each(function(){$(this).removeClass("menu-item-current");});
      var $anchor = $(this);
	  $anchor.parent().addClass("menu-item-current");
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - topHeight
      }, {
        duration: 100,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic"
        }
      });
      event.preventDefault();
    });

    /* _____________________________________

     Scroll Top
     _____________________________________ */

     $(window).scroll(function (){				
		var windscroll = $(window).scrollTop();
		console.log(windscroll);
		if ($(this).scrollTop() > 200){
			$('.btn-top').fadeIn();	
		}
		else {
			$('.btn-top').fadeOut();
		}
		if ($(this).scrollTop() > 700){
			$("li.menu-item").each(function(){$(this).removeClass("menu-item-current");});
			$("li.menu-item:nth-child(2)").addClass("menu-item-current");			
		}
		if ($(this).scrollTop() < 600){
			$("li.menu-item").each(function(){$(this).removeClass("menu-item-current");});
			$("li.menu-item:first").addClass("menu-item-current");
			
		}
     }).scroll();
	
    /* _____________________________________

     Scroll Animations
     _____________________________________ */


    if (Modernizr.csstransforms3d) {
      window.sr = ScrollReveal();

      sr.reveal('.reveal-left-10', {
        origin: 'left',
        distance: '10px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-right-10', {
        origin: 'right',
        distance: '10px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

     
      sr.reveal('.reveal-bottom-opacity', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 0,
        opacity: 0,
        scale: 0,
        easing: 'linear',
        mobile: false
      });
      ;
    }

    /* _____________________________________

     Navigation Transparent / White
     _____________________________________ */


    function changeColorLight() {

      if ($(window).scrollTop() > 60 || $(window).width() < 992) {
        navbar.addClass("navbar-light");
      } else {
        navbar.removeClass("navbar-light");
      }
    }


    // only change Color for fixed Navbar
    if ($('.navbar-fixed-top').length) {


      var navbar = $(".navbar");

      // change Colors for light Navbar Version
      if ($('.light-nav').length) {
        // Navigation color change
        $(window).on('scroll resize load', function () {
          changeColorLight();
        });
      }
    }


    /* _____________________________________

     Navbar Icon
     _____________________________________ */

    $('.collapse').on('show.bs.collapse', function () {
      $('.navbar-icon').addClass('open');
    });
    $('.collapse').on('hide.bs.collapse', function () {
      $('.navbar-icon').removeClass('open');
    });


    /* _____________________________________

     Bootstrap Fix: IE10 in Win 8 & Win Phone 8
     _____________________________________ */


    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    }

  }
);
