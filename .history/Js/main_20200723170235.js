var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".logo-mobile").hide();
    if(scroll > position) {
        console.log('scrollDown');
        $(".logo-web").hide();
        $(".logo-mobile").show(); 
    } else if (scroll === position){
         console.log('scrollUp');
         $('.logo-web').show();
         $(".logo-mobile").hide();
             
    position = scroll;
});
