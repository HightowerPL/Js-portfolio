<?PHP
require 'PHPMailerAutoload.php';
require_once('class.phpmailer.php');    // dodanie klasy phpmailer
require_once('class.smtp.php');    // dodanie klasy smtp
$name = $_POST['formName'];
$email = $_POST['formMail'];
$message = $_POST['formMessage'];
$mail = new PHPMailer();    //utworzenie nowej klasy phpmailer
$mail->From = "info@js-portfolio.pl";    //Pełny adres e-mail
$mail->FromName = "JS-Web - Formularz kontaktowy";    //imię i nazwisko lub nazwa użyta do wysyłania wiadomości
$mail->Host = "s06.emailserver.pl";    //adres serwera SMTP wysyłającego e-mail
$mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
$mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
$mail->Username = "info@js-portfolio.pl";    //nazwa użytkownika do skrzynki e-mail
$mail->Password = "Jmms10711!";    //hasło użytkownika do skrzynki e-mail
$mail->Port = 587; //port serwera SMTP
$mail->isHTML(true);
$mail->Subject = "Nowa wiadomosc z formularza";    //Temat wiadomości, można stosować zmienne i znaczniki HTML
$mail->Body = "Od: $name<br>e-mail: $email <br><br> Tresc: <br><br> $message";    //Treść wiadomości, można stosować zmienne i znaczniki HTML
$mail->SMTPAutoTLS = false;   //wyłączenie TLS
$mail->SMTPSecure = '';    //
$mail->AddAddress ("jakubsnopkiewicz@gmail.com","Jakub Snopkiewicz");    //adres skrzynki e-mail oraz nazwa
                                                    //adresata, do którego trafi wiadomość
if($mail->Send())    //sprawdzenie wysłania, jeśli wiadomość została pomyślnie wysłana
    {
        echo 'E-mail został wysłany'; //wyświetl ten komunikat
        }
    else    //w przeciwnym wypadku
        {
        echo 'E-mail nie mógł zostać wysłany';    //wyświetl następujący
        }
?>
