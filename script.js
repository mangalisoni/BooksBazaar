// const menuBtn=document.querySelector(`.menu-btn`)
// const navlinks=document.querySelector(`.nav-links`)

// menuBtn.addEventListener(`click`,()=>{
//     navlinks.classList.toggle(`mobile-menu`);
// });
// Toggle mobile menu
const menuBtn = document.querySelector('.navbar__menu-btn');
const navLinks = document.querySelector('.navbar__links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});
