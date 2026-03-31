document.addEventListener("DOMContentLoaded", () => {
    const langFilter = document.querySelector(".lang-filter");
    const langs = document.querySelector(".lang-filter ul");

    langFilter?.addEventListener("click", () => {
        langs.classList.toggle("active");
    });

    const langFilter1 = document.querySelector(".lang-filter1");
    const langs1 = document.querySelector(".lang-filter1 ul");

    langFilter1?.addEventListener("click", () => {
        langs1.classList.toggle("active");
    });
})