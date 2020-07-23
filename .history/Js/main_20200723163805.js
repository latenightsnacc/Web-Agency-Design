var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
        $("img").attr("src", "/assets/Logo/ceeicon"); 
    } else {
         console.log('scrollUp');
         $('.logo').text('Scrolling Up Scripts');
    }
    position = scroll;
});
