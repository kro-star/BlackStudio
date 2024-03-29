<div class="container">
    <div class="row fd-reserse sm-fd-row">
        <div class="col-12 col-sm-8 pt100  mb80">
            <div class="pt60 fw700 fs36 xs-fs48 sm-fs64 sm-lh95 lh54 c-firstF0 lh136" id="client">
            Решили работать с нами? Заполните анкету для общего удобства
            </div>
            <div class="fw500 lh39 fs20 sm-fs24 mt30 c-secondA3">
            Ваши ответы для нас являются наилучшей отправной точкой.
            </div>
        </div>
        <div class="col-sm-4  mt70 tac mb60">
            <img src="assets/img/checklist.png" alt="" class="">
        </div>
    </div>
    <form enctype="multipart/form-data" active="BlackStudio/mail.php" metod="POST" id="myForm">
        <div class="row fd-reserse sm-fd-row">
            <div class="col-12 col-sm-7">
                <textarea name="message" id="" class="w-100 h211 sm-h844 xs-h285 br10 b-blue p30 fs14 xs-fs18 lh136 fw500 c-firstF0 bg-black" placeholder="Ваше сообщение"></textarea>
            </div>
            <div class="col-12 col-sm-5">
                <div class="sm-pr50">
                    <div class="fw700 fs24 xs-fs40 sm-fs48 c-firstF0 lh40 xs-lh70 mb60">
                        Как составить грамотное сообщение?
                    </div>

                    <div class="fs16 lh136 xs-fs20 fw700 sm-fs17 c-grayED mb25 ">
                        Чем вы занимаетесь?
                    </div>
                    <div class="c-secondA3 fs14 xs-fs18 sm-fs17 fw500 lh32 mb25 sm-mb40">
                        Расскажите о своей компании. Как работаете, на чем зарабатываете?
                        Кто ваши конкуренты? Чем вы от них отличаетесь?
                    </div>
                    <div class="fs16 lh136 xs-fs20 fw700 sm-fs17 c-grayED mb25 ">
                        В чем ваша задача?
                    </div>
                    <div class="c-secondA3 fs14 xs-fs18 sm-fs17 fw500 lh32 mb25 sm-mb40">
                        Чего хотите достичь в ближайшем будущем?
                        Что вам мешает?
                    </div>
                    <div class="fs16 lh136 xs-fs20 fw700 sm-fs17 c-grayED mb25 ">
                        Каким вы видите решение задачи?
                    </div>
                    <div class="c-secondA3 fs14 xs-fs18 sm-fs17 fw500 lh32 mb25 sm-mb40">
                        Как планируете достичь своих целей?
                        Какие решения пробовали раньше?
                    </div>
                    <div class="fs16 lh136 xs-fs20 fw700 sm-fs17 c-grayED mb25 ">
                        Какие у вас ожидания от результата?
                    </div>
                    <div class="c-secondA3 fs14 xs-fs18 sm-fs17 fw500 lh32 mb25 sm-mb40">
                        В каком виде вы хотите видеть решение вашей задачи? В какой срок?
                        Почему он важен? На что это должно быть похоже?
                    </div>
                    <div class="fs16 lh136 xs-fs20 sm-fs17 fw700 c-grayED mb25">
                        Сколько денег планируете потратить?
                    </div>
                    <div class="c-secondA3 fs14 xs-fs18 sm-fs17 fw500 lh32 mb25 sm-mb40">
                        Каков ваш бюджет? Почему вы готовы потратить именно такую сумму?
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-12">
                <div class="mr10 mt40 pr df">
                    <label for="file-input" class=" br10 b-gray fs16 xs-fs18 sm-fs20 fw700 pt15 pb15 pr30 pl30  c-grayD9 bg-black button-size cp db">Прикрепить файл</label>
                    <input id="file-input" type="file" name="userFile" />
                
                </div>
                <!--<button class="br10 b-gray fs16 xs-fs18 sm-fs20 fw700 pt15 pb15 pr30 pl30 mr10 mt40 c-grayD9 bg-black button-size">
                    Прикрепить файл
                </button>-->
            </div>
            <div class="col-12 col-sm-8">
                
                <div class="fs16  xs-fs18 sm-fs20 fw700 c-firstF0  mr10 mt40 dn">
                    <div class="h-100 ">Прикреплённые файлы: </div>
                    <div class="ml20 fileList">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6">
                <div class="mt60 pt50 fw700 fs24 xs-fs40 sm-fs48 c-firstF0">
                    Заполните поля и отправляйте заявку в наши руки!
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">

            <?
            include 'templates/form.php';
            ?>

            </div>
        </div>
    </form>
</div>