document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.getElementById("todo-list");
  const addTodoInput = document.getElementById("add-todo-input");
  const addTodoBtn = document.getElementById("add-todo-btn");

  addTodoBtn.addEventListener("click", function () {
    const todoText = addTodoInput.value.trim();
    if (todoText !== "") {
      const todoItem = document.createElement("li");
      todoItem.className = "todo-item";
      todoItem.innerHTML = `
          <span>${todoText}</span>
          <button class="delete-btn">Supprimer</button>
        `;
      todoList.appendChild(todoItem);
      addTodoInput.value = "";
    }
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const todoItem = event.target.parentNode;
      todoList.removeChild(todoItem);
    }
  });
});
