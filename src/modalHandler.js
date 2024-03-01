
const createProjectDialog = document.querySelector('#create-project+dialog');
const createTODODialog = document.querySelector('#create-todo+dialog');
const createProjectDialogBtn = document.querySelector('#create-project');
const createTODODialogBtn = document.querySelector('#create-todo');
const closeCreateProjectDialogBtn = document.querySelector('#create-project+dialog>form>.close-modal');
const closeCreateTODODialogBtn = document.querySelector('#create-todo+dialog>form>.close-modal');

const setupEventListeners = () => {
    createProjectDialogBtn.addEventListener('click', () => {
        createProjectDialog.showModal();
    });
    createTODODialogBtn.addEventListener('click', () => {
        createTODODialog.showModal();
    });
    closeCreateProjectDialogBtn.addEventListener('click', () => {
        createProjectDialog.close();
    });
    closeCreateTODODialogBtn.addEventListener('click', () => {
        createTODODialog.close();
    });
}

export { setupEventListeners };