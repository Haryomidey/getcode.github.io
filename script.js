

const menubar = document.querySelector(".hamburger");
const minSection = document.querySelector(".min-section");
const closeMenu = document.querySelector(".close");

menubar.addEventListener("click", () => {
    minSection.classList.add("min-section-active");
})

closeMenu.addEventListener("click", () => {
    minSection.classList.remove("min-section-active");
})
