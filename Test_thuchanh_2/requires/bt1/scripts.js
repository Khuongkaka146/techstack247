// scripts.js
document.getElementById("login-btn").addEventListener("click", function () {
  // Lấy giá trị nhập vào từ người dùng
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageElement = document.getElementById("message");

  // Kiểm tra nếu người dùng không nhập đủ thông tin
  if (email === "" || password === "") {
    messageElement.textContent = "Hãy nhập đầy đủ thông tin";
    return;
  }

  // Tìm user thỏa mãn email và password
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Nếu có user, in ra màn hình “Xin chào” + <tên đầy đủ của user đó>
    messageElement.textContent = `Xin chào ${user.first_name} ${user.last_name}`;
  } else {
    // Nếu không có user, in ra màn hình “Thông tin tài khoản không chính xác”
    messageElement.textContent = "Thông tin tài khoản không chính xác";
  }
});
