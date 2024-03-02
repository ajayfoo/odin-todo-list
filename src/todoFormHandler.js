import { closeCreateTODODialog } from './modalHandler';
import * as TodoHandler from './todoHandler';

const todoForm = document.querySelector('#create-todo+dialog>form');

const createTODOBtn = todoForm.querySelector('.create-form-buttons>button:first-child');
const createTODOAndGoBtn = todoForm.querySelector('.create-form-buttons>button:last-child');
const todoNameEle = document.querySelector('#todo-name');
const projectSelectEle = document.querySelector('#create-todo-project-name');
const todoPriorityEle = document.querySelector('#create-todo-priority');
const todoDescriptionEle = document.querySelector('#create-todo-description');
const todoDueDateEle = document.querySelector('#create-todo-due-date');

const resetAllFields = () => {
    todoNameEle.value = '';
    projectSelectEle.selectedIndex = 0;
    todoPriorityEle.selectedIndex = 0;
    todoDescriptionEle.value = '';
    todoDueDateEle.value = null;
};

const setupEventListeners = () => {
    createTODOBtn.addEventListener('click', () => {
        if (!todoForm.checkValidity()) return;
        TodoHandler.createTODO(
            todoNameEle.value,
            projectSelectEle.value,
            todoPriorityEle.value,
            todoDescriptionEle.value,
            todoDueDateEle.value
        );
        closeCreateTODODialog();
        resetAllFields();
    });
    createTODOAndGoBtn.addEventListener('click', () => {
        if (!todoForm.checkValidity()) return;
        ProjectHandler.createProject(projectNameElement.value);
        TodoHandler.createTODO(
            todoNameEle.value,
            projectSelectEle.value,
            todoPriorityEle.value,
            todoDescriptionEle.value,
            todoDueDateEle.value
        );
        closeCreateTODODialog();
        resetAllFields();
    });
};

export { setupEventListeners };