const button = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
    menu.classList.toggle("open");

if (menu.classList.contains("open")) {
    button.textContent = "✖";
}
else{
    button.textContent = "☰";
}
});