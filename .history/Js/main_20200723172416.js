var position = $(window).scrollTop(); 
$(".logo-mobile").hide();
// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if( scroll > position ){
        
        $(".logo-web").fadeOut('slow');
        $(".logo-mobile").fadeIn('slow');
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