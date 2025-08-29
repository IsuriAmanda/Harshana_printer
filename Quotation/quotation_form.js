document.addEventListener("DOMContentLoaded", () => {
  const viewBtn = document.getElementById("viewBtn");
  const buttonContainer = document.getElementById("buttonContainer");
  const cuttingView = document.getElementById("cuttingView");

  viewBtn.addEventListener("click", () => {
    // Show cutting view
    cuttingView.classList.remove("hidden");

    // Replace VIEW button with SEND + DOWNLOAD
    buttonContainer.innerHTML = `
      <button type="button" class="primary-btn">SEND EMAIL</button>
      <button type="button" class="primary-btn">DOWNLOAD</button>
    `;
  });
});
