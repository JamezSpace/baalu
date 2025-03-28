document.getElementById("toggle-nav-bar").addEventListener("click", e => toggleNavBar())

document.querySelector(".nav-bar-mobile").addEventListener("click", e => {
    if(e.target.classList.contains("nav-bar-mobile")) toggleNavBar()
})

function closeNavBar() {
    document.querySelector(".nav-bar-mobile").classList.remove("active")
}

function toggleNavBar() {
    document.body.classList.toggle("lock-scrollbar")

    document.querySelector(".nav-bar-mobile").classList.toggle("active")
}