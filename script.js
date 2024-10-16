// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value;
  
    if (taskValue.trim() === "") {
      alert("Please enter a task");
      return;
    }
  
    const taskList = document.getElementById("task-list");
  
    // Create a new list item
    const li = document.createElement("li");
    li.innerHTML = `
      ${taskValue} 
      <button onclick="removeTask(this)">Delete</button>
    `;
  
    // Append the task to the list
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = "";
  }
  
  // Function to remove a task
  function removeTask(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
  }
  