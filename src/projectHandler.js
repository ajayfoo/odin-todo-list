const projects = [];

const createProject = (name) => {
    const getName = () => name;
    const TODOs = [];
    const addTODO = (todo) => {
        TODOs.push(todo);
    };
    projects.push({ getName, addTODO });
    console.log(projects[projects.length - 1].getName());
};


const getProject = (index) => {
    return projects[index];
};

export { createProject, getProject };