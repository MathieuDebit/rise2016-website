//Sticky menu
var win = $(window),
  nav = $('nav'),
  pos = nav.offset().top,
  sticky = function() {
    win.scrollTop() > pos ?
      nav.addClass('navbar-fixed-top')
    : nav.removeClass('navbar-fixed-top')
  };

win.scroll(sticky);

$('#nav a').on('click', function(){
    $('#nav .btn-navbar').click();
    $('#nav .navbar-toggle').click();
});
