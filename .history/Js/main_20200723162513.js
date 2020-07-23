/*$(function() { var logo = $(".lrg-logo"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
          if(!logo.hasClass("sml-logo")) {
            logo.hide();
            logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
          }
        } else {
          if(!logo.hasClass("lrg-logo")) {
            logo.hide();
            logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
          }
        }
    
    });
    });
    */


   $(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) { 
            $('.navbar .logo img').attr('src','/assets/cee');
        }
        if ($(this).scrollTop() < 1000) { 
            $('.navbar .navbar-brand img').attr('src','http://placehold.it/120?text=Original+Logo!');
        }
    })
});