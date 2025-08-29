// SIGN UP
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    const userType = document.getElementById("signupUserType").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!userType || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
      alert("User already exists!");
      return;
    }

    users.push({ userType, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}

// LOGIN
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const userType = document.getElementById("userType").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password && u.userType === userType);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

