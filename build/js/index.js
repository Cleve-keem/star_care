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
        openMenuIcon.classList.add(openNavIcon)

    }
});

// for testimonial swipe.
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach((item)=>{
//     const faqBtn = item.querySelector('.faq-btn');

//     item.addEventListener('click', ()=>{
//         const isOpen = item.classList.toggle('open');
//         const faqIcon = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
//         const faqIconElement = faqBtn.querySelector('i');
//         faqIconElement.classList = `${faqIcon} text-2xl`;
//     })
// });

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.item-wrapper'); // Assuming all faq-items are within a container

    faqContainer.addEventListener('click', (event) => {
        const item = event.target.closest('.faq-item');
        if (item) {
            const faqBtn = item.querySelector('.faq-btn');
            const faqIconElement = faqBtn.querySelector('i');
            
            const isOpen = item.classList.toggle('open');
            const faqIcon = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
            faqIconElement.className = `${faqIcon} text-2xl`; // use className for direct assignment
        }
    });
});
