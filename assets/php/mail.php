<?php 
echo('1');
$to="kro-star@yandex.ru";// емайл получателя данных из формы

echo('2');
$tema="Заявка на вакансию";// тема полученного емайла
echo('3');
$message="Имя кандидата: "$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
echo('4');
$message.="E-mail: ".$_POST['email']."<br>";//полученное из формы name=email
echo('5');
$message.="Номер телефона: ".$_POST['phone']."<br>";//полученное из формы name=phone
echo('6');
$message.="Сообщение: ".$_POST['message']."<br>";//полученное из формы name=message
echo('7');
$headers='MIME-Version: 1.0'."\r\n";// заголовок соответствует формату плюс символ перевода строки
echo('8');
$headers.='Content-type: text/html; charset=utf-8'."\r\n";// указывает на тип посылаемого контента
echo('9');
mail($to,$tema,$message,$headers);//отправляет получателю на емайл значения переменных
echo('10');
?>