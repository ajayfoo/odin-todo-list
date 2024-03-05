import * as ProjectHandler from '../handlers/project';

const body = document.body;

const projectComponents = [];
const projectComponentContainer = document.createElement('div');
projectComponentContainer.classList.add('container');


const getNewProjectOptionElement = (name, projectIndex) => {
    const projectOption = document.createElement('option');
    projectOption.textContent = name;
    projectOption.value = projectIndex;
    return projectOption;
};

const getNewProjectComponent = (project, projectIndex) => {
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
    return projectComponent;
};

const addProjectComponent = (projectComponent) => {
    projectComponents.push(projectComponent);
    projectComponentContainer.appendChild(projectComponent);
};

const updateProjectComponentTODOCount = (projectIndex, newTODOCount) => {
    projectComponents[projectIndex].querySelector('.num-of-todos')
        .textContent = newTODOCount + ' TO-DO(s)'
};

const switchToAllProjects = () => {
    const currentContainer = document.querySelector('.container');
    if (currentContainer === projectComponentContainer) return;
    body.replaceChild(projectComponentContainer, currentContainer);
    ProjectHandler.unsetProjectSelection();
};

export { getNewProjectComponent, addProjectComponent, switchToAllProjects, updateProjectComponentTODOCount, getNewProjectOptionElement };