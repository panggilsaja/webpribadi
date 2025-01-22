<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspescialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    echo "<h2>Terima kasih, $name!</h2>";
    echo "<p>Email Anda: $email</p>";
    echo "<p>Pesan Anda: $message</p>";
}
?>