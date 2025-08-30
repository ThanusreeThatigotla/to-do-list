function addTask() {
      let taskInput = document.getElementById("taskInput");
      let taskDateTime = document.getElementById("taskDateTime");
      let taskList = document.getElementById("taskList");

      if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      let span = document.createElement("span");
      span.innerHTML = taskInput.value + (taskDateTime.value ? " ⏰ " + taskDateTime.value : "");
      li.appendChild(span);

      let actions = document.createElement("div");
      actions.classList.add("actions");

      // Complete Button
      let completeBtn = document.createElement("button");
      completeBtn.innerHTML = "✔";
      completeBtn.classList.add("complete-btn");
      completeBtn.onclick = function () {
        li.classList.toggle("completed");
      };

      // Edit Button
      let editBtn = document.createElement("button");
      editBtn.innerHTML = "✎";
      editBtn.classList.add("edit-btn");
      editBtn.onclick = function () {
        let newTask = prompt("Edit Task:", span.innerHTML);
        if (newTask) span.innerHTML = newTask;
      };

      // Delete Button
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "🗑";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function () {
        li.remove();
      };

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      li.appendChild(actions);
      taskList.appendChild(li);

      taskInput.value = "";
      taskDateTime.value = "";
    }