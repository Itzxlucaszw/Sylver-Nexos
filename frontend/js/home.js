const button = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".menu-icon");

button.addEventListener("click", () => {

    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        icon.textContent = "✕";
    } else {
        icon.textContent = "☰";
    }

});