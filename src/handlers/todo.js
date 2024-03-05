import * as ProjectHandler from './project';
import * as TODOModal from '../model/todo';
import * as TODOComponent from '../components/todo';
import * as ContainerComponent from '../components/container'
import { format } from 'date-fns';

const createTODO = (name, projectIndex, priority, description, dueDate) => {
    // dueDate = format(dueDate);
    const todo = TODOModal.getNewTODO(name, priority, description, '2.2.23');
    const todoIndex = ProjectHandler.addTODOToProject(todo, projectIndex);
    ContainerComponent.addTODOComponentToContainer(projectIndex,
        TODOComponent.getNewTODOComponent(projectIndex, todo, todoIndex)
    );
};

const deleteTODO = (projectIndex, todoIndex) => {
    ProjectHandler.deleteTODOOfProject(projectIndex, todoIndex);
};

createTODO('Art Work', 0, 1, 'document.querySelector("#select-project")', new Date());
createTODO('Music', 0, 2, 'document.querySelector("#select-project")', new Date());
createTODO('Study', 0, 3, 'document.querySelector("#select-project")', new Date());

export { createTODO, deleteTODO };