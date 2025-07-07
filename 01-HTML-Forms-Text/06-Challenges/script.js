let form = document.getElementById("form");

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value && password.value) {
        alert("Nice done")
    }

    else{
        alert("Ensure to complete all")
    }

    
})

