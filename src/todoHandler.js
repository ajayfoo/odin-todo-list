import * as ProjectHandler from './projectHandler';

const createTODO = (name, projectIndex, priority, description, dueDate) => {
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const project = ProjectHandler.getProject(projectIndex);
    project.addTODO({
        getName, getPriority, getDescription, getDueDate
    });
    console.log(getName(), getPriority(), getDescription(), getDueDate(), 'Project Index: ' + projectIndex);
}

export { createTODO };