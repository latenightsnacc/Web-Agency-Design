var position = $(window).scrollTop(); 
$(".logo-mobile").hide();
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
        $('.logo-web').attr('src', "assets/Logo/ceeiconblack.png")
    } else {
        $('.navbar').removeClass('bg-light');
        $('.logo-web').attr('src', "assets/Logo/ceeiconblack.png") 
    }    
    // position = scroll;
});

// else if(scroll === position) {
//     console.log('scrollUp');
//     $(".logo-mobile").hide();
//     $('.logo-web').show();
    
// }    