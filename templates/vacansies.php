<div class="container">
    <div class="row">
        <div class="col-12 pt50 xs-pt80 sm-pt64">
            <div class="fw700 fs24 xs-fs40 sm-fs48 c-firstF0 pb25" id="vacansies" data-id="client">
                Вакансии в Black CSS Studio
            </div>
        </div>
        <div class="col-12 col-sm-5">
            
            <div class="c-secondA3 fw500 fs16 xs-fs24 lh136">
                Настал тот самый момент, когда нам нужно еще больше свежих мозгов для самых смелых проектов
            </div>

        </div>
    </div>

    <div class="row">
        <div class="col-12 col-sm-9 pt50 pb50">
            
            <?php
            
            include 'templates/vacansies-select.php';
            
            ?>
            
            <div class="frontdev vacansies-item-text" >
                <?
                    include 'templates/frontend.php';
                ?>
            </div>
            <div class="backdev dn vacansies-item-text" >
                
                <?
                    include "templates/backend.php";
                ?>

            </div>
            <div class="designer dn vacansies-item-text" >
                <?
                    include 'templates/designer.php';
                ?>
            </div>
            hkjkjhk
             <form enctype="multipart/form-data" active="BlackStudio/mail.php#myForm" metod="POST" id="myForm">
                jgfjhg
             <input type="text" name="vacansies" value=""  class="input-vacansies"/>
            <?php
                include 'templates/form.php';
            ?>
            </form>
            
            <?php
            
            include 'templates/vacansies-select.php';
            
            ?>
            

        </div>
    </div>
</div>