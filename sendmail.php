<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', '/phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('test@gmail.guru', 'пользователь');
    //Кому отправить
    $mail->addAddress('autodocs99@gmail.com');
    //Тема письма
    $mail->Subject = 'Заявка на звонок';
   
    if($_POST['formName'] == 'psm') {
        //Тело письма
        $body.='<h1><strong>Заявка на ПСМ</strong></h1>';
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['phone'].'</p>';
        $body.='<p><strong>Сообщение</strong> '.$_POST['message'].'</p>';
    } 
    if($_POST['formName'] == 'sbkts') {
        $body.='<h1><strong>Заявка на СБКТС</strong></h1>';
        $body.='<p><strong>Вид транспорта:</strong> '.$_POST['transport-type'].'</p>';
        $body.='<p><strong>Марка:</strong> '.$_POST['brand'].'</p>';
        $body.='<p><strong>Страна-производитель:</strong> '.$_POST['country'].'</p>';
        $body.='<p><strong>Год выпуска:</strong> '.$_POST['year'].'</p>';
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['phone'].'</p>';
    }
    if($_POST['formName'] == 'epts') {
        $body.='<h1><strong>Заявка на ЭПТС</strong></h1>';
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['phone'].'</p>';
        $body.='<p><strong>Сообщение</strong> '.$_POST['message'].'</p>';
    }
    if($_POST['formName'] == 'connect') {
        $body.='<h1><strong>Заявка на звонок</strong></h1>';
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['phone'].'</p>';
        $body.='<p><strong>Сообщение</strong> '.$_POST['message'].'</p>';
    }
    if($_POST['formName'] == 'docs') {
        $body.='<h1><strong>Заявка на документ</strong></h1>';
        $body.='<p><strong>Вид документа:</strong> '.$_POST['doc-type'].'</p>';
        $body.='<p><strong>Вид транспорта:</strong> '.$_POST['transport-type'].'</p>';
        $body.='<p><strong>Марка:</strong> '.$_POST['brand'].'</p>';
        $body.='<p><strong>Страна-производитель:</strong> '.$_POST['country'].'</p>';
        $body.='<p><strong>Год выпуска:</strong> '.$_POST['year'].'</p>';
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['phone'].'</p>';
    }


    $mail->Body = $body;

    //Отправляем
    if(!$mail->send()) {
        $message = "Ошибка";
    } else {
        $message = "Данные отправлены!";
    }
    
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);