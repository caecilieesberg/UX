const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
/* Denne funktion gør at burgemenuen forsvinder når man klikker på en af siderne. */
document.querySelectorAll("nav.link").forEach(n => n. 
    addEventListener ("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active")
    }))