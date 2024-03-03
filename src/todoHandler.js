import * as ProjectHandler from './projectHandler';
import * as TODOComponent from './todoComponent';
const createTODO = (name, projectIndex, priority, description, dueDate) => {
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const project = ProjectHandler.getProject(projectIndex);
    const todo = {
        getName, getPriority, getDescription, getDueDate
    };
    project.addTODO(todo);
    TODOComponent.createTODOComponent(projectIndex, todo);
    console.log(getName(), getPriority(), getDescription(), getDueDate(), 'Project Index: ' + projectIndex);
};

export { createTODO };