const body = document.body;
const todoContainerComponents = [];
const currentContainer = document.querySelector('.container');

const addContainerComponent = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    todoContainerComponents.push(container);
};

const addTODOComponent = (projectIndex, todoComponent) => {
    todoContainerComponents[projectIndex].appendChild(todoComponent);
}

const changeContainerTo = (projectIndex) => {
    console.log(projectIndex);
    console.log(todoContainerComponents[projectIndex]);
    body.replaceChild(todoContainerComponents[projectIndex], currentContainer);
};

export { addContainerComponent, addTODOComponent, changeContainerTo };