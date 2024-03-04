const body = document.body;
const todoContainerComponents = [];

const addContainerComponent = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    todoContainerComponents.push(container);
};

const addTODOComponent = (projectIndex, todoComponent) => {
    todoContainerComponents[projectIndex].appendChild(todoComponent);
}

const changeContainerTo = (projectIndex) => {
    const currentContainer = document.querySelector('.container');
    console.log('Before');
    console.log(projectIndex);
    console.log(todoContainerComponents[projectIndex]);
    console.log(currentContainer);
    body.replaceChild(todoContainerComponents[projectIndex], currentContainer);
    console.log('After');
    console.log(todoContainerComponents[projectIndex]);
    console.log(currentContainer);
};

export { addContainerComponent, addTODOComponent, changeContainerTo };