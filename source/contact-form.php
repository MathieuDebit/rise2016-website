<?php
  if(isset($_POST['email'])){
    $to = "info@rise2016.eu";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];;
    $message = "Message de " . $name . " : \n\n" . $_POST['message'];
    $subject2 = "Copy of your form message for RISE 2016";
    $message2 = $name . ", here is a copy of your message for RISE 2016: \n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    echo "Mail Sent! Thank you " . $name . ", we will contact you shortly.";
  }
?>
