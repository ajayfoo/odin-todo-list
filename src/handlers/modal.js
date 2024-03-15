import * as TODOHandler from './todo';
import * as TODOFormHandler from './todoForm';
const createProjectDialog = document.querySelector('#create-project-modal');
const createProjectBtn = document.querySelector('#create-project');
const closeCreateProjectDialogBtn = document.querySelector('#create-project-modal>form>.close-modal');

const createTODODialog = document.querySelector('#create-todo-modal');
const createTODOBtn = document.querySelector('#create-todo');
const closeCreateTODODialogBtn = document.querySelector('#create-todo-modal>form>.close-modal');

const updateTODOModal = document.querySelector('#update-todo-modal');
const closeUpdateTODOModalBtn = document.querySelector('#update-todo-modal>form>.close-modal');

const closeCreateProjectDialog = () => {
    createProjectDialog.close();
};

const closeCreateTODODialog = () => {
    createTODODialog.close();
};

const setupEventListeners = () => {
    createProjectBtn.addEventListener('click', () => {
        createProjectDialog.showModal();
    });
    closeCreateProjectDialogBtn.addEventListener('click', closeCreateProjectDialog);

    createTODOBtn.addEventListener('click', () => {
        createTODODialog.showModal();
        const todoId = TODOHandler.getNewId();
        createTODODialog.setAttribute('data-id', todoId)
        TODOFormHandler.setIDForChecklistItems(createTODODialog.parentElement, todoId);
    });
    closeCreateTODODialogBtn.addEventListener('click', closeCreateTODODialog);

    closeUpdateTODOModalBtn.addEventListener('click', () => {
        updateTODOModal.close();
    });
};

export { setupEventListeners, closeCreateProjectDialog, closeCreateTODODialog };