// Lấy các phần tử cần sử dụng
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearCompletedButton = document.getElementById("clear-completed");

let tasks = [];
let filter = "all";

// User story 1: Thêm task mới
addTaskButton.addEventListener("click", () => {
  if (newTaskInput.value.trim() !== "") {
    addTask(newTaskInput.value.trim());
    newTaskInput.value = "";
  }
});

newTaskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && newTaskInput.value.trim() !== "") {
    addTask(newTaskInput.value.trim());
    newTaskInput.value = "";
  }
});

// Hàm thêm task
function addTask(taskText) {
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(task);
  renderTasks();
}

// User story 2: Đánh dấu task hoàn thành
function toggleTaskCompletion(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

// User story 3: Chuyển đổi giữa All, Active, Completed
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filter = button.id;
    renderTasks();
  });
});

// User story 4: Xóa từng task và tất cả task đã hoàn thành
function deleteTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  renderTasks();
}

clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  renderTasks();
});

// Hàm render lại danh sách task theo filter
function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
    taskItem.innerHTML = `
              <span>${task.text}</span>
              <div>
                  <input type="checkbox" ${
                    task.completed ? "checked" : ""
                  } onclick="toggleTaskCompletion(${task.id})">
                  ${
                    filter === "completed"
                      ? `<button onclick="deleteTask(${task.id})">Delete</button>`
                      : ""
                  }
              </div>
          `;
    taskList.appendChild(taskItem);
  });

  // Hiển thị nút Clear Completed nếu có task đã hoàn thành
  const hasCompletedTask = tasks.some((task) => task.completed);
  clearCompletedButton.style.display =
    hasCompletedTask && filter === "completed" ? "block" : "none";
}
localStorage.setItem('taskList', JSON.stringify(taskList));
// Khởi tạo ứng dụng
renderTasks();
