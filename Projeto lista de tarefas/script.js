function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button class="delete-btn" onclick="removeTask(this)">X</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}