const projects = [];

const getNewProject = (name) => {
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
    return { getName, addTODO, getTODOs, removeTODO, getNumOfTODOs };
};

const getProject = (index) => {
    return projects[index];
};

const addProject = (project) => {
    projects.push(project);
};

const getNumOfProjects = () => projects.length;

export { getNewProject, getProject, addProject, getNumOfProjects };