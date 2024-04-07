import * as DateFns from "date-fns";
import * as TODOHandler from "./todo";
import getNewChecklistItemFormComponent from "../components/todoForm";

const todoModal = document.getElementById("create-todo-modal");
const todoForm = document.querySelector("#create-todo-modal>form");
const todoNameEle = document.querySelector("#todo-name");
const projectSelectEle = document.querySelector("#create-todo-project-name");
const todoPriorityEle = document.querySelector("#create-todo-priority");
const todoDescriptionEle = document.querySelector("#create-todo-description");
const todoDueDateEle = document.querySelector("#create-todo-due-date");
const todoChecklistItemsEle = document.getElementById(
  "create-todo-checklist-items"
);
const todoAddNewChecklistItemBtn = document.getElementById(
  "create-todo-add-new-checklist-item"
);

const updateTODOModal = document.querySelector("#update-todo-modal");
const updateTODOForm = document.querySelector("#update-todo-modal>form");
const updateTodoNameEle = document.querySelector("#todo-new-name");
const updateProjectSelectEle = document.querySelector(
  "#update-todo-project-name"
);
const updateTodoPriorityEle = document.querySelector("#update-todo-priority");
const updateTodoDescriptionEle = document.querySelector(
  "#update-todo-description"
);
const updateTodoChecklistItemsEle = document.getElementById(
  "update-todo-checklist-items"
);
const updateTodoDueDateEle = document.querySelector("#update-todo-due-date");
const updateTodoAddNewChecklistItemBtn = document.getElementById(
  "update-todo-add-new-checklist-item"
);

const setUpdateTODOChecklistFromArray = (todoId, arr) => {
  updateTodoChecklistItemsEle.replaceChildren();
  for (let i = 0; i < arr.length; i += 1) {
    const checklistItem = getNewChecklistItemFormComponent(todoId, i);

    const checkbox = checklistItem.querySelector('input[type="checkbox"]');
    checkbox.checked = arr[i].done;

    const textbox = checklistItem.querySelector('input[type="text"]');
    textbox.value = arr[i].title;

    updateTodoChecklistItemsEle.appendChild(checklistItem);
  }
  if (arr.length === 0) {
    updateTodoChecklistItemsEle.appendChild(
      getNewChecklistItemFormComponent(todoId, 0)
    );
  }
};

const fillUpdateTODOFormWith = (todo, projectIndex) => {
  updateTodoNameEle.value = todo.getName();
  updateProjectSelectEle.selectedIndex = projectIndex;
  updateTodoPriorityEle.value = todo.getPriority();
  updateTodoDescriptionEle.value = todo.getDescription();
  updateTodoDueDateEle.value = DateFns.format(todo.getDueDate(), "yyyy-MM-dd");
  setUpdateTODOChecklistFromArray(todo.getId(), todo.getChecklist());
};

const resetForm = (form) => {
  form.reset();
  const checklistItemsEle = document.getElementById(
    "create-todo-checklist-items"
  );
  const checklistItemEles = checklistItemsEle.querySelectorAll(".item");
  for (let i = 0; i < checklistItemEles.length; i += 1) {
    checklistItemEles[i].remove();
  }
};

const getChecklistAsArray = (checklistItemsEle) => {
  const checklistItems = checklistItemsEle.querySelectorAll(".item");
  const checklistArr = [];
  checklistItems.forEach((item) => {
    const done = item.querySelector('input[type="checkbox"]').checked;
    const title = item.querySelector('input[type="text"]').value;
    if (title.length === 0) return;
    checklistArr.push({ done, title });
  });
  return checklistArr;
};

const setupEventListeners = () => {
  todoForm.addEventListener("submit", () => {
    const id = todoModal.dataset.todoId;
    TODOHandler.createTODO(
      id,
      todoNameEle.value,
      projectSelectEle.value,
      todoPriorityEle.value,
      todoDescriptionEle.value,
      todoDueDateEle.value,
      getChecklistAsArray(todoChecklistItemsEle),
      false,
      fillUpdateTODOFormWith
    );
    resetForm(todoForm);
  });

  todoAddNewChecklistItemBtn.addEventListener("click", () => {
    const id = todoModal.dataset.todoId;
    const newItemIndex = todoChecklistItemsEle.children.length;
    const newChecklistItem = getNewChecklistItemFormComponent(id, newItemIndex);
    todoChecklistItemsEle.appendChild(newChecklistItem);
  });

  updateTODOForm.addEventListener("submit", () => {
    const { todoId } = updateTODOModal.dataset;
    const updatedTODO = {
      name: updateTodoNameEle.value,
      priority: updateTodoPriorityEle.value,
      description: updateTodoDescriptionEle.value,
      dueDate: updateTodoDueDateEle.value,
      checklist: getChecklistAsArray(updateTodoChecklistItemsEle),
    };
    TODOHandler.updateTODO(updateProjectSelectEle.value, todoId, updatedTODO);
    updateTODOForm.reset();
  });
  updateTodoAddNewChecklistItemBtn.addEventListener("click", () => {
    const id = updateTODOModal.dataset.todoId;
    const newItemIndex = updateTodoChecklistItemsEle.children.length;
    const newChecklistItem = getNewChecklistItemFormComponent(id, newItemIndex);
    updateTodoChecklistItemsEle.appendChild(newChecklistItem);
  });
};

const setupCreateTODOForm = () => {
  const todoId = TODOHandler.getNewId();
  todoModal.setAttribute("data-todo-id", todoId);
  const checklistItemsEle = document.getElementById(
    "create-todo-checklist-items"
  );
  if (checklistItemsEle.hasChildNodes()) return;
  checklistItemsEle.append(getNewChecklistItemFormComponent(todoId, 0));
};

export { setupEventListeners, fillUpdateTODOFormWith, setupCreateTODOForm };
