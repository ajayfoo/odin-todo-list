import * as ProjectHandler from './projectHandler';
import { closeCreateProjectDialog } from './modalHandler';

const projectForm = document.querySelector('#create-project+dialog>form');
const createProjectBtn = projectForm.querySelector('.create-form-buttons>input[type="submit"]:first-child');
const createProjectAndGoBtn = projectForm.querySelector('.create-form-buttons>input[type="submit"]:last-child');

const setupEventListeners = () => {
    const projectNameElement = projectForm.querySelector('#project-name');
    createProjectBtn.addEventListener('click', () => {
        if (!projectForm.checkValidity()) return;
        ProjectHandler.createProject(projectNameElement.value);
        closeCreateProjectDialog();
        projectNameElement.value = '';
    });
    createProjectAndGoBtn.addEventListener('click', () => {
        if (!projectForm.checkValidity()) return;
        ProjectHandler.createProject(projectNameElement.value);
        closeCreateProjectDialog();
        projectNameElement.value = '';
    });
};

export { setupEventListeners };