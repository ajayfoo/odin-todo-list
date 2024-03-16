import * as TODOHandler from './todo';
import * as DateFns from 'date-fns';
import * as TODOFormComponent from '../components/todoForm';

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

const setIDForChecklistItems = (todoFormEle, id) => {
    const checklistItems = todoFormEle.querySelectorAll('.item');
    console.log('setid', checklistItems.length)
    for (let i = 0; i < checklistItems.length; ++i) {
        console.log(checklistItems.item(i));
        const checkbox = checklistItems.item(i).querySelector('input[type="checkbox"]');
        const titleTextbox = checklistItems.item(i).querySelector('input[type="text"]');
        checkbox.id = id + '-checkbox-' + i;
        titleTextbox.id = id + '-textbox-' + i;
        console.log(checkbox, titleTextbox)
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
        todoForm.reset();
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

export { setupEventListeners, fillUpdateTODOFormWith, setIDForChecklistItems };