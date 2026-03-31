document.addEventListener("DOMContentLoaded", () => {
    const fields= document.querySelectorAll(".password-field");
    
    fields.forEach(field => {
        const input = field.querySelector(".password-field .password");
        const img = field.querySelector(".password-field .password-img");

        img.addEventListener("click", () => {
            if(input.type === "password") {
                input.type = "text";
                img.src = "/images/visibility_off.svg";
            } else {
                input.type = "password";
                img.src = "/images/visibility.svg";
            }           
        })
    })

    const loginPassword = document.querySelector(".login-password-field input");
    const loginPasswordImg = document.querySelector(".login-password-field .password-img");

    loginPasswordImg?.addEventListener("click", ()=> {
            if(loginPassword.type === "password") {
                loginPassword.type = "text";
                loginPasswordImg.src = "/images/visibility_off.svg";
            } else {
                loginPassword.type = "password";
                loginPasswordImg.src = "/images/visibility.svg";
            } 
    })
})