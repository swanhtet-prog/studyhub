let taskInput = document.getElementById("taskInput");

let addTask = document.getElementById("addTask");

let taskList = document.querySelector(".tasks");

let taskCount = document.getElementById("taskCount");
let progress = document.getElementById("progress");
function updateProgress() {
    let totalTasks = document.querySelectorAll(".task").length;
    let completedTasks = document.querySelectorAll(".task input:checked").length;

    let percentage = 0;

    if (totalTasks > 0) {
        percentage = Math.round((completedTasks / totalTasks) * 100);
    }

    progress.textContent = percentage + "%";
}
let checkboxes = document.querySelectorAll(".task input");

checkboxes.forEach(function(checkbox) {
    checkbox.onclick = function() {
        updateProgress();
    };
});
addTask.onclick = function() {

    let taskText = taskInput.value;


    if (taskText == "") {
        return;
    }


    let newTask = document.createElement("div");

    newTask.className = "task";


    newTask.innerHTML = `
        <input type="checkbox">

        <span>${taskText}</span>

        <button class="delete">Delete</button>
    `;


    taskList.appendChild(newTask);


    taskInput.value = "";


    let checkbox = newTask.querySelector("input");

    let taskTextElement = newTask.querySelector("span");


    checkbox.onclick = function() {
     updateProgress();
        if (checkbox.checked) {

            taskTextElement.style.textDecoration =
                "line-through";

        } else {

            taskTextElement.style.textDecoration =
                "none";

        }

    };


    let deleteButton =
        newTask.querySelector(".delete");


    deleteButton.onclick = function() {

        newTask.remove();

    };

    taskList.appendChild(newTask);
    taskInput.value = "";

    taskCount.textContent = document.querySelectorAll(".task").length;

    deleteButton.onclick = function() {
        newTask.remove();
        taskCount.textContent = document.querySelectorAll(".task").length;

    };

};

checkbox.onclick = function() {

    if (checkbox.checked) {
        newTask.style.textDecoration = "line-through";
    } else {
        newTask.style.textDecoration = "none";
    }

    let totalTasks = document.querySelectorAll(".task").length;
    let completedTasks = document.querySelectorAll(".task input:checked").length;

    let percentage = 0;

    if (totalTasks > 0) {
        percentage = Math.round((completedTasks / totalTasks) * 100);
    }

   document.getElementById("progress").textContent = percentage + "%";
};