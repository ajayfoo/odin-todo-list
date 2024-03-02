const projects = [];

const projectSelectElement = document.querySelector("#create-todo-project-name");
const createProject = (name) => {
    const getName = () => name;
    const TODOs = [];
    const addTODO = (todo) => {
        TODOs.push(todo);
    };
    const projectOption = document.createElement('option');
    projectOption.textContent = name;
    projectOption.setAttribute('index', projects.length);
    projectSelectElement.appendChild(projectOption);
    projects.push({ getName, addTODO });
    console.log(projects[projects.length - 1].getName());
};


const getProject = (index) => {
    return projects[index];
};

export { createProject, getProject };