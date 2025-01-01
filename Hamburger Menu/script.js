let menu = document.querySelector('#menu-icon')
let navLinks = document.querySelector('.nav-links')
let menuBg = document.querySelector('.menu-bg')


 menu.onclick = function(){
    navLinks.classList.toggle('show-links');
    menu.classList.toggle('menu-change');
    menuBg.classList.toggle('show-bg');
 }