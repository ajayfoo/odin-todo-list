import * as ProjectHandler from './projectHandler';

const projectForm = document.querySelector('#create-project+dialog>form');
const projectNameElement = projectForm.querySelector('#project-name');

const setupEventListeners = () => {
    projectForm.addEventListener('submit', () => {
        ProjectHandler.createProject(projectNameElement.value);
        projectForm.reset();
    });
};

export { setupEventListeners };