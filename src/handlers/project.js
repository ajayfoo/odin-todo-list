import * as ContainerComponent from "../components/container";
import * as ProjectComponent from "../components/project";

const projects = [];

const todoCreateProjectSelectElement = document.querySelector("#create-todo-project-name");
const projectSelectEle = document.querySelector("#select-project");
const allProjectsEle = document.querySelector("#all-projects");

const getNewProjectOption = (name) => {
    const projectOption = document.createElement('option');
    projectOption.textContent = name;
    projectOption.value = projects.length;
    return projectOption;
};

const createProject = (name) => {
    const getName = () => name;
    const TODOs = [];
    const addTODO = (todo) => {
        TODOs.push(todo);
    };
    const removeTODO = (index) => {
        TODOs[index] = null;
    };
    const getTODOs = () => TODOs;
    const getNumOfTODOs = () => TODOs.reduce((acc, curr) => {
        if (curr != null) ++acc;
        return acc;
    }, 0);
    projectSelectEle.appendChild(getNewProjectOption(name));
    todoCreateProjectSelectElement.appendChild(getNewProjectOption(name));
    const project = { getName, addTODO, getTODOs, removeTODO, getNumOfTODOs };
    projects.push(project);
    ContainerComponent.addContainerComponent();
    ProjectComponent.createProjectComponent(project, projects.length - 1);
    console.log(projects[projects.length - 1].getName());
};

const changeCurrentProject = (projectIndex) => {
    projectSelectEle.selectedIndex = projectIndex;
    ContainerComponent.changeContainerTo(projectIndex);
};

const getProject = (index) => {
    return projects[index];
};

const setupEventListeners = () => {
    projectSelectEle.addEventListener('change',
        () => ContainerComponent.changeContainerTo(projectSelectEle.value)
    );
    allProjectsEle.addEventListener('click', () => {
        ProjectComponent.switchToAllProjects();
    });
};

const unsetProjectSelection = () => {
    projectSelectEle.selectedIndex = -1;
};

createProject('Default');

export { createProject, getProject, changeCurrentProject, setupEventListeners, unsetProjectSelection };