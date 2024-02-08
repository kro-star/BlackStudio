<?php
include 'templates/header.php';
?>
<form action="mail.php">
            <!-- <form enctype="multipart/form-data" active="BlackStudio/mail.php" metod="POST" id="myForm">-->
             <input type="text" name="vacansies" value=""  class="input-vacansies"/>
                        <input type="text" name="nameC" value="" placeholder="Имя" class="b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100"/>
                        <input type="tel" name="phone" value="" placeholder="Телефон" class="b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100"/>
<input type="email" name="email" value="" placeholder="Почта" class="b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100"/>
<button type="submit" class="button buttonForm fs16 xs-fs18 fw700 pt15 pb15 pr30 pl30 mr10  c-firstF0 br10 bg-blue b0" >
                                Отправить заявку<span class="vacansies"> на вакансию</span>
                            </button> 
</form>
</body>