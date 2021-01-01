const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 10) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}
// console.log(nav)
// console.log(nav.offsetHeight)
// console.log(window.scrollY);