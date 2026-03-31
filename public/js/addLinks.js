// let rowIndex = document.querySelectorAll(".add-new-link").length;
const addBtn = document.querySelector(".add-links");

addBtn?.addEventListener("click", () => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="text" name="urls" placeholder="https://..." required>
        </td>
        <td>
            <input type="file" name="images" accept="image/*" class="image-input" required>
            <img class="image-preview" style="width:50px; display:none; background: linear-gradient(135deg, #4f46e5, #6366f1);">
        </td>
        <td>
            <button type="button" class="delete-row">❌</button>
        </td>
    `;

    document.getElementById("add-links-container").appendChild(row);
});

document.getElementById("links-container")?.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-row")) {
        e.target.closest("tr").remove();
    }
});

document.getElementById("add-links-container")?.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-row")) {
        e.target.closest("tr").remove();
    }
});
