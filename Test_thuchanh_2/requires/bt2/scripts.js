// scripts.js

// Chuyển đổi giữa form đăng nhập và đăng ký
document.getElementById("show-login").addEventListener("click", function () {
  document.getElementById("login-form").classList.add("active");
  document.getElementById("register-form").classList.remove("active");
});

document.getElementById("show-register").addEventListener("click", function () {
  document.getElementById("register-form").classList.add("active");
  document.getElementById("login-form").classList.remove("active");
});

// Chức năng đăng nhập
document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const messageElement = document.getElementById("login-message");

  if (email === "" || password === "") {
    messageElement.textContent = "Hãy nhập đầy đủ thông tin";
    return;
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    messageElement.textContent = `Xin chào ${user.first_name} ${user.last_name}`;
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Thông tin tài khoản không chính xác";
    messageElement.style.color = "red";
  }
});

// Chức năng đăng ký
document.getElementById("register-btn").addEventListener("click", function () {
  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const messageElement = document.getElementById("register-message");

  // Kiểm tra nếu người dùng không nhập đủ thông tin
  if (firstName === "" || lastName === "" || email === "" || password === "") {
    messageElement.textContent = "Hãy nhập đầy đủ thông tin";
    return;
  }

  // Kiểm tra nếu email đã tồn tại
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    messageElement.textContent = "Email này đã có tài khoản";
    return;
  }

  // Thêm user mới vào danh sách
  const newUser = {
    id: users.length + 1, // Id tự tăng
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
  };

  users.push(newUser);
  messageElement.textContent = `Đăng ký thành công. Xin chào ${firstName} ${lastName}`;
  messageElement.style.color = "green";

  // Reset form
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("register-email").value = "";
  document.getElementById("register-password").value = "";
});
