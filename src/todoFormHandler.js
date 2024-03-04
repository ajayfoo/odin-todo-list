import * as TodoHandler from './todoHandler';

const todoForm = document.querySelector('#create-todo+dialog>form');
const todoNameEle = document.querySelector('#todo-name');
const projectSelectEle = document.querySelector('#create-todo-project-name');
const todoPriorityEle = document.querySelector('#create-todo-priority');
const todoDescriptionEle = document.querySelector('#create-todo-description');
const todoDueDateEle = document.querySelector('#create-todo-due-date');

const setupEventListeners = () => {
    todoForm.addEventListener('submit', () => {
        TodoHandler.createTODO(
            todoNameEle.value,
            projectSelectEle.value,
            todoPriorityEle.value,
            todoDescriptionEle.value,
            todoDueDateEle.value,
        );
        todoForm.reset();
    });
};

export { setupEventListeners };