import * as TODOHandler from '../handlers/todo';
import * as TODOForm from '../handlers/todoForm';
import * as DateFns from 'date-fns';
import * as ContainerComponent from './container';

const updateTODOModal = document.querySelector('#update-todo-modal');
const toggleExpansion = (todoEle) => {
    const description = todoEle.querySelector('.description');
    const checklist = todoEle.querySelector('.todo-checklist');
    const buttons = todoEle.querySelector('.buttons');
    const computedDescriptionDisplay = window.getComputedStyle(description).display;
    description.style.display = computedDescriptionDisplay === 'none' ? 'block' : 'none';
    const computedChecklistDisplay = window.getComputedStyle(checklist).display;
    checklist.style.display = computedChecklistDisplay === 'none' ? 'flex' : 'none';
    buttons.classList.toggle('hide');
};

const getClassForPriority = (priority) => {
    switch (priority) {
        case 1: return 'hobby';
        case 2: return 'chore';
        default: return 'important';
    }
};

const setStyleClassForPriority = (todoComponent, priority) => {
    priority = Number(priority);
    todoComponent.classList.remove('hobby');
    todoComponent.classList.remove('chore');
    todoComponent.classList.remove('important');
    let styleClass = 'important';
    switch (priority) {
        case 1: {
            styleClass = 'hobby';
            break;
        }
        case 2: {
            styleClass = 'chore';
            break;
        }
        default: break;
    }
    todoComponent.classList.add(styleClass);
};

const getNewHeaderComponent = (todo, projectIndex, todoId) => {
    const priority = document.createElement('span');
    priority.classList.add('priority');
    priority.textContent = todo.getPriority();

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = todo.getName();

    const twin = document.createElement('span');
    twin.classList.add('twin');
    twin.append(priority, title);

    const dueDate = document.createElement('span');
    dueDate.classList.add('due-date');
    dueDate.textContent = DateFns.format(todo.getDueDate(), 'd.L.yy');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');
    checkbox.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        TODOHandler.checkTODO(projectIndex, todoId, checkbox.checked);
    });

    const header = document.createElement('header');
    header.append(twin, dueDate, checkbox);
    header.addEventListener('click', () => {
        toggleExpansion(header.parentElement);
    });

    return header;
};

const getNewDescriptionComponent = (descriptionTxt) => {
    const description = document.createElement('p');
    description.classList.add('description');
    if (descriptionTxt.length <= 25) {
        description.textContent = descriptionTxt;
        return description;
    }
    const introTxt = descriptionTxt.slice(0, 26);

    const rest = document.createElement('span');
    rest.classList.add('rest');
    rest.textContent = descriptionTxt.slice(26, descriptionTxt.length);

    const showMore = document.createElement('span');
    showMore.classList.add('show-more');
    showMore.textContent = '...show more';
    showMore.addEventListener('click', () => {
        const parent = showMore.parentElement;
        const restElem = parent.querySelector('.rest');
        const showLess = parent.querySelector('.show-less');
        restElem.style.display = 'inline';
        showMore.style.display = 'none';
        showLess.style.display = 'inline';
    });

    const showLess = document.createElement('span');
    showLess.classList.add('show-less');
    showLess.textContent = '...show less';
    showLess.addEventListener('click', () => {
        const parent = showLess.parentElement;
        const restElem = parent.querySelector('.rest');
        const showMore = parent.querySelector('.show-more');
        restElem.style.display = 'none';
        showLess.style.display = 'none';
        showMore.style.display = 'inline';
    });

    description.append(introTxt, showMore, rest, showLess);
    return description;
};

const getNewChecklistComponent = (projectIndex, todo) => {
    const checklistEle = document.createElement('div');
    checklistEle.classList.add('todo-checklist');
    const checklistItemsWrapper = document.createElement('div');
    checklistItemsWrapper.classList.add('checklist-items-wrapper');
    const checklistItemsEle = document.createElement('div');
    checklistItemsEle.classList.add('checklist-items');
    const checklist = todo.getChecklist();
    const itemIDPrefix = TODOHandler.getNewId();
    const getChecklistItemIdFor = (i) => itemIDPrefix + '-checklist-item-' + i;
    for (let i = 0; i < checklist.length; ++i) {
        const itemEle = document.createElement('div');
        itemEle.classList.add('item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checklist[i].done;
        checkbox.id = getChecklistItemIdFor(i);
        checkbox.addEventListener('change', () => {
            const updatedChecklistItem = {
                done: checklist[i].done,
                title: checklist[i].title
            };
            TODOHandler.updateChecklistItem(projectIndex, todo.getId(), i, updatedChecklistItem);
        });

        const title = document.createElement('label');
        title.textContent = checklist[i].title;
        title.setAttribute('for', getChecklistItemIdFor(i));
        itemEle.append(checkbox, title);
        checklistItemsEle.appendChild(itemEle);
    }
    const MIN_NUM_OF_CHECKLIST_ITEMS_FOR_SCROLL = 4;
    if (checklist.length < MIN_NUM_OF_CHECKLIST_ITEMS_FOR_SCROLL) {
        checklistItemsWrapper.style.height = 'unset';
    }
    checklistItemsWrapper.appendChild(checklistItemsEle);
    checklistEle.appendChild(checklistItemsWrapper);
    return checklistEle;
};

const getNewButtonsComponent = (projectIndex, todoId) => {
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.classList.add('hide');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        updateTODOModal.setAttribute('data-todo-id', todoId);
        updateTODOModal.showModal();
        const todo = TODOHandler.getTODO(projectIndex, todoId);
        TODOForm.fillUpdateTODOFormWith(todo);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        buttons.parentElement.remove();
        TODOHandler.deleteTODO(projectIndex, todoId);
    });

    buttons.append(editBtn, deleteBtn);
    return buttons;
};

const getNewTODOComponent = (projectIndex, todo) => {
    const todoComponent = document.createElement('div');
    todoComponent.classList.add('todo');
    todoComponent.classList.add(
        getClassForPriority(todo.getPriority())
    );
    todoComponent.setAttribute('data-id', todo.getId());
    setStyleClassForPriority(todoComponent, todo.getPriority());

    const header = getNewHeaderComponent(todo, projectIndex, todo.getId());
    const description = getNewDescriptionComponent(todo.getDescription());
    const buttons = getNewButtonsComponent(projectIndex, todo.getId())
    const checklist = getNewChecklistComponent(projectIndex, todo);

    todoComponent.append(header, description, checklist, buttons);
    return todoComponent;
};

const updateTODOComponent = (projectIndex, todoId, todo) => {
    const todoContainer = ContainerComponent.getTODOContainerComponent(projectIndex);
    const todoComponent = todoContainer.querySelector(`div[data-id="${todoId}"]`);

    const priority = todoComponent.querySelector('.priority');
    priority.textContent = todo.priority;
    setStyleClassForPriority(todoComponent, todo.priority);

    const name = todoComponent.querySelector('.title');
    name.textContent = todo.name;

    const dueDate = todoComponent.querySelector('.due-date');
    dueDate.textContent = DateFns.format(todo.dueDate, 'd.L.yy');

    const description = todoComponent.querySelector('.description');
    description.textContent = todo.description;
};
const updateTODOComponentCompletionStatus = (projectIndex, todoId) => {
    const todoContainer = ContainerComponent.getTODOContainerComponent(projectIndex);
    const todoComponent = todoContainer.querySelector(`div[data-id="${todoId}"]`);
    todoComponent.classList.toggle('complete');
};

export { getNewTODOComponent, updateTODOComponent, updateTODOComponentCompletionStatus };