<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

error_reporting(0);
ini_set('display_errors', 'off');


$url = 'http://BlackStudio/index.php';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$res = curl_exec($curl);



$dom = new DomDocument('1.0', 'utf-8');
//@ $dom->loadHTML($res);

//$xpath = new DomXPath($dom);



/*
if ($_POST['nameC'] == null || $_POST['email'] == null || $_POST['phone'] == null) {
    $element = $dom->createElement('div','Письмо не отправленно. Введены не все данные');
    $element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
    $dom->appendChild($element);
    echo $dom->saveHTML();
    exit();
}*/

if ($_REQUEST['nameC'] == null || $_REQUEST['email'] == null || $_REQUEST['phone'] == null) {
    $element = $dom->createElement('div','Письмо не отправленно. Введены не все данные');
    $element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
    $dom->appendChild($element);
    echo $dom->saveHTML();
    exit();
}

$mail = new PHPMailer;

    $mail->setFrom('from@example.com', $_REQUEST['nameC']);
    $mail->addAddress('kro-star@yandex.ru', 'Алёне Моториной');

    $message='Имя: '.$_REQUEST['nameC'].'<br>';    
    if($_REQUEST['vacansies'] !=null){
        $message.="Заявка на вакансию " . $_REQUEST['vacansies'] ."<br>"; 
    }
    $message.="E-mail: ".$_REQUEST['email']."<br>";
    $message.="Номер телефона: ".$_REQUEST['phone']."<br>";
    if($_REQUEST['vacansies'] == null){
        if($_REQUEST['message'] != null){
            $message.="Сообщение: ".$_REQUEST['message']."<br>";
        }
        $mail->Subject = 'Заявка';
    }else{
        $mail->Subject = 'Заявка на вакансию' . $_REQUEST['vacansies'];
    }
    $mail->msgHTML($message);
        
    if($_REQUEST['userFile'] != null){
        $mail->addAttachment($_REQUEST['userFile']['name']);
        //$mail->addAttachment($filename2);
    }
    $result=$mail->send();
if($result){    
    $element = $dom->createElement('div','Письмо успешно отправленно');
    $element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
} else {
    $k = 'Письмо не отправленно, попробуйте позднее' . $mail->ErrorInfo; 
    $element = $dom->createElement('div',$k);
    $element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
}

$dom->appendChild($element);
echo $dom->saveHTML();

?>