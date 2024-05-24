const navMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('mobile-close-menu');
const openMenuIcon = document.getElementById('mobile-close-menu-icon');

const openNavClass = 'left-0';
const closeNavClass = '-left-[300px]';
const openNavIcon = 'ri-arrow-right-s-line';
const closeNavIcon = 'ri-arrow-left-s-line';

closeMenu.addEventListener('click', ()=>{
    if(navMenu.classList.contains(closeNavClass)){
        navMenu.classList.remove(closeNavClass);
        navMenu.classList.add(openNavClass);

        openMenuIcon.classList.remove(openNavIcon);
        openMenuIcon.classList.add(closeNavIcon);
    }
    else{
        navMenu.classList.remove(openNavClass);
        navMenu.classList.add(closeNavClass);

        openMenuIcon.classList.remove(closeNavIcon);
        openMenuIcon.classList.add(openNavIcon);

    }
});

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});