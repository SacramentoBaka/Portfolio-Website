
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Config Param
let countItem = items.length;
let itemActive = 0;

// EventHandling, next click button.
next.onclick = function() {
    itemActive += 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
function showSlider(){
    //Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    //Clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() =>{
        next.click();
    }, 5000)
}
//EventHandling, prev click button.
prev.onclick = function() {
    itemActive -= 1;
    if(itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
//Handling the background picture from the thumnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
//Handling Auto Run on slider
let refreshInterval = setInterval(() =>{
    next.click();
}, 5000)
