/*
  Template Name: Sanbi
  Version: 1.0
  Author: bimal-themes
  Author URI:  https://themeforest.net/user/bimal-themes
  Description: App Landing Template (HTML)

 */

(function($){
  "use strict";

  function stickyHeader() {
    var header = $(".site-header");
    var mobileHeader = $(".site-mobile-header");
  
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      header.addClass("sticky-header");
      mobileHeader.addClass("sticky-header");
    } else {
      header.removeClass("sticky-header");
      mobileHeader.removeClass("sticky-header");
    }
  }
  
  function preloader() {
    var preloader = $(".preloader");
    preloader.delay(1000).fadeOut("slow");
  }
  
  function mobileMenu() {
    var menuIcon = $(".mobile-nav-toggle");
  
    menuIcon.on("click", function () {
      $(".mobile-navigation-wrap").addClass("show");
    });
  
    $(document).on("click", ".hide-mobile-nav, .mobile-nav ul li a", function () {
      $(".mobile-navigation-wrap").removeClass("show");
  
      $("html, body").animate();
    });
  }
  
  function carouselSlider() {
    $(".testimonie-thumb-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".testimonie-text-slider",
    });
    $(".testimonie-text-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".testimonie-thumb-slider",
      arrows: false,
      dots: true,
      focusOnSelect: true,
      adaptiveHeight: true,
    });
  }


  function backToTop(){
    var backToTop = $('.back-to-top');

    backToTop.on('click',function() {
			$("html, body").animate({
				scrollTop: 0
			}); 
		})
  }

  function showHideBackToTop(){
    var scroll = $(window).scrollTop();
    var backToTop = $('.back-to-top');

    if (scroll > 800) {
      backToTop.fadeIn(1000); 
    } else {
      backToTop.fadeOut(1000);
    }
  }
  
  $(document).ready(function () {
    // Preloader
    preloader();
  
    // Sticky Header
    stickyHeader();
  
    // Mobile Menu
    mobileMenu();
  
    // Testimonial slider
    carouselSlider();

    //Back To Top
    backToTop()
  });
  
  $(window).scroll(function () {
    // Sticky Header
    stickyHeader();

    // Show Hide Back To Top
    showHideBackToTop();
  }); 
})(jQuery) 
 
