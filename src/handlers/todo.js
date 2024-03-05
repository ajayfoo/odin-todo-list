import * as ProjectHandler from './project';
import * as TODOComponent from '../components/todo';
import * as ProjectComponent from '../components/project';
import { format } from 'date-fns';
const createTODO = (name, projectIndex, priority, description, dueDate) => {
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => format(dueDate, "d.L.yy");
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

createTODO('Art Work', 0, 1, 'document.querySelector("#select-project")', new Date());
createTODO('Music', 0, 2, 'document.querySelector("#select-project")', new Date());
createTODO('Study', 0, 3, 'document.querySelector("#select-project")', new Date());

export { createTODO };