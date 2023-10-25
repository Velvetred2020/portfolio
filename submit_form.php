<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'saucaelenacluj@gmail.com';
    $subject = 'New Form Submission';
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo 'success'; // or any response you want
}
?>
