
const $ = selector =>{
    return document.querySelector(selector);
  };


function removeError(){
    if($('.errorMail') != null){
        $('.errorMail').remove();
    }
}
function changeColorBorderBottom(inputCss,newClass){
    //отключила работу этой функции, так как не удаляет классы у инпута. в какой-то момент становится у инпута и класс c-bottom и класс c-bottom-red
    let inputText = $(inputCss);
        if(inputText.classList.contains('c-bottom')){
            inputText.classList.remove('c-bottom');
        }
    
        if(inputText.classList.contains('c-bottom-red')){
            inputText.classList.remove('c-bottom-red');
        }
    
    inputText.classList.add(newClass);
}

function changeColorLabel(labelFor,newClass){
    let label = $(labelFor);
    if (label.classList.contains('dn')){
        label.classList.remove('dn');
    }
    if(newClass != 'c-blue'){
        if (label.classList.contains('c-blue')){
            label.classList.remove('c-blue');
        }   
    }
    
    if(newClass != 'c-red'){
        if (label.classList.contains('c-red')){
            label.classList.remove('c-red');
        }   
    }
    
    if(newClass != 'c-firstF0'){
        if (label.classList.contains('c-firstF0')){
            label.classList.remove('c-firstF0');
        }   
    }
    label.classList.add(newClass);
};

function focusName(event){
    removeError();
    if(!$('.errorDisButton').classList.contains('dn')){
        $('.errorDisButton').classList.add('dn');
    }
    
    if(event.target.value == ''){
        changeColorLabel('label[for=nameC]','c-firstF0');
        //changeColorBorderBottom('input[name=nameC]','b-bottom');
    }
    
}
function focusEmail(event){
    removeError();
    if(!$('.errorDisButton').classList.contains('dn')){
        $('.errorDisButton').classList.add('dn');
    }
    if($('label[for=nameC]').value == ''){
        console.log('!');
        changeColorLabel('label[for=nameC]', 'c-red');
        //changeColorBorderBottom('input[name=nameC]','b-bottom-red');
    }
    if($('input[name=phone]').value == ''){
        changeColorLabel('label[for=phone]', 'c-red');
        //changeColorBorderBottom('input[name=phone]','b-bottom-red');
    }
    if(event.target.value == ''){
        changeColorLabel('label[for=email]','c-firstF0');
        //changeColorBorderBottom('input[name=nameC]','b-bottom');
    }
    
}

function focusPhone(event){
    removeError();
    if(!$('.errorDisButton').classList.contains('dn')){
        $('.errorDisButton').classList.add('dn');
    }
    if($('input[name=nameC]').value == ''){
        changeColorLabel('label[for=nameC]', 'c-red');
       // changeColorBorderBottom('input[name=nameC]','b-bottom-red');
    }
    if(event.target.value == ''){
        changeColorLabel('label[for=phone]','c-firstF0');
       // changeColorBorderBottom('input[name=phone]','b-bottom');
    }
    
}
function checkName(text){
    changeColorLabel('label[for=nameC]','c-firstF0');
    //changeColorBorderBottom('input[name=nameC]','b-bottom');
    let regex = /[^a-zA-Zа-яА-ЯёЁ\-]+/ ;
    if (regex.test(text) || text == ''){
        changeColorLabel('label[for=nameC]','c-red');
        //changeColorBorderBottom('input[name=nameC]','b-bottom-red');
        //здесь так же можно было вывести(доп. div ниже строки ввода), что имя может содержать только русские и латинские буквы и дефис(при указании фамилии)
        return false;
    }else{
        changeColorLabel('label[for=nameC]','c-firstF0');
       // changeColorBorderBottom('input[name=nameC]','b-bottom');
        return true;
    }
}

function checkPhone(text){
    changeColorLabel('label[for=phone]','c-firstF0');
    //changeColorBorderBottom('input[name=phone]','b-bottom');
    let regex = /\d\-\d\d\d\-\d\d\d\-\d\d\-\d\d/ ;/*  \w+@\w+\.\w+*/
    let regex2 = /\d\d\d\d\d\d\d\d\d\d\d/;
    //ещё можно предусмотреть ввод городского номера конкретного или не очень региона, а можно при вводе просто цифр делать замену с дефисами.
    if (!regex.test(text) && !regex2.test(text)){
        changeColorLabel('label[for=phone]','c-red');
       // changeColorBorderBottom('input[name=phone]','b-bottom-red');
        //здесь так же можно было вывести(доп. div ниже строки ввода) формат ввода телефона
        return false;
    }else{
        changeColorLabel('label[for=phone]','c-firstF0');
        //changeColorBorderBottom('input[name=phone]','b-bottom');
        return true;
    }
}


function checkEmail(text){
    changeColorLabel('label[for=email]','c-firstF0');
   // changeColorBorderBottom('input[name=email]','b-bottom');
    let regex = /\w+@\w+\.\w+/ ;
    if (!regex.test(text)){
        changeColorLabel('label[for=email]','c-red');
        //changeColorBorderBottom('input[name=email]','b-bottom-red');
        //здесь так же можно было вывести(доп. div ниже строки ввода) формат e-mail
        return false;
    }else{
        changeColorLabel('label[for=email]','c-firstF0');
       // changeColorBorderBottom('input[name=email]','b-bottom');
        return true;
    }
}
/*
function inputFormDate(){
    if(localStorage.length > 0){
        $('input[name=nameC]').value = localStorage.getItem('name');
        if($('input[name=nameC]').value != ''){
            checkName($('input[name=nameC]').value);
        }
        $('input[name=phone]').value = localStorage.getItem('phone');
        if($('input[name=phone]').value != ''){
            checkName($('input[name=phone]').value);
        }
        $('input[name=email]').value = localStorage.getItem('email');
        if($('input[name=email]').value != ''){
            checkName($('input[name=email]').value);
        }
        if($('textarea') != null){
            $('textarea').textContent = localStorage.getItem('text');
        }
    }
    localStorage.clear();
    if($('errorMail') != null){
        $('errorMail').remove();
    }
}
*/

function saveFormDate(){
    /*localStorage.setItem('name', $('input[name=nameC]').value);
    localStorage.setItem('phone', $('input[name=phone]').value);
    localStorage.setItem('email', $('input[name=email]').value);
    localStorage.setItem('text', $('textarea').value);*/ // не нужно сохранять, так как проверка на правильность ввода идёт до отправки формы
    $('input[name=nameC]').value = '';
    $('input[name=phone]').value = '';
    $('input[name=email]').value = '';
    if($('textarea') != null){
        $('textarea').value = '';
    }

}


if($('.buttonForm')!=null){
    //document.addEventListener('DOMContentLoaded', inputFormDate); 
   // $('.buttonForm').addEventListener('click', saveFormDate);
    $('.buttonForm').addEventListener('mouseover',() => {
        if(checkName($('input[name=nameC]').value) && checkEmail($('input[name=email]').value) && checkPhone($('input[name=phone]').value)){
            $('.buttonForm').removeAttribute('disabled');
        }
        if ($('.buttonForm').disabled){
            $('.errorDisButton').classList.remove('dn');
        }
    });
    $('input[name=nameC]').addEventListener('focus',  focusName);
    $('input[name=nameC]').addEventListener('input',  (event) =>  {
        let text = event.target.value;
        let resultCheck = checkName(text);
    });
    $('input[name=nameC]').addEventListener('blur',  (event) =>  {
        let text = event.target.value;
        let resultCheck = checkName(text);
        if(resultCheck && checkEmail($('input[name=email]').value) && checkPhone($('input[name=phone]').value)){
            $('.buttonForm').removeAttribute('disabled');
        }
    });
    
    $('input[name=email]').addEventListener('focus',  focusEmail);
    $('input[name=email]').addEventListener('input',  (event) =>  {
        
        if($('label[for=nameC]').value == ''){
            changeColorLabel('label[for=nameC]', 'c-red');
           // changeColorBorderBottom('input[name=nameC]','b-bottom-red');
        }
        if($('label[for=phone]').value == ''){
            changeColorLabel('label[for=phone]', 'c-red');
           // changeColorBorderBottom('input[name=phone]','b-bottom-red');
        }
        let text = event.target.value;
        let resultCheck = checkEmail(text);
    });
    $('input[name=email]').addEventListener('blur',  (event) =>  {
        
        let text = event.target.value;
        let resultCheck = checkEmail(text);
        if(checkName($('input[name=nameC]').value) && resultCheck && checkPhone($('input[name=phone]').value)){
            $('.buttonForm').removeAttribute('disabled');
        }
    });
    $('input[name=phone]').addEventListener('focus',  focusPhone);
    $('input[name=phone]').addEventListener('input', (event) =>  {
        
        let text = event.target.value;
        checkPhone(text);
        if($('label[for=nameC]').value == ''){
            changeColorLabel('label[for=nameC]', 'c-red');
            //changeColorBorderBottom('input[name=nameC]','b-bottom-red');
            
        }
    });
    $('input[name=phone]').addEventListener('blur', (event) =>  {
       
        let text = event.target.value;
        let resultCheck = checkPhone(text);
        if(checkName($('input[name=nameC]').value) && checkEmail($('input[name=email]').value) && resultCheck){
            $('.buttonForm').removeAttribute('disabled');
        }
    });
    
    
    
    let countFiles = 0;
    let files = {};
    // если есть добавление файлов, логично сделать и их удаление(пока не реализовано)
    if($('#file-input') != null){
        $('#file-input').addEventListener('change', () => {
            const input = $('#file-input');
            //Здесь нужно сделать проверку на размер файла, но я не знаю какой размер нужно задавать.
            files.countFiles = input.files[0];
            $('.fileList').innerHTML += files.countFiles.name + '<br/>';
            countFiles += 1;
            if($('.fileList').parentElement.classList.contains('dn')){
                $('.fileList').parentElement.classList.remove('dn');
                $('.fileList').parentElement.classList.add('df');
            }
    
    
        });
    }
    }