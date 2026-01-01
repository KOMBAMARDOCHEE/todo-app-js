const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});