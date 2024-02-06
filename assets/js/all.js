
const $ = selector =>{
    return document.querySelector(selector);
  };


function removeError(){
    if($('.errorMail') != null){
        $('.errorMail').remove();
    }
}
  
if($('.vacansies-select') != null){
$('.vacansies-select').addEventListener('click', (e) => {

    $('.vacansies-list').classList.toggle('dn');

    e.target.parentElement.querySelector('.arrow').classList.toggle('turn');

    

    });
}

//document.addEventListener('DOMContentLoaded', inputFormDate); 
$('.buttonForm').addEventListener('click', saveFormDate);
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
    }
});
$('input[name=phone]').addEventListener('blur', (event) =>  {
   
    let text = event.target.value;
    let resultCheck = checkPhone(text);
    if(checkName($('input[name=nameC]').value) && checkEmail($('input[name=email]').value) && resultCheck){
        $('.buttonForm').removeAttribute('disabled');
    }
});

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
    }
    
}
function focusEmail(event){
    removeError();
    if(!$('.errorDisButton').classList.contains('dn')){
        $('.errorDisButton').classList.add('dn');
    }
    if($('label[for=nameC]').value == ''){
        changeColorLabel('label[for=nameC]', 'c-red');
    }
    if($('input[name=phone]').value == ''){
        changeColorLabel('label[for=phone]', 'c-red');
    }
    if(event.target.value == ''){
        changeColorLabel('label[for=email]','c-firstF0');
    }
    
}

function focusPhone(event){
    removeError();
    if(!$('.errorDisButton').classList.contains('dn')){
        $('.errorDisButton').classList.add('dn');
    }
    if($('input[name=nameC]').value == ''){
        changeColorLabel('label[for=nameC]', 'c-red');
    }
    if(event.target.value == ''){
        changeColorLabel('label[for=phone]','c-firstF0');
    }
    
}
function checkName(text){
    changeColorLabel('label[for=nameC]','c-firstF0');
    let regex = /[^a-zA-Zа-яА-ЯёЁ\-]+/ ;
    if (regex.test(text) || text == ''){
        changeColorLabel('label[for=nameC]','c-red');
        //здесь так же можно было вывести(доп. div ниже строки ввода), что имя может содержать только русские и латинские буквы и дефис(при указании фамилии)
        return false;
    }else{
        changeColorLabel('label[for=nameC]','c-firstF0');
        return true;
    }
}

function checkPhone(text){
    changeColorLabel('label[for=phone]','c-firstF0');
    let regex = /\d\-\d\d\d\-\d\d\d\-\d\d\-\d\d/ ;/*  \w+@\w+\.\w+*/
    let regex2 = /\d\d\d\d\d\d\d\d\d\d\d/;
    //ещё можно предусмотреть ввод городского номера конкретного или не очень региона, а можно при вводе просто цифр делать замену с дефисами.
    if (!regex.test(text) && !regex2.test(text)){
        changeColorLabel('label[for=phone]','c-red');
        //здесь так же можно было вывести(доп. div ниже строки ввода) формат ввода телефона
        return false;
    }else{
        changeColorLabel('label[for=phone]','c-firstF0');
        return true;
    }
}


function checkEmail(text){
    changeColorLabel('label[for=email]','c-firstF0');
    let regex = /\w+@\w+\.\w+/ ;
    if (!regex.test(text)){
        changeColorLabel('label[for=email]','c-red');
        //здесь так же можно было вывести(доп. div ниже строки ввода) формат e-mail
        return false;
    }else{
        changeColorLabel('label[for=email]','c-firstF0');
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
    $('textarea').value = '';

}

let countFiles = 0;
let files = {};
// если есть добавление файлов, логично сделать и их удаление(пока не реализовано)
$('#file-input').addEventListener('change', () => {
    const input = $('#file-input');
    //Здесь нужно сделать проверку на размер файла, но я не знаю какой размер нужно задавать.
    files.countFiles = input.files[0];
    console.log(files.countFiles);
    $('.fileList').innerHTML += files.countFiles.name + '<br/>';
    countFiles += 1;


});
