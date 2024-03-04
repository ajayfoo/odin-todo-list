import * as ProjectHandler from './projectHandler';
import * as TODOComponent from './todoComponent';
import * as ProjectComponent from './projectComponent';
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
    ProjectComponent.updateProjectComponentTODOCount(projectIndex);
    console.log(getName(), getPriority(), getDescription(), getDueDate(), 'Project Index: ' + projectIndex);
    console.table(project.getTODOs());
};

createTODO('Bar', 0, 2, 'document.querySelector("#select-project")', '2023-2-2');

export { createTODO };