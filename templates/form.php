



                <div class="row">

                    <div class="col-12 col-xl-4 pb25 xl-pt50 sm-pt70 pt15 df fd-column jc-end">                        

                        <label for="nameC" class="c-blue fs16 sm-fs24 fw700 mb20 lh136  dn">Имя</label>

                        <input type="text" name="nameC" value="" placeholder="Имя" class="b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100"/>
<div class="c-red fs14 fw500 errorEmail dn">Введите правильный имя </div>
                    </div>

                    <div class="col-12 col-xl-4 pb25 xl-pt50 sm-pt70 pt15 df fd-column jc-end">                        

                        <label for="phone" class="c-blue fs16 md-fs24 fw700 mb20 lh136 dn">Телефон</label>

                        <input type="tel" name="phone" value="" placeholder="Телефон" class="b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100"/>
<div class="c-red fs14 fw500 errorEmail  dn">Введите правильный телефон </div>
                    </div>

                    <div class="col-12 col-xl-4 pb25 xl-pt50 sm-pt70 pt15 df fd-column jc-end">                        

                        <label for="email" class="c-blue fs16 md-fs24 fw700 mb20 lh136  dn">Почта</label>

                        <input type="email" name="email" value="" placeholder="Почта" class="b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100"/>
                        <div class="c-red fs14 fw500 errorEmail dn">Введите правильный email </div>

                    </div>

                    <div class="col-12">
                        <div class="df  mt30 sm-mt50 ai-center">
                            <button type="submit" class="button buttonForm fs16 sm-fs18 fw700 pt15 pb15 pr30 pl30 mr10  c-firstF0 br10 bg-blue b0" disabled>
                                Отправить заявку<span class="vacansies"> на вакансию</span>
                            </button> 
                            <div class="fs16 sm-fs18 fw700 pt15 pb15 pr30 pl30 mr10  c-red dn errorDisButton">
                                Обязательные поля для ввода: имя, телефон и почта.
                            </div>
                            <?php 
                                            if (!empty($_GET)){

                                        include 'mail.php';
                                    
                                    }

                                    ?>    
                           
                        </div>
                          
                        

                    </div>

                </div>


           