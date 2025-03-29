const contact_form = document.forms["contact-form"]

contact_form.addEventListener("submit", async e => {
    e.preventDefault()

    const data = {}

    const formData = new FormData(e.target)
    formData.forEach((value, key) => {
        data[key] = value
    })

    console.log(data);

    await sendDataToBackend(data, contact_form)
})

