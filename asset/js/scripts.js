const addTaskBtn = document.getElementById("add-task-btn");

const handleAddingNewTask = (event) => {
  event.preventDefault();
  const newTaskToAdd = document.getElementById("new-task");
  const toDoList = document.getElementById("to-do-list");
  console.dir(newTaskToAdd.value);
  const newLiElement = document.createElement("li");
  newLiElement.innerHTML = `<span>{newTaskToAdd.value}</span>`;
  toDoList.appendChild(newLiElement);
};

addTaskBtn.addEventListener("click", handleAddingNewTask);

const handleToggleLineThrough = function (event) {
  const selectedLi = event.target;
  selectedLi.classList.toggle("line-through");
};

const toDoList = document.getElementById("to-do-list");

toDoList.addEventListener("click", handleToggleLineThrough);

const deleteBtn = document.createElement("button");
// deleteBtn.classList.add("delete-btn");
deleteBtn.id = "delete-btn";
deleteBtn.innerText = "-";

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
});
