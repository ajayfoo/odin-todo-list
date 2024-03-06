import * as ContainerComponent from "../components/container";
import * as ProjectComponent from "../components/project";
import * as ProjectModel from "../model/project";

const todoCreateProjectSelectElement = document.querySelector("#create-todo-project-name");
const projectSelectEle = document.querySelector("#select-project");
const updateProjectSelectEle = document.querySelector('#update-todo-project-name');
const allProjectsEle = document.querySelector("#all-projects");


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

    const projectComponent = ProjectComponent.getNewProjectComponent(
        project,
        projectIndex
    );
    ProjectComponent.addProjectComponent(projectComponent);
};

const changeCurrentProject = (projectIndex) => {
    projectSelectEle.selectedIndex = projectIndex;
    ContainerComponent.changeContainerTo(projectIndex);
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

const addTODOToProject = (todo, projectIndex) => {
    const project = ProjectModel.getProject(projectIndex);
    project.addTODO(todo);
    ProjectComponent.updateProjectComponentTODOCount(projectIndex, project.getNumOfTODOs());
    return project.getNumOfTODOs() - 1;
};

const deleteTODOOfProject = (projectIndex, todoIndex) => {
    const project = ProjectModel.getProject(projectIndex);
    project.removeTODO(todoIndex);
    ProjectComponent.updateProjectComponentTODOCount(projectIndex, project.getNumOfTODOs());
};

const getProject = (projectIndex) => ProjectModel.getProject(projectIndex);

createProject('Default');

export { getProject, createProject, changeCurrentProject, setupEventListeners, unsetProjectSelection, addTODOToProject, deleteTODOOfProject };