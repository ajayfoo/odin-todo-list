import * as TODOFormHandler from "./todoForm";

const createProjectModal = document.querySelector("#create-project-modal");
const createProjectBtn = document.querySelector("#create-project");
const closeCreateProjectModalBtn = document.querySelector(
  "#create-project-modal>form>.close-modal",
);

const createTODOModal = document.querySelector("#create-todo-modal");
const createTODOBtn = document.querySelector("#create-todo");
const closeCreateTODOModalBtn = document.querySelector(
  "#create-todo-modal>form>.close-modal",
);

const updateTODOModal = document.querySelector("#update-todo-modal");
const closeUpdateTODOModalBtn = document.querySelector(
  "#update-todo-modal>form>.close-modal",
);

const closeCreateProjectModal = () => {
  createProjectModal.close();
};

const closeCreateTODOModal = () => {
  createTODOModal.close();
};

const setupEventListeners = () => {
  createProjectBtn.addEventListener("click", () => {
    createProjectModal.showModal();
  });
  closeCreateProjectModalBtn.addEventListener("click", closeCreateProjectModal);

  createTODOBtn.addEventListener("click", () => {
    createTODOModal.showModal();
    TODOFormHandler.setupCreateTODOForm();
  });
  closeCreateTODOModalBtn.addEventListener("click", closeCreateTODOModal);

  closeUpdateTODOModalBtn.addEventListener("click", () => {
    updateTODOModal.close();
  });
};

export { setupEventListeners, closeCreateProjectModal, closeCreateTODOModal };
