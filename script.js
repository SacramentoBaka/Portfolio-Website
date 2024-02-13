/**************** Sticky Navbar ***************/

window.onscroll = () => {

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Config Param
let countItem = items.length;
let itemActive = 0;

