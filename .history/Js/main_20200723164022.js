var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
        $(".logo-web").hide(); 
    } else {
         console.log('scrollUp');
         $('.logo-web').show;
    }
    position = scroll;
});
