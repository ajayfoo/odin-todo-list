import * as ProjectHandler from './project';
import * as TODOModel from '../model/todo';
import * as TODOComponent from '../components/todo';
import * as ContainerComponent from '../components/container'

const createTODO = (name, projectIndex, priority, description, dueDate) => {
    const todo = TODOModel.getNewTODO(name, priority, description, dueDate);
    const todoIndex = ProjectHandler.addTODOToProject(todo, projectIndex);
    ContainerComponent.addTODOComponentToContainer(projectIndex,
        TODOComponent.getNewTODOComponent(projectIndex, todo, todoIndex)
    );
};

const updateTODO = (projectIndex, todoIndex, updatedTODO) => {
    ProjectHandler.getProject(projectIndex)
        .getTODOs()[todoIndex] = TODOModel.getNewTODO(
            updatedTODO.name,
            updatedTODO.priority,
            updatedTODO.description,
            updatedTODO.dueDate
        );
    TODOComponent.updateTODOComponent(projectIndex, todoIndex, updatedTODO);
};

const checkTODO = (projectIndex, todoIndex, completionStatus) => {
    ProjectHandler.getProject(projectIndex)
        .getTODOs()[todoIndex].isComplete(completionStatus);
    TODOComponent.updateTODOComponentCompletionStatus(projectIndex, todoIndex);
};

const deleteTODO = (projectIndex, todoIndex) => {
    ProjectHandler.deleteTODOOfProject(projectIndex, todoIndex);
};

const getTODO = (projectIndex, todoIndex) => {
    const project = ProjectHandler.getProject(projectIndex);
    return project.getTODOs()[todoIndex];
};

const createDummyTODOs = () => {
    createTODO('Art Work', 0, 1, 'document.querySelector("#select-project")', new Date());
    createTODO('Music', 0, 2, 'document.querySelector("#select-project")', new Date());
    createTODO('Study', 0, 3, 'document.querySelector("#select-project")', new Date());
};

export { createTODO, deleteTODO, createDummyTODOs, getTODO, updateTODO, checkTODO };