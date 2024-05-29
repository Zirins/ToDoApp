function addTask() {
    var input = document.getElementById("taskInput");
    var newTask = input.value.trim();
    if (newTask) {
        var list = document.getElementById("taskList")
        var item = document.createElement("li");
        item.textContent = newTask;
        list.appendChild(item);
        input.value = "";
    } else {
        alert("Please enter a task!")
    }
}