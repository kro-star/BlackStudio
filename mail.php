<?php 
$url = 'http://BlackStudio/index.php';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$res = curl_exec($curl);



$dom = new DomDocument('1.0', 'utf-8');
//@ $dom->loadHTML($res);

//$xpath = new DomXPath($dom);

/*
$selectVacansies = new DomXPath($dom);
$classname="select-vacansies";
$nodes = $selectVacansies->

echo $nodes;
*/

/*if (empty($_POST['nameC']) || empty($_POST['email']) || empty($_POST['phone']) ){
    $element = $dom->createElement('div','Письмо не отправленно. Введены не все данные');
    $element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
    $dom->appendChild($element);
    echo $dom->saveHTML();
    exit();
}*/
$to="kro-star@yandex.ru";
$tema="Заявка на вакансию";
$message='Имя кандидата: '.$_POST['nameC'].'<br>';
$message.="E-mail: ".$_POST['email']."<br>";
$message.="Номер телефона: ".$_POST['phone']."<br>";
if($_POST['message'] != ''){
    $message.="Сообщение: ".$_POST['message']."<br>";
}
$headers='MIME-Version: 1.0'."\r\n";
$headers.='Content-type: text/html; charset=utf-8'."\r\n";
$mail = mail($to,$tema,$message,$headers);
//$answer = $xpath->query("//div[contains(concat(' ', normalize-space(@class), ' '), ' $succesMail ')]");
if(!$mail){
    $element = $dom->createElement('div','Письмо не отправленно, попробуйте позднее');
    $element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
    //$errorMail="errorMail";
    //$answer[0] = $xpath->query("//div[contains(concat(' ', normalize-space(@class), ' '), ' $errorMail ')]");
}else{
    
$element = $dom->createElement('div','Письмо успешно отправленно');
$element->setAttribute('class', 'errorMail c-red fs16 sm-fs18 fw700 ml50');
    //$errorMail="succesMail";
    //$answer = $xpath->query("//div[contains(concat(' ', normalize-space(@class), ' '), ' $succesMail ')]");
    /***/ 
    
}
$dom->appendChild($element);
echo $dom->saveHTML();

?>