var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
        $(".logo-web").attr("src", "/assets/Logo/ceeiconblack.png"); 
    } else {
         console.log('scrollUp');
         $('.logo').text('Scrolling Up Scripts');
    }
    position = scroll;
});
