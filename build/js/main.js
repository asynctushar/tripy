// currently not working properly. 

const leftNav = document.getElementById('left-slide');
const rightNav = document.getElementById('right-slide');
const slider = document.getElementById('slider');

leftNav.addEventListener('click', function () {
    slider.classList.remove("nav-end");
})

rightNav.addEventListener('click', function () {
    slider.classList.add("nav-end");
})