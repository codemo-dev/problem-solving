let container = document.querySelector("#con");
let elements = document.querySelectorAll(".color");
let bg = document.body

container.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") return;
    let color = e.target.dataset.value;
    bg.style.backgroundColor = color;
})