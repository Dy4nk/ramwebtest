const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "dashboard.html"
    }else{
        alert("Incorrect password. Try again.")
    }
})

// function for checking username and password

function authentication(username, password) {
    if (username === "admin" && password === "admin") {
        return true;
    } else if (username === "Nexaria" && password === "NexariaRam55") {
        return true;
    } else if (username === "Martijn" && password === "MartijnRam12") {
        return true;
    } else if (username === "Rhyzek" && password === "RhyzekRam32") {
        return true;
    } else {
        return false;
    }
}