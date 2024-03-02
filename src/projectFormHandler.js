import * as ProjectHandler from './projectHandler';
import { closeCreateProjectDialog } from './modalHandler';

const projectForm = document.querySelector('#create-project+dialog>form');
const createProjectBtn = projectForm.querySelector('.create-form-buttons>button:first-child');
const createProjectAndGoBtn = projectForm.querySelector('.create-form-buttons>button:last-child');

const setupEventListeners = () => {
    const projectNameElement = projectForm.querySelector('#project-name');
    createProjectBtn.addEventListener('click', () => {
        ProjectHandler.createProject(projectNameElement.value);
        closeCreateProjectDialog();
        projectNameElement.value = '';
    });
    createProjectAndGoBtn.addEventListener('click', () => {
        ProjectHandler.createProject(projectNameElement.value);
        closeCreateProjectDialog();
        projectNameElement.value = '';
    });
};

export { setupEventListeners };