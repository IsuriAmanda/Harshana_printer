const form = document.getElementById("quotationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const customer = {
    name: document.getElementById("custName").value,
    email: document.getElementById("custEmail").value,
    phone: document.getElementById("custPhone").value
  };

  // Save quotations in localStorage
  let quotations = JSON.parse(localStorage.getItem("quotations")) || [];
  quotations.push(customer);
  localStorage.setItem("quotations", JSON.stringify(quotations));

  alert("Quotation details saved successfully!");

  // Redirect back to dashboard
  window.location.href = "dashboard.html";
});
