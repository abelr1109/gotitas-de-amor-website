<?php
// Gotitas de Amor Daycare contact form handler
// IMPORTANT: Change this email to the real address that should receive form submissions.
$to = "your-email@example.com";
$subject = "Nuevo mensaje desde Gotitas de Amor Daycare";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: index.html");
  exit;
}

// Honeypot spam protection. Real visitors will not fill this hidden field.
if (!empty($_POST["website"])) {
  header("Location: index.html");
  exit;
}

function clean_input($value) {
  return htmlspecialchars(trim($value ?? ""), ENT_QUOTES, "UTF-8");
}

$parent_name = clean_input($_POST["parent_name"]);
$child_name = clean_input($_POST["child_name"]);
$child_age = clean_input($_POST["child_age"]);
$phone = clean_input($_POST["phone"]);
$email = clean_input($_POST["email"]);
$start_date = clean_input($_POST["start_date"]);
$transportation = clean_input($_POST["transportation"]);
$message = clean_input($_POST["message"]);

if (!$parent_name || !$phone) {
  echo "Por favor regrese y complete el nombre y teléfono.";
  exit;
}

$body = "Nuevo mensaje desde el website de Gotitas de Amor Daycare:\n\n";
$body .= "Nombre del padre/madre: $parent_name\n";
$body .= "Nombre del niño: $child_name\n";
$body .= "Edad del niño: $child_age\n";
$body .= "Teléfono: $phone\n";
$body .= "Correo electrónico: $email\n";
$body .= "Fecha deseada de inicio: $start_date\n";
$body .= "¿Necesita transporte?: $transportation\n\n";
$body .= "Mensaje:\n$message\n";

$headers = "From: Gotitas de Amor Website <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
if ($email) {
  $headers .= "Reply-To: $email\r\n";
}

$sent = mail($to, $subject, $body, $headers);
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mensaje Enviado | Gotitas de Amor Daycare</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main class="section-pad">
    <div class="container tour-card">
      <?php if ($sent): ?>
        <p class="eyebrow">Gracias</p>
        <h1>Mensaje enviado</h1>
        <p>Gracias por contactar a Gotitas de Amor Daycare. Le responderemos pronto.</p>
      <?php else: ?>
        <p class="eyebrow">Error</p>
        <h1>No se pudo enviar el mensaje</h1>
        <p>Por favor llame directamente al <a href="tel:15168046365">(516) 804-6365</a>.</p>
      <?php endif; ?>
      <a class="btn" href="index.html">Volver al inicio</a>
    </div>
  </main>
</body>
</html>
