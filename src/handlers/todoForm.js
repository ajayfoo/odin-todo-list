import * as TODOHandler from './todo';
import * as DateFns from 'date-fns';

const todoForm = document.querySelector('#create-todo-modal>form');
const todoNameEle = document.querySelector('#todo-name');
const projectSelectEle = document.querySelector('#create-todo-project-name');
const todoPriorityEle = document.querySelector('#create-todo-priority');
const todoDescriptionEle = document.querySelector('#create-todo-description');
const todoDueDateEle = document.querySelector('#create-todo-due-date');

const updateTODOModal = document.querySelector('#update-todo-modal');
const updateTODOForm = document.querySelector('#update-todo-modal>form');
const updateTodoNameEle = document.querySelector('#todo-new-name');
const updateProjectSelectEle = document.querySelector('#update-todo-project-name');
const updateTodoPriorityEle = document.querySelector('#update-todo-priority');
const updateTodoDescriptionEle = document.querySelector('#update-todo-description');
const updateTodoDueDateEle = document.querySelector('#update-todo-due-date');

const fillUpdateTODOFormWith = (todo, projectIndex) => {
    updateTodoNameEle.value = todo.getName();
    updateProjectSelectEle.selectedIndex = projectIndex;
    updateTodoPriorityEle.value = todo.getPriority();
    updateTodoDescriptionEle.value = todo.getDescription();
    updateTodoDueDateEle.value = DateFns.format(todo.getDueDate(), 'yyyy-MM-dd');
};

const setupEventListeners = () => {
    todoForm.addEventListener('submit', () => {
        TODOHandler.createTODO(
            todoNameEle.value,
            projectSelectEle.value,
            todoPriorityEle.value,
            todoDescriptionEle.value,
            todoDueDateEle.value,
        );
        todoForm.reset();
    });
    updateTODOForm.addEventListener('submit', () => {
        const todoIndex = updateTODOModal.dataset.todoIndex;
        const updatedTODO = {
            name: updateTodoNameEle.value,
            priority: updateTodoPriorityEle.value,
            description: updateTodoDescriptionEle.value,
            dueDate: updateTodoDueDateEle.value,
        };
        TODOHandler.updateTODO(projectSelectEle.value, todoIndex, updatedTODO);
        updateTODOForm.reset();
    });
};

export { setupEventListeners, fillUpdateTODOFormWith };