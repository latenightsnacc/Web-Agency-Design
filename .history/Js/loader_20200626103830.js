$(document).ready(function() {
    var counter = 0;
  
    // Start the changing images
    setInterval(function() {
      if(counter == 2) { 
        counter = 0; 
      }
  
      changeLetter(counter);
      counter++;
    }, 3000);
  
    // Set the percentage off
    loading();
  });
  
  function changeLetter(counter) {
    // var images = [
    //   '<i class="fa fa-fighter-jet"></i>',
    //   '<i class="fa fa-gamepad"></i>',
    //   '<i class="fa fa-headphones"></i>',
    //   '<i class="fa fa-cubes"></i>',
    //   '<i class="fa fa-paw"></i>',
    //   '<i class="fa fa-rocket"></i>',
    //   '<i class="fa fa-ticket"></i>',
    //   '<i class="fa fa-pie-chart"></i>',
    //   '<i class="fa fa-codepen"></i>'
    // ];
    var letters = [
        "<i class='fa fa-spinner fa-spin'></i>",
        "<i class='fa fa-eye'></i>",
        "<i class='fa fa-chevron-left'></i>"
    ]
  
    $(".loader .letters").html(""+ letters[counter] +"");
  }
  
  function loading(){
    var num = 0;
  
    for(i=0; i<=100; i++) {
      setTimeout(function() { 
        $('.loader span').html(num+'%');
  
        if(num == 100) {
          loading();
        }
        num++;
      },i*120);
    };
  
  }