// scripts.js

// Hiển thị toàn bộ posts khi trang được tải
window.onload = function () {
  const postTableBody = document
    .getElementById("posts")
    .getElementsByTagName("tbody")[0];

  posts.forEach((post) => {
    const user = users.find((u) => u.id === post.user_id); // Lấy thông tin tác giả
    const row = postTableBody.insertRow(); // Tạo một dòng mới

    row.insertCell(0).textContent = post.id; // Thêm ID
    row.insertCell(1).textContent = post.title; // Thêm tiêu đề
    row.insertCell(2).textContent = post.created_at; // Thêm ngày tạo
    row.insertCell(3).textContent = `${user.first_name} ${user.last_name}`; // Thêm tên tác giả
  });
};
