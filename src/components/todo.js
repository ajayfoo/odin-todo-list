import * as DateFns from "date-fns";
import * as ContainerComponent from "./container";

const updateTODOModal = document.querySelector("#update-todo-modal");
const toggleExpansion = (todoEle) => {
  const description = todoEle.querySelector(".description");
  const checklist = todoEle.querySelector(".todo-checklist");
  const buttons = todoEle.querySelector(".buttons");
  const computedDescriptionDisplay =
    window.getComputedStyle(description).display;
  description.style.display =
    computedDescriptionDisplay === "none" ? "block" : "none";
  const computedChecklistDisplay = window.getComputedStyle(checklist).display;
  checklist.style.display =
    computedChecklistDisplay === "none" ? "flex" : "none";
  buttons.classList.toggle("hide");
};

const getClassForPriority = (priority) => {
  switch (priority) {
    case 1:
      return "hobby";
    case 2:
      return "chore";
    default:
      return "important";
  }
};

const setStyleClassForPriority = (todoComponent, priority) => {
  todoComponent.classList.remove("hobby");
  todoComponent.classList.remove("chore");
  todoComponent.classList.remove("important");
  let styleClass = "important";
  switch (Number(priority)) {
    case 1: {
      styleClass = "hobby";
      break;
    }
    case 2: {
      styleClass = "chore";
      break;
    }
    default:
      break;
  }
  todoComponent.classList.add(styleClass);
};

const getNewHeaderComponent = (todo, projectIndex, checkTODO) => {
  const priority = document.createElement("span");
  priority.classList.add("priority");
  priority.textContent = todo.getPriority();

  const title = document.createElement("span");
  title.classList.add("title");
  title.textContent = todo.getName();

  const twin = document.createElement("span");
  twin.classList.add("twin");
  twin.append(priority, title);

  const dueDate = document.createElement("span");
  dueDate.classList.add("due-date");
  dueDate.textContent = DateFns.format(todo.getDueDate(), "d.L.yy");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `${todo.getId()}-checkbox`;
  checkbox.classList.add("check");
  checkbox.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    checkTODO(projectIndex, todo.getId(), event.target.checked);
  });

  const header = document.createElement("header");
  header.append(twin, dueDate, checkbox);
  header.addEventListener("click", () => {
    toggleExpansion(header.parentElement);
  });

  return header;
};

const getNewDescriptionComponent = (descriptionTxt) => {
  const description = document.createElement("p");
  description.classList.add("description");
  if (descriptionTxt.length <= 25) {
    description.textContent = descriptionTxt;
    return description;
  }
  const introTxt = descriptionTxt.slice(0, 26);

  const rest = document.createElement("span");
  rest.classList.add("rest");
  rest.textContent = descriptionTxt.slice(26, descriptionTxt.length);

  const showMoreEle = document.createElement("span");
  showMoreEle.classList.add("show-more");
  showMoreEle.textContent = "...show more";
  showMoreEle.addEventListener("click", () => {
    const parent = showMoreEle.parentElement;
    const restElem = parent.querySelector(".rest");
    const showLess = parent.querySelector(".show-less");
    restElem.style.display = "inline";
    showMoreEle.style.display = "none";
    showLess.style.display = "inline";
  });

  const showLess = document.createElement("span");
  showLess.classList.add("show-less");
  showLess.textContent = "...show less";
  showLess.addEventListener("click", () => {
    const parent = showLess.parentElement;
    const restElem = parent.querySelector(".rest");
    const showMore = parent.querySelector(".show-more");
    restElem.style.display = "none";
    showLess.style.display = "none";
    showMore.style.display = "inline";
  });

  description.append(introTxt, showMoreEle, rest, showLess);
  return description;
};

const getNewChecklistComponent = (projectIndex, todo, updateChecklistItem) => {
  const checklistEle = document.createElement("div");
  checklistEle.classList.add("todo-checklist");
  const checklistItemsWrapper = document.createElement("div");
  checklistItemsWrapper.classList.add("checklist-items-wrapper");
  const checklistItemsEle = document.createElement("div");
  checklistItemsEle.classList.add("checklist-items");
  const checklist = todo.getChecklist();
  const itemIDPrefix = todo.getId();
  const getChecklistItemIdFor = (i) => `${itemIDPrefix}-checklist-item-${i}`;
  for (let i = 0; i < checklist.length; i += 1) {
    const itemEle = document.createElement("div");
    itemEle.classList.add("item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checklist[i].done;
    checkbox.id = getChecklistItemIdFor(i);
    checkbox.addEventListener("change", () => {
      const updatedChecklistItem = {
        done: checkbox.checked,
        title: checklist[i].title,
      };
      updateChecklistItem(projectIndex, todo.getId(), i, updatedChecklistItem);
    });

    const title = document.createElement("label");
    title.textContent = checklist[i].title;
    title.setAttribute("for", getChecklistItemIdFor(i));
    itemEle.append(checkbox, title);
    checklistItemsEle.appendChild(itemEle);
  }
  const MIN_NUM_OF_CHECKLIST_ITEMS_FOR_SCROLL = 4;
  if (checklist.length < MIN_NUM_OF_CHECKLIST_ITEMS_FOR_SCROLL) {
    checklistItemsWrapper.style.height = "unset";
  }
  checklistItemsWrapper.appendChild(checklistItemsEle);
  checklistEle.appendChild(checklistItemsWrapper);
  return checklistEle;
};

const getNewButtonsComponent = (
  projectIndex,
  todoId,
  getTODO,
  deleteTODO,
  fillUpdateTODOFormWith
) => {
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.classList.add("hide");

  const editBtn = document.createElement("button");
  editBtn.setAttribute("type", "button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    updateTODOModal.setAttribute("data-todo-id", todoId);
    updateTODOModal.showModal();
    const todo = getTODO(projectIndex, todoId);
    fillUpdateTODOFormWith(todo, projectIndex);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    buttons.parentElement.remove();
    deleteTODO(projectIndex, todoId);
  });

  buttons.append(editBtn, deleteBtn);
  return buttons;
};

const getNewTODOComponent = (projectIndex, todo, eventListeners) => {
  const {
    checkTODO,
    updateChecklistItem,
    getTODO,
    deleteTODO,
    fillUpdateTODOFormWith,
  } = eventListeners;
  const todoComponent = document.createElement("div");
  todoComponent.classList.add("todo");
  todoComponent.classList.add(getClassForPriority(todo.getPriority()));
  todoComponent.setAttribute("data-id", todo.getId());
  setStyleClassForPriority(todoComponent, todo.getPriority());

  const header = getNewHeaderComponent(todo, projectIndex, checkTODO);
  const description = getNewDescriptionComponent(todo.getDescription());
  const buttons = getNewButtonsComponent(
    projectIndex,
    todo.getId(),
    getTODO,
    deleteTODO,
    fillUpdateTODOFormWith
  );
  const checklist = getNewChecklistComponent(
    projectIndex,
    todo,
    updateChecklistItem
  );

  todoComponent.append(header, description, checklist, buttons);
  return todoComponent;
};

const updateTODOComponent = (
  projectIndex,
  todoId,
  getTODO,
  updateChecklistItem
) => {
  const todoContainer =
    ContainerComponent.getTODOContainerComponent(projectIndex);
  const todoComponent = todoContainer.querySelector(`div[data-id="${todoId}"]`);
  const todo = getTODO(projectIndex, todoId);

  const priority = todoComponent.querySelector(".priority");
  priority.textContent = todo.getPriority();
  setStyleClassForPriority(todoComponent, todo.getPriority());

  const name = todoComponent.querySelector(".title");
  name.textContent = todo.getName();

  const dueDate = todoComponent.querySelector(".due-date");
  dueDate.textContent = DateFns.format(todo.getDueDate(), "d.L.yy");

  const oldDescription = todoComponent.querySelector(".description");
  const newDescription = getNewDescriptionComponent(todo.getDescription());
  newDescription.style.display =
    window.getComputedStyle(oldDescription).display;
  todoComponent.replaceChild(newDescription, oldDescription);

  const oldChecklistItemsWrapper = todoComponent.querySelector(
    ".checklist-items-wrapper"
  );

  const newChecklistItems = getNewChecklistComponent(
    projectIndex,
    todo,
    updateChecklistItem
  ).querySelector(".checklist-items");

  oldChecklistItemsWrapper.replaceChildren(newChecklistItems);
};
const updateTODOComponentCompletionStatus = (
  projectIndex,
  todoId,
  completionStatus
) => {
  const todoContainer =
    ContainerComponent.getTODOContainerComponent(projectIndex);
  const todoComponent = todoContainer.querySelector(`div[data-id="${todoId}"]`);
  const checkbox = todoComponent.querySelector('header>input[type="checkbox"]');
  checkbox.checked = completionStatus;
  if (completionStatus) {
    todoComponent.classList.add("complete");
  } else {
    todoComponent.classList.remove("complete");
  }
};

export {
  getNewTODOComponent,
  updateTODOComponent,
  updateTODOComponentCompletionStatus,
};
