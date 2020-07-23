var position = $(window).scrollTop(); 
$(".logo-mobile").hide();
// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if( scroll > position ){
        $(".logo-mobile").show();
        $(".logo-web").fadeOut('slow').hide();
    } else {
        console.log('scrollDown');
        $(".logo-web").show();
        $(".logo-mobile").hide(); 
    }      
    // position = scroll;
});

// else if(scroll === position) {
//     console.log('scrollUp');
//     $(".logo-mobile").hide();
//     $('.logo-web').show();
    
// }    