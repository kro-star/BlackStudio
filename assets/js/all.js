document.querySelector('.vacansies-select').addEventListener('click', (e) => {
    document.querySelector('.vacansies-list').classList.toggle('dn');
    e.target.parentElement.querySelector('.arrow').classList.toggle('turn');
    
});