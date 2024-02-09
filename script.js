// const hamburger = document.querySelector(".hamburger");
// hamburger.onclick = function() {
//     navBar = document.querySelector(".nav-home");
//         navBar.classList.toggle("active");
// }

const nav = document.querySelector("nav");
window.addEventListener("scroll", function(){
    nav.classList.toggle ("sticky" , window.scrollY > 100)
}); 