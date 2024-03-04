import { addContainerComponent } from "./containerComponent";
import { createProjectComponent } from "./projectComponent";

const projects = [];

const todoCreateProjectSelectElement = document.querySelector("#create-todo-project-name");
const mainProjectSelectElement = document.querySelector('#select-project');
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
    const getTODOs = () => TODOs;
    mainProjectSelectElement.appendChild(getNewProjectOption(name));
    todoCreateProjectSelectElement.appendChild(getNewProjectOption(name));
    const project = { getName, addTODO, getTODOs };
    projects.push(project);
    addContainerComponent();
    createProjectComponent(project);
    console.log(projects[projects.length - 1].getName());
};


const getProject = (index) => {
    return projects[index];
};

createProject('Default');

export { createProject, getProject };