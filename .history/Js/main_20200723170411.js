var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".logo-mobile").hide();
    if(scroll != position) {
        console.log('scrollDown');
        $(".logo-web").hide();
        $(".logo-mobile").show(); 
    } else {
         console.log('scrollUp');
         $(".logo-mobile").hide();
         $('.logo-web').show();
         
    }         
    position = scroll;
});
