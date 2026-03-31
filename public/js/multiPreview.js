const container = document.getElementById("links-container");

// LIVE preview (works for all current + future inputs)
container?.addEventListener("change", (e) => {
    if (e.target.classList.contains("image-input")) {
        const file = e.target.files[0];
        const preview = e.target.closest("td").querySelector(".image-preview");

        if (!file) {
            preview.src = "";
            preview.style.display = "none";
            return;
        }

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

document.getElementById("add-links-container")?.addEventListener("change", (e) => {
    if (e.target.classList.contains("image-input")) {
        const file = e.target.files[0];
        const preview = e.target.closest("td").querySelector(".image-preview");

        if (!file) {
            preview.src = "";
            preview.style.display = "none";
            return;
        }

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});


