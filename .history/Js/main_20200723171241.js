var position = $(window).scrollTop(); 
$(".logo-mobile").hide();
// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if(scroll > position) {
        console.log('scrollDown');
        $(".logo-web").hide();
        $(".logo-mobile").show(); 
    } 
    if(scroll == position) {
         console.log('scrollUp');
         $(".logo-mobile").hide();
         $('.logo-web').show();
         
    }         
    position = scroll;
});
