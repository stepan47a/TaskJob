const nav = document.getElementById('nav')
const mobileBtn = document.getElementById('header__mobile__btn');
const navBtnImg = document.getElementById('header-nav-img');
const none = document.querySelector('.mobile__display__none');
const noneFooter = document.querySelector('.mobile__display__none__footer');
const mobileNavOpen = document.querySelector('.mobile__navigation');


mobileBtn.onclick = () => {
    if (nav.classList.toggle('open')){ 
        navBtnImg.src = "mobile-img/close-menu-mobile.png";
        none.style = 'display:none;'
        noneFooter.style = 'display:none;'
        mobileNavOpen.style = 'display:block;'
    
    }
    else{
        navBtnImg.src = "mobile-img/header-menu-mobile.png";
        none.style = 'display:block;'
        noneFooter.style = 'display:block;'
        mobileNavOpen.style = 'display:none;'
      
    }
}


// EN TO RU 

const ru = document.querySelector('#language');

ru.onclick = () => {
    if (ru.textContent == 'EN'){
        ru.textContent = 'RU'
    }
    else{
        ru.textContent = 'EN';
    }
}

