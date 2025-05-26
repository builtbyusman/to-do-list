function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.className = "delete";
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);

    document.querySelector("#taskList").appendChild(li);
    input.value = "";
}