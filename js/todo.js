

const input = document.querySelector("#nameInput");
const list = document.querySelector("#list");

document.querySelector("#addBtn").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value; // read what the user typed
    list.appendChild(li); // add it to the page
    input.value = ""; // clear the box
});

// input, select option, textarea = accessed via .value
// p, div, span = accessed via .textContent
