const img = document.getElementById("img");
const preview = document.getElementById("preview");


img?.addEventListener("change", function(event) {
    const file = event.target.files[0];

    if(!file) {
        preview.style.display = "none";
        preview.style.src = "";
        return;
    }

    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
})