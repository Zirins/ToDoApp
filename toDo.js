function addTask() {
    const input = document.getElementById("taskInput");
    const newTask = input.value.trim();

    if (newTask) {
        const list = document.getElementById("taskList");
        const item = document.createElement("li");

        // Create a text node with the task and a delete button
        item.textContent = newTask;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            list.removeChild(item);
        };

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            item.style.textDecoration = "line-through";
        };

        item.appendChild(completeButton);
        item.appendChild(deleteButton);
        list.appendChild(item);

        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}
