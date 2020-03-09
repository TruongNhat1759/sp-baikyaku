$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.smoothScroll();
      this.toTop();
      this.Gnavi();
    },

    smoothScroll: function () {
      $('a[href^="#"]').click(function () {
        $('.menu-icon').removeClass('active');
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 140
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - 100
            }, 600);
          }
        }
        return false;
      });
      $(window).load(function () {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "") {
          var top01 = $(hash1).offset().top;
          if ($(window).width() > 640) {
            $root.animate({
              scrollTop: top01 - 140
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 100
            }, 600);
          }
        }
      });

    },

    toTop: function () {
      $("#totop, .f-fixed").hide();
      $(window).scroll(function () {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
          if (vW < 641) {
            $('.f-fixed').fadeIn();
          } else {
            $('.f-fixed').fadeOut();
          }
        } else {
          $('#totop').fadeOut();
          $('.f-fixed').fadeOut();
        }
      });
    },

    Gnavi: function () {
      $('.over').mouseenter(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideDown();
        }
      });
      $('.over').mouseleave(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideUp();
        }
      });
      $('.menu-icon').click(function () {
        $(this).toggleClass('active');
        $('.over').removeClass('active');
        $('#gnavi').stop().toggleClass('show');
        $('.submenu').stop().slideUp();
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').stop().slideToggle();
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      });
      $('.over').click(function () {
        if ($(this).hasClass('flag')) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.submenu').stop().slideUp();
          } else {
            $('.over').removeClass('active');
            $('.submenu').stop().slideUp();
            $(this).addClass('active');
            $(this).find('.submenu').stop().slideDown();
          }
        }
      });
      $(window).bind("load resize scroll", function () {
        var vW = $(window).width();
        if (vW > 640) {
          $('.menu-icon').removeClass('active');
          $('#gnavi').removeClass('show');
          $('.over').removeClass('flag');
          $('.over').removeClass('active');
          $('.submenu').removeAttr('style');
        } else {
          $('.over').addClass('flag');
        }

      });

    },

  };

  obj.init();

});
