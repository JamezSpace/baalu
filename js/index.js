const request_form = document.forms['request-quote-form']

request_form.addEventListener("submit", async e => {
    e.preventDefault()

    let any_radio_selected = false
    const data = {}

    document.getElementsByName("order_management").forEach(radio => {
        if (!radio.checked) return

        any_radio_selected = true
        data["order_management"] = radio.id
    })

    if (!any_radio_selected) return alert('Fill in all data required')

    const formData = new FormData(e.target)
    formData.forEach((value, key) => {
        if (key !== "order_management") data[key] = value
    })

    console.log(data);

    await sendDataToBackend(data, request_form)
})

fetch("https://baalu-backend.onrender.com")