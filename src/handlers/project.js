import * as ContainerComponent from "../components/container";
import * as ProjectComponent from "../components/project";
import * as ProjectModel from "../model/project";

const todoCreateProjectSelectElement = document.querySelector(
  "#create-todo-project-name"
);
const projectSelectEle = document.querySelector("#select-project");
const updateProjectSelectEle = document.querySelector(
  "#update-todo-project-name"
);
const allProjectsEle = document.querySelector("#all-projects");

const changeCurrentProject = (projectIndex) => {
  projectSelectEle.selectedIndex = projectIndex;
  ContainerComponent.changeContainerTo(projectIndex);
};

const createProject = (name) => {
  const project = ProjectModel.getNewProject(name);
  ProjectModel.addProject(project);
  const projectIndex = ProjectModel.getNumOfProjects() - 1;

  projectSelectEle.appendChild(
    ProjectComponent.getNewProjectOptionElement(name, projectIndex)
  );
  todoCreateProjectSelectElement.appendChild(
    ProjectComponent.getNewProjectOptionElement(name, projectIndex)
  );
  updateProjectSelectEle.appendChild(
    ProjectComponent.getNewProjectOptionElement(name, projectIndex)
  );

  ContainerComponent.addContainerComponent();
  const clickHandler = () => {
    changeCurrentProject(projectIndex);
  };
  const projectComponent = ProjectComponent.getNewProjectComponent(
    project,
    clickHandler
  );
  ProjectComponent.addProjectComponent(projectComponent);
};

const unsetProjectSelection = () => {
  projectSelectEle.selectedIndex = -1;
};
const switchToAllProjects = () => {
  const projectComponentContainer =
    ProjectComponent.getProjectComponentContainer();
  const currentContainer = document.querySelector(".container");
  if (currentContainer === projectComponentContainer) return;
  document.body.replaceChild(projectComponentContainer, currentContainer);
  unsetProjectSelection();
};

const setupEventListeners = () => {
  projectSelectEle.addEventListener("change", () =>
    ContainerComponent.changeContainerTo(projectSelectEle.value)
  );
  allProjectsEle.addEventListener("click", () => {
    switchToAllProjects();
  });
};

const addTODOToProject = (todo, projectIndex) => {
  const project = ProjectModel.getProject(projectIndex);
  project.addTODO(todo);
  ProjectComponent.updateProjectComponentTODOCount(
    projectIndex,
    project.getNumOfTODOs()
  );
};

const deleteTODOOfProject = (projectIndex, todoId) => {
  const project = ProjectModel.getProject(projectIndex);
  delete project.removeTODO(todoId);
  ProjectComponent.updateProjectComponentTODOCount(
    projectIndex,
    project.getNumOfTODOs()
  );
};

const getProject = (projectIndex) => ProjectModel.getProject(projectIndex);
const getAllProjectModels = () => ProjectModel.getAllProjects();

export {
  getProject,
  createProject,
  changeCurrentProject,
  setupEventListeners,
  unsetProjectSelection,
  addTODOToProject,
  deleteTODOOfProject,
  getAllProjectModels,
};
