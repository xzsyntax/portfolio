<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini güvenli hale getir
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags($_POST['message']));
    
    // E-posta doğrulama
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?status=invalid_email");
        exit();
    }
    
    // Boş alan kontrolü
    if (empty($name) || empty($email) || empty($message)) {
        header("Location: index.html?status=empty_fields");
        exit();
    }
    
    $to = "onesyntaxerror@gmail.com";
    $subject = "Yeni İletişim Formu Mesajı";
    
    // Mail içeriği
    $email_content = "İsim: $name\n";
    $email_content .= "E-posta: $email\n\n";
    $email_content .= "Mesaj:\n$message\n";
    
    // Headers güvenliği artırıldı
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    try {
        if(mail($to, $subject, $email_content, $headers)) {
            header("Location: index.html?status=success");
        } else {
            header("Location: index.html?status=error");
        }
    } catch (Exception $e) {
        error_log("Mail gönderme hatası: " . $e->getMessage());
        header("Location: index.html?status=error");
    }
    exit();
}
?> 