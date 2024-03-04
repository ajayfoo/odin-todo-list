const body = document.body;

const projectComponentContainer = document.createElement('div');
projectComponentContainer.classList.add('container');

const createProjectComponent = (project) => {
    const projectComponent = document.createElement('div');
    projectComponent.classList.add('project');

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = project.getName();

    const numOfTODOs = document.createElement('span');
    numOfTODOs.classList.add('num-of-todos');
    numOfTODOs.textContent = project.getTODOs().length + ' TO-DO(s)';

    projectComponent.append(name, numOfTODOs);
    projectComponentContainer.appendChild(projectComponent);
};

const switchToAllProjects = () => {
    const currentContainer = document.querySelector('.container');
    body.replaceChild(projectComponentContainer, currentContainer);
};

export { createProjectComponent, switchToAllProjects };