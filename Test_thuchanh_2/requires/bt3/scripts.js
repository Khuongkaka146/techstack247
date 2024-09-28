// scripts.js

// Chức năng tìm kiếm người dùng
document.getElementById("search-btn").addEventListener("click", function () {
  const keyword = document.getElementById("keyword").value.trim().toLowerCase();
  const userTableBody = document.getElementById("users");
  userTableBody.innerHTML = ""; // Reset danh sách trước khi tìm kiếm

  // Nếu từ khóa trống, hiển thị toàn bộ users
  const filteredUsers =
    keyword.length === 0
      ? users
      : users.filter(
          (user) =>
            user.first_name.toLowerCase().includes(keyword) ||
            user.last_name.toLowerCase().includes(keyword) ||
            user.email.toLowerCase().includes(keyword)
        );

  // Hiển thị danh sách users
  if (filteredUsers.length > 0) {
    filteredUsers.forEach((user) => {
      const row = userTableBody.insertRow(); // Tạo một dòng mới
      row.insertCell(0).textContent = user.id; // Thêm ID
      row.insertCell(1).textContent = `${user.first_name} ${user.last_name}`; // Thêm tên
      row.insertCell(2).textContent = user.email; // Thêm email
    });
  } else {
    userTableBody.innerHTML = "<tr><td colspan='3'>No users found</td></tr>";
  }

  // Reset ô tìm kiếm
  document.getElementById("keyword").value = "";
});

// Hiển thị toàn bộ users khi trang được tải
window.onload = function () {
  const userTableBody = document.getElementById("users");
  users.forEach((user) => {
    const row = userTableBody.insertRow(); // Tạo một dòng mới
    row.insertCell(0).textContent = user.id; // Thêm ID
    row.insertCell(1).textContent = `${user.first_name} ${user.last_name}`; // Thêm tên
    row.insertCell(2).textContent = user.email; // Thêm email
  });
};
