



                <div class="row">

                    <div class="col-12 col-sm-4 pb25 sm-pt50 xs-pt70 pt15 df fd-column jc-end">                        

                        <label for="nameC" class="c-blue fs16 xs-fs24 fw700 mb20 lh136  dn">Имя</label>

                        <input type="text" name="nameC" value="" placeholder="Имя" class="nameC b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100" required/>
                    </div>

                    <div class="col-12 col-sm-4 pb25 sm-pt50 xs-pt70 pt15 df fd-column jc-end">                        

                        <label for="phone" class="c-blue fs16 md-fs24 fw700 mb20 lh136 dn">Телефон</label>

                        <input type="tel" name="phone" value="" placeholder="Телефон" class="phone b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100" required/>
                    </div>

                    <div class="col-12 col-sm-4 pb25 sm-pt50 xs-pt70 pt15 df fd-column jc-end">                        

                        <label for="email" class="c-blue fs16 md-fs24 fw700 mb20 lh136  dn">Почта</label>

                        <input type="email" name="email" value="" placeholder="Почта" class="email b-bottom inputtext fs14 fw500 c-firstF0 md-fs18 lh136 pb8 pt8 bg-black w-100" required/>

                    </div>

                    <div class="col-12">
                        <div class="df  mt30 xs-mt50 ai-center">
                            <button type="submit" class="button buttonForm fs16 xs-fs18 fw700 pt15 pb15 pr30 pl30 mr10  c-firstF0 br10 bg-blue b0" disabled>
                                Отправить заявку<span class="vacansies-span"> на вакансию</span>
                            </button> 
                            <div class="fs16 xs-fs18 fw700 pt15 pb15 pr30 pl30 mr10  c-red dn errorDisButton">
                                Обязательные поля для ввода: имя, телефон и почта.
                            </div>
                            <?php 
                                    
                                    if(!empty($_GET)){
                                        include 'mail.php';
                                    }
                                    

                                    ?>    
                           
                        </div>
                          
                        

                    </div>

                </div>


           