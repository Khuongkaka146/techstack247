// scripts.js

// Chức năng xem chi tiết post
document.getElementById("view-btn").addEventListener("click", function () {
  const postId = parseInt(document.getElementById("post-id").value.trim());
  const postDetailsDiv = document.getElementById("post-details");
  postDetailsDiv.innerHTML = ""; // Reset thông tin chi tiết trước khi tìm kiếm

  // Tìm post theo ID
  const post = posts.find((p) => p.id === postId);

  if (post) {
    const user = users.find((u) => u.id === post.user_id); // Lấy thông tin tác giả
    postDetailsDiv.innerHTML = `
            <h2>Post ID: ${post.id}</h2>
            <p><strong>Title:</strong> ${post.title}</p>
            <p><strong>Content:</strong> ${post.content}</p>
            <p><strong>Image Link:</strong> <a href="${post.image}" target="_blank">${post.image}</a></p>
            <p><strong>Author:</strong> ${user.first_name} ${user.last_name}</p>
            <p><strong>Created At:</strong> ${post.created_at}</p>
            <p><strong>Updated At:</strong> ${post.updated_at}</p>
        `;
  } else {
    postDetailsDiv.innerHTML = "<p>Post not found.</p>";
  }

  // Reset ô nhập ID
  document.getElementById("post-id").value = "";
});
