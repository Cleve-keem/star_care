const navMenu = document.querySelector('mobile-menu');
const closeMenu = document.querySelector('mobile-close-menu');
const openMenuIcon = document.querySelector('mobile-close-menu-icon');

const openNavClass = 'left-0';
const closeNavClass = '-left-[300px]';
const openNavIcon = 'ri-arrow-right-s-line';
const closeNavIcon = 'ri-arrow-left-s-line';

closeMenu.addEventListener('click', ()=>{
    if(navMenu.classList.contains(closeNavClass)){
        navMenu.classList.toggle(openNavClass);

        openMenuIcon.classList.toggle(openNavIcon);
        openMenuIcon.classList.toggle(openNavIcon);
    }
});
