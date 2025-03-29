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

async function sendDataToBackend(data_to_backend, form) {
    showLoader()
    try {
        const response = await fetch('http://localhost:4389/quote', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify(data_to_backend)
        })

        const data = await response.json()

        hideLoader()
        if(data.success) successfulNotif(form)
        else unsuccessfulNotif
    } catch (error) {
        console.error(error);
    }
}

function successfulNotif(form) {
    form.classList.add("none")
    document.getElementById("success").classList.add("active")
}

function unsuccessfulNotif() {
    document.getElementById("error").classList.add("active")
}

function showLoader() {
    document.querySelector(".loader-container").classList.remove("none")
}

function hideLoader() {
    document.querySelector(".loader-container").classList.add("none")
}