$('.form-response').hide();

$('#contact-submit').on('click', function(e){
  e.preventDefault();

  var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message = $('#message').val();

  $.ajax({
    method: "POST",
    url: "http://rise2016.eu/v2/contact-form.php",
    data: {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
  })
    .done(function(msg) {
      if (msg.sent) {
        $('.form-response').show();
        $('#subject').val('');
        $('#message').val('');
      };
    });
});
