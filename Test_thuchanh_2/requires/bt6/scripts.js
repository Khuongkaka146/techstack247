// scripts.js

// Chức năng tìm kiếm posts theo email của user
document
  .getElementById("search-posts-btn")
  .addEventListener("click", function () {
    const email = document
      .getElementById("user-email")
      .value.trim()
      .toLowerCase();
    const postList = document.getElementById("posts");
    postList.innerHTML = ""; // Reset danh sách trước khi tìm kiếm

    // Tìm user theo email
    const user = users.find((u) => u.email.toLowerCase() === email);

    if (user) {
      // Tìm các posts của user đó
      const userPosts = posts.filter((post) => post.user_id === user.id);

      if (userPosts.length > 0) {
        userPosts.forEach((post) => {
          const li = document.createElement("li");
          li.textContent = `ID: ${post.id}, Title: ${post.title}, Created At: ${post.created_at}`;
          postList.appendChild(li);
        });
      } else {
        postList.innerHTML = "<li>No posts found for this user.</li>";
      }
    } else {
      postList.innerHTML = "<li>User not found.</li>";
    }

    // Reset ô nhập email
    document.getElementById("user-email").value = "";
  });
