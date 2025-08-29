// script.js
const table = document.getElementById("quotationTable").getElementsByTagName("tbody")[0];
const addBtn = document.getElementById("addRow");

// Add New Row
addBtn.addEventListener("click", () => {
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>QN000${table.rows.length}</td>
    <td contenteditable="true">New Job</td>
    <td contenteditable="true">New Customer</td>
    <td contenteditable="true">Pending</td>
    <td>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
    <td><button class="export">Export for a Job</button></td>
  `;
});

// Delegate Actions
table.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
  if (e.target.classList.contains("edit")) {
    alert("You can directly edit Job Name, Customer, and Status cells (contenteditable).");
  }
  if (e.target.classList.contains("export")) {
    alert("Exported job successfully!");
  }
});
