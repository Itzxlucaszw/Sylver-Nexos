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

const dashboardButton = 
document.querySelector(".dashboard-btn");
const appContent =
document.querySelector(".app-content");
dashboardButton.addEventListener("click", function(){
    appContent.innerHTML =
    ""
    
});

const goalsButton =
document.querySelector(".goals-btn")
const goals = 
document.querySelector(".goals")
goalsButton.addEventListener("click", function(){
    goals.innerHTML =
    ""
})
