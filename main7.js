const username = "Amir"
const password = "Amir123456"

function handleSubmit() {
    const passwordInput = document.getElementById("password")
    const usernameInput = document.getElementById("username")
    const message = document.getElementById("message")


    if (username === usernameInput.value && password === passwordInput.value) {
        message.style.color = "green"
        message.innerText = "signed in successfully"
    }
    else {
        message.style.color = "red"
        message.innerText = "wrong password or username"
    }

}