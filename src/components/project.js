import * as ProjectHandler from '../handlers/project';
import * as ProjectSelector from '../projectSelector';

const body = document.body;

const projectComponents = [];
const projectComponentContainer = document.createElement('div');
projectComponentContainer.classList.add('container');

const createProjectComponent = (project, projectIndex) => {
    const projectComponent = document.createElement('div');
    projectComponent.classList.add('project');
    projectComponent.addEventListener('click', () => {
        ProjectHandler.changeCurrentProject(projectIndex);
    });

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = project.getName();

    const numOfTODOs = document.createElement('span');
    numOfTODOs.classList.add('num-of-todos');
    numOfTODOs.textContent = project.getTODOs().length + ' TO-DO(s)';

    projectComponent.append(name, numOfTODOs);
    projectComponents.push(projectComponent);
    projectComponentContainer.appendChild(projectComponent);
};

const updateProjectComponentTODOCount = (projectIndex) => {
    const project = ProjectHandler.getProject(projectIndex);
    projectComponents[projectIndex].querySelector('.num-of-todos')
        .textContent = project.getTODOs().length + ' TO-DO(s)'
};

const switchToAllProjects = () => {
    const currentContainer = document.querySelector('.container');
    if (currentContainer === projectComponentContainer) return;
    body.replaceChild(projectComponentContainer, currentContainer);
    ProjectSelector.unsetProjectSelection();
};

export { createProjectComponent, switchToAllProjects, updateProjectComponentTODOCount };