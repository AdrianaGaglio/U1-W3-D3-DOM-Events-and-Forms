const addTaskBtn = document.getElementById("add-task-btn");

const showList = (event) => {
  event.preventDefault();
  const newTaskToAdd = document.getElementById("new-task");
  if (newTaskToAdd.value !== "") {
    document.getElementById("to-do-list-container").style.display = "block";
    document.getElementById("completed-text").remove();
  }
};

const handleAddingNewTask = (event) => {
  event.preventDefault();
  const newTaskToAdd = document.getElementById("new-task");
  const toDoList = document.getElementById("to-do-list");
  const newLiElement = document.createElement("li");
  newLiElement.innerHTML = `<span>${newTaskToAdd.value}</span>`;
  toDoList.appendChild(newLiElement);
};

addTaskBtn.addEventListener("click", showList);
addTaskBtn.addEventListener("click", handleAddingNewTask);

const handleToggleLineThrough = function (event) {
  const selectedLi = event.target;
  selectedLi.classList.toggle("line-through");
};

const toDoList = document.getElementById("to-do-list");

toDoList.addEventListener("click", handleToggleLineThrough);

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("btn");
deleteBtn.id = "delete-btn";
deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

const handleToggleBtn = function (event) {
  const tasks = document.querySelectorAll("#to-do-list li");
  tasks.forEach((task) => {
    const selectedLi = task;
    // selectedLi.appendChild(deleteBtn);
    selectedLi.addEventListener(
      "mouseover",
      function (event) {
        selectedLi.appendChild(deleteBtn);
      },
      { once: true }
    );
    selectedLi.addEventListener(
      "mouseleave",
      function (event) {
        deleteBtn.remove();
      },
      { once: true }
    );
  });
};

toDoList.addEventListener("mouseover", handleToggleBtn);

deleteBtn.addEventListener("click", function (event) {
  document.getElementById("delete-btn").parentElement.remove();
  const list = document.querySelectorAll("li");
  if (list.length === 0) {
    document.getElementById("to-do-list-container").style.display = "none";
    const newText = document.createElement("h3");
    newText.id = "completed-text";
    newText.innerText = "Hai fatto tutto!!!";
    document.querySelector("div").after(newText);
  }
});
