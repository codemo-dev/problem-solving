let searchBar = document.querySelector("#searchBar");
let namesList = document.querySelector("#namesList");
let names = document.getElementsByTagName("li");

searchBar.addEventListener("input", (e) => {
    let value = e.target.value.toLowerCase();

    for (let i = 0; i < namesList.children.length; i++) {
        if (names[i].innerText.toLowerCase().includes(value)) {
            names[i].style.display = "block";
        } else {
            names[i].style.display = "none";
        }
    }
})

