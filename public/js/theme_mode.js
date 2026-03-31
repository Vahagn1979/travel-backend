document.addEventListener("DOMContentLoaded", () => {
    const themeSwitchImg = document.querySelector(".heading .theme-switch img");
    const themeMode = localStorage.getItem("theme-mode");

    if(themeSwitchImg && themeMode === "dark") {
        document.body.classList.add("active");
        themeSwitchImg.src = "/images/light_mode.svg";
    }

    themeSwitchImg?.addEventListener("click", () => {
        document.body.classList.toggle("active");
        
        if(document.body.classList.contains("active")) {
            themeSwitchImg.src = "/images/light_mode.svg";
            localStorage.setItem("theme-mode", "dark");
        } else {
            themeSwitchImg.src = "/images/dark_mode.svg";
            localStorage.setItem("theme-mode", "ligth");
        }
    })

    // This is necessary to reload the page to remove the error text.

    const errorText = document.querySelector(".error-text");
    const loginInputs = document.querySelectorAll(".form-row input");
    
    loginInputs.forEach(elem => {
        elem.addEventListener("focus", () => {
            if(errorText) {
                errorText.style.display = "none";
            }
        })
    })
})