var position = $(window).scrollTop(); 
$(".logo-mobile").hide();
// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
    if( $('.navbar').scrollTop()){
        $(".logo-mobile").hide();
        $('.logo-web').show();
    } else if(scroll > position) {
        console.log('scrollDown');
        $(".logo-web").hide();
        $(".logo-mobile").show(); 
    }      
    position = scroll;
});
