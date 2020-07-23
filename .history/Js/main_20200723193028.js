var position = $(window).scrollTop(); 
$(".logo-mobile").hide();
$('.logo-web').attr('src', "assets/Logo/ceelesslogoblack2.png").width('170px');
// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    // if( scroll > position ){
    //     $('.navbar').addClass('bg-light');
    //     $(".logo-web").fadeOut('slow');
    //     $(".logo-mobile").fadeIn('slow');
    // } else {
    //     $('.navbar').removeClass('bg-light');
    //     $(".logo-web").show();
    //     $(".logo-mobile").hide(); 
    // }    
    
    if( scroll > position ){
        $('.navbar').addClass('bg-light');
        $('.logo-web').attr('src', "assets/Logo/ceeiconblack.png").height('25px').width('auto').addClass('uk-animation-fade');
    } else {
        $('.navbar').removeClass('bg-light');
        $('.logo-web').attr('src', "assets/Logo/ceelesslogoblack2.png").width('170px').height('auto').addClass('uk-animation-fade');; 
    }    
    // position = scroll;
});
  