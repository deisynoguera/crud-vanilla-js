export const useView = () => {
  const header = document.createElement("h4");
  header.innerHTML = "Crear tareas";

  const titleInput = document.createElement("input");
  titleInput.placeholder = "Titulo";

  const descriptionInput = document.createElement("input");
  descriptionInput.placeholder = "Description";

  const createButton = document.createElement("button");
  createButton.innerHTML = "Crear";

  const formHtml = document.createElement("form");
  formHtml.append(header, titleInput, descriptionInput, createButton);

  const taskListHtml = document.createElement("div");
  taskListHtml.classList.add("taskList");

  document.body.append(formHtml, taskListHtml);

  const update = (data) => {
    taskListHtml.innerHTML += `
      <div class="row">
          <p>${data.title}: ${data.description}</p>
          <button id="${data.id}">(X)</button>
      </div>
    `;
  };

  return { createButton, titleInput, descriptionInput, update };
};
