document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleViewBtn");
  const simpleTable = document.getElementById("simpleTable");
  const extendedView = document.getElementById("extendedView");

  let extended = false;

  toggleBtn.addEventListener("click", () => {
    if (!extended) {
      simpleTable.classList.add("hidden");
      extendedView.classList.remove("hidden");
      toggleBtn.textContent = "Back ↩";
    } else {
      simpleTable.classList.remove("hidden");
      extendedView.classList.add("hidden");
      toggleBtn.textContent = "Back ↩";
    }
    extended = !extended;
  });
});
