document.addEventListener("DOMContentLoaded", () => {
    const bulkForm = document.getElementById("bulk-delete-form");
    const selectAll = document.getElementById("select-all");
    const checkboxes = document.querySelectorAll(".row-checkbox");
    const deleteBtn = document.getElementById("delete-btn");
    const hiddenInput = document.getElementById("selected-ids");
    
    function updateUI() {
        const checked = document.querySelectorAll(".row-checkbox:checked");
        const count = checked.length;
        const allCheckboxes = checkboxes.length;
    
        if(count > 0) {
            deleteBtn.style.display = "inline-block";
            
            if(count === allCheckboxes) {
                deleteBtn.textContent = count === 1 ? `Delete all: ${count} selected item` : `Delete all: ${count} selected items`;
                selectAll.checked = true;
            } else {
                deleteBtn.textContent = count === 1 ? `Delete ${count} selected item` : `Delete ${count} selected items`;
                selectAll.checked = false;
            }

            const ids = Array.from(checked).map(elem => elem.value);
            hiddenInput.value = ids.join(",");

        } else {
            deleteBtn.style.display = "none";
            selectAll.checked = false;
        }
        
    }
    
    selectAll?.addEventListener("change", function() {
        checkboxes.forEach(elem => {
            elem.checked = this.checked;
        })
        updateUI();
    })
    
    checkboxes.forEach(elem => {
        elem.addEventListener("change", updateUI);
    })

    bulkForm?.addEventListener("submit", (e) => {
        const confirmed = confirm("Are you sure you want to remove selected item(s)?");

        if(!confirmed) {
            e.preventDefault(); //stop submit
        }
    })
})


