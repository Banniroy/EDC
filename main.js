document.addEventListener("DOMContentLoaded", () =>{
    initApp();
})

const initApp = () =>{
    const menuBtn = document.querySelector('.menu-btn');
    const listNav = document.querySelector('.nav-list');

    menuBtn.addEventListener("click", toggleMenuBtn);
    listNav.addEventListener("click", toggleMenuBtn);
}

const toggleMenuBtn = () =>{
    const menuBtn = document.querySelector('.menu-btn');
    const listNav = document.querySelector('.nav-list');
    menuBtn.classList.toggle('open');
    listNav.classList.toggle('open');
}