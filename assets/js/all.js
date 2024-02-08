if($('textarea') != null){
    if(!$('.vacansies-span').classList.contains('dn')){
        $('.vacansies-span').classList.add('dn');
    }
    
}else{
    if($('.vacansies-span').classList.contains('dn')){
        $('.vacansies-span').classList.remove('dn');
    }
}
if($('.vacansies-chose-container') != null){
    let vacSelList = document.querySelectorAll('.vacansies-chose-container');
    for(let item of vacSelList){

        item.addEventListener('click', (e) => {
            let vacanLists = document.querySelectorAll('.vacansies-list');
            if(e.target.parentElement.parentElement.querySelector('.vacansies-list').classList.contains('dn')){
                for(let elem of vacanLists){
                    if(!elem.classList.contains('dn')){
                        elem.classList.add('dn');
                    }
                }
                e.target.parentElement.parentElement.querySelector('.vacansies-list').classList.remove('dn');
            }else{
                e.target.parentElement.parentElement.querySelector('.vacansies-list').classList.add('dn');
            }
        
        if(e.target.parentElement.querySelector('.arrow') != null ){
            e.target.parentElement.querySelector('.arrow').classList.toggle('turn');
        }
        });
    }
}

let vacansiesItems = document.querySelectorAll('.vacansies-item');
for(let item of vacansiesItems){
    item.addEventListener('click', choseVacansies);
}

function choseVacansies(event){
  let newClass = "." + event.target.getAttribute('data-id');
  let vacTextList = document.querySelectorAll('.vacansies-item-text');
  for(let item of vacTextList){
    if(!item.classList.contains('dn')){
        item.classList.add('dn');
    }
  }
  $(newClass).classList.toggle('dn');
  let vacItemList = document.querySelectorAll('.vacansies-item');
  for(let item of vacItemList){
    if(item.classList.contains('active')){
        item.classList.remove('active');
    }
  }
  let classChoseSelect = '.vacansies-' + event.target.getAttribute('data-id');
  let choseSelectList = document.querySelectorAll(classChoseSelect);
  for(let item of choseSelectList){
    item.classList.add('active');
  }
  let vacChoseList = document.querySelectorAll('.vacansies-item-chose');
  for(let item of vacChoseList){
    item.textContent = event.target.textContent;
  }
  $('.input-vacansies').value = event.target.textContent;
  event.target.parentElement.parentElement.parentElement.classList.toggle('dn');///очень плохой код, но он работает, поэтому пока оставлю.  .vacansies-list прячет
        if(event.target.parentElement.parentElement.parentElement.parentElement.querySelector('.arrow') != null ){//стрелку в селекте поворачивает
            event.target.parentElement.parentElement.parentElement.parentElement.querySelector('.arrow').classList.toggle('turn');
        }
    
}



//из минусов этой функции то, что изменения будут происходить и в header и в footer
let listPhone = document.querySelectorAll('.phone-img');
for (let itemPhone of listPhone){  
    itemPhone.addEventListener('click',() => {
        let listNumber = document.querySelectorAll('.phone-number');
        for(let itemNumber of listNumber){
            itemNumber.classList.toggle('dn');
        }
    });
}

if($('.filter') != null){
    let filterList = document.querySelectorAll('.filter');
    for(let filter of filterList){
        filter.addEventListener('click', clickFilter);
    }
}

function clickFilter(e){
    //нет проверки, что по этому фильтру ничего не нашлось
    let chosefilterClass = '.' + e.target.getAttribute('data-id');
    if(chosefilterClass != '.all'){
        let filterList = document.querySelectorAll('.filter');
        for(let filter of filterList){
            if(filter.classList.contains('active')){
                filter.classList.remove('active');
            }
        }
        e.target.classList.add('active');
        let chosefilterClass = '.' + e.target.getAttribute('data-id');
        let choseWorks = document.querySelectorAll(chosefilterClass);
        let worksList = document.querySelectorAll('.work-item');
        for(let work of worksList){
            if(!work.classList.contains('dn')){
                work.classList.add('dn'); 
            }
        }
        for(let activeWork of choseWorks){
            activeWork.classList.remove('dn');
        }
    }else{
        let worksList = document.querySelectorAll('.work-item');
        for(let work of worksList){
            if(work.classList.contains('dn')){
                work.classList.remove('dn'); 
            }
        }   
    }
}




let imgList = document.querySelectorAll('.work-img');
for(let img of imgList){
    img.addEventListener('click', openProject);
}
let modal = document.getElementById('myModal');
function openProject(event){
    console.log(event.target);
    let img = event.target.firstElementChild;    
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}
    
let span = $(".close");
if(span!= null){
    span.onclick = function() {
    modal.style.display = "none";
    }
}

$('.navigate').addEventListener('click', () => {
    $('.headerNav').classList.toggle('dn');
});