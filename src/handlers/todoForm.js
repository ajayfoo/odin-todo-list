import * as TODOHandler from './todo';
import * as DateFns from 'date-fns';
import * as TODOFormComponent from '../components/todoForm';

const todoModal = document.getElementById('create-todo-modal');
const todoForm = document.querySelector('#create-todo-modal>form');
const todoNameEle = document.querySelector('#todo-name');
const projectSelectEle = document.querySelector('#create-todo-project-name');
const todoPriorityEle = document.querySelector('#create-todo-priority');
const todoDescriptionEle = document.querySelector('#create-todo-description');
const todoDueDateEle = document.querySelector('#create-todo-due-date');
const todoChecklistItemsEle = document.getElementById('create-todo-checklist-items');
const todoAddNewChecklistItemBtn = document.getElementById('create-todo-add-new-checklist-item');

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

const resetForm = (form) => {
    form.reset();
    const checklistItemsEle = document.getElementById('create-todo-checklist-items');
    const checklistItemEles = checklistItemsEle.querySelectorAll('.item');
    for (let i = 1; i < checklistItemEles.length; ++i) {
        checklistItemEles[i].remove();
    }
};

const checklistAsArray = (checklistItemsEle) => {
    const checklistItems = checklistItemsEle.querySelectorAll('.item');
    const checklistArr = [];
    checklistItems.forEach(item => {
        const done = item.querySelector('input[type="checkbox"]').checked;
        const title = item.querySelector('input[type="text"]').value;
        checklistArr.push({ done, title });
    });
    return checklistArr;
};


const setupEventListeners = () => {
    todoForm.addEventListener('submit', () => {
        const id = todoForm.parentElement.dataset.todoId;
        TODOHandler.createTODO(
            id,
            todoNameEle.value,
            projectSelectEle.value,
            todoPriorityEle.value,
            todoDescriptionEle.value,
            todoDueDateEle.value,
            checklistAsArray(todoChecklistItemsEle),
        );
        resetForm(todoForm);
    });

    todoAddNewChecklistItemBtn.addEventListener('click', () => {
        const id = todoForm.parentElement.dataset.todoId;
        const newItemIndex = todoForm.querySelectorAll('.item').length;
        const newChecklistItem = TODOFormComponent.getNewChecklistItem(id, newItemIndex);
        todoChecklistItemsEle.appendChild(newChecklistItem);
    });

    updateTODOForm.addEventListener('submit', () => {
        const todoId = updateTODOModal.dataset.todoId;
        const updatedTODO = {
            name: updateTodoNameEle.value,
            priority: updateTodoPriorityEle.value,
            description: updateTodoDescriptionEle.value,
            dueDate: updateTodoDueDateEle.value,
        };
        TODOHandler.updateTODO(projectSelectEle.value, todoId, updatedTODO);
        updateTODOForm.reset();
    });
};

const initiateCreateTODOForm = () => {
    const todoId = TODOHandler.getNewId();
    todoModal.setAttribute('data-id', todoId);
    const checklistItemsEle = document.getElementById('create-todo-checklist-items');
    checklistItemsEle.append(
        TODOFormComponent.getNewChecklistItem(todoId, 0)
    );
};


export { setupEventListeners, fillUpdateTODOFormWith, initiateCreateTODOForm };