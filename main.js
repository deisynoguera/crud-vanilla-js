import { useView } from "./view.js";

// model
const taskList = [];

// view
const { createButton, titleInput, descriptionInput, update } = useView();

// controller
createButton.onclick = (event) => {
  event.preventDefault();

  const data = {
    id: crypto.randomUUID(),
    title: titleInput.value,
    description: descriptionInput.value,
  };

  taskList.push(data);

  update(data);

  taskList.forEach((task) => {
    const deleteButton = document.getElementById(task.id);
    deleteButton.onclick = (event) => {
      event.preventDefault();
      taskList.splice(taskList.indexOf(task), 1);
      deleteButton.parentElement.remove();
    };
  });
};
