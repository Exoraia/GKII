const wrapper = document.querySelector('.wrapper');
const wrp = document.querySelector('.wrp');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrp.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrp.classList.remove('active-popup');
});