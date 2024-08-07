function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dueDateInput = document.getElementById("dueDateInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
    var dueDate = dueDateInput.value;
    
    if (taskText !== "") {
        var li = document.createElement("li");
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = toggleTask;
        li.appendChild(checkbox);
        
        var span = document.createElement("span");
        span.textContent = taskText + " - Due: " + dueDate;
        li.appendChild(span);
        
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "editButton";
        editButton.onclick = editTask;
        li.appendChild(editButton);
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = deleteTask;
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
        taskInput.value = "";
        dueDateInput.value = ""; 
    }
}

function toggleTask() {
    var span = this.nextElementSibling;
    if (this.checked) {
        span.classList.add("completed");
    } else {
        span.classList.remove("completed");
    }
}

function editTask() {
    var span = this.previousElementSibling;
    var newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}

function deleteTask() {
    var li = this.parentNode;
    var taskList = li.parentNode;
    taskList.removeChild(li);
}