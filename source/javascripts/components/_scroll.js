// Smooth Scroll
$(document).ready(function() {
  $(document).on("scroll", onScroll);

  //smoothscroll
  var scrollSpeed = 750;

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");
    $('a').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 20
    }, scrollSpeed, 'swing', function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  $('#nav .logo').on('click', function(){
    $('html,body').animate({
        scrollTop: 0
    }, scrollSpeed, 'swing');
  })
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#nav a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#nav a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
