<?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \nMessage: $message \nPhone: $phone";
$recipient = "raisingarrowsfindlay@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: index.html");
echo '<script>alert("Thank you! We will be in contact shortly!")</script>';
?>