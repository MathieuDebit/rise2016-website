//= require jquery
//= require bootstrap
//= require wowjs

//= require_tree .

$('.number').counterUp();

// Logo animé
$(function(){
    var image = new Image();
    image.src = $('.logo img').attr('src');
    $('.logo img').mouseover(function(){
       $(this).attr('src',image.src);
    });

    setTimeout( function(){
       $('.logo').attr('src',image.src);
  }, 1100 );
});
