document.addEventListener("DOMContentLoaded", () => {
    const userMenu = document.querySelector("header .right-side .user-menu");
    const dropdown = document.querySelector("header .right-side .user-menu .dropdown-menu");

    userMenu?.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    })

    document.addEventListener("click", (e) => {
        if(!userMenu?.contains(e.target)) {
            dropdown?.classList.remove("active");
        }
    })
})