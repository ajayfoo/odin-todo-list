import * as ProjectHandler from './project';
import * as TODOModel from '../model/todo';
import * as TODOComponent from '../components/todo';
import * as ContainerComponent from '../components/container'


const getNewId = () => Math.random().toString(36).slice(2);

const createTODO = (id, name, projectIndex, priority, description, dueDate, checklist) => {
    const todo = TODOModel.getNewTODO(id, name, priority, description, dueDate, checklist);
    ProjectHandler.addTODOToProject(todo, projectIndex);
    ContainerComponent.addTODOComponentToContainer(projectIndex,
        TODOComponent.getNewTODOComponent(projectIndex, todo)
    );
};

const updateTODO = (projectIndex, todoId, updatedTODO) => {
    const todo = getTODO(projectIndex, todoId);
    todo.setId(todoId);
    todo.setName(updatedTODO.name);
    todo.setPriority(updatedTODO.priority);
    todo.setDescription(updatedTODO.description);
    todo.setDueDate(updatedTODO.dueDate);
    todo.setChecklist(updatedTODO.checklist);
    TODOComponent.updateTODOComponent(projectIndex, todoId);
};

const checkTODO = (projectIndex, todoId, completionStatus) => {
    const todo = getTODO(projectIndex, todoId);
    todo.isComplete(completionStatus);
    TODOComponent.updateTODOComponentCompletionStatus(projectIndex, todoId);
};

const deleteTODO = (projectIndex, todoId) => {
    ProjectHandler.deleteTODOOfProject(projectIndex, todoId);
};

const getTODO = (projectIndex, todoId) => {
    const project = ProjectHandler.getProject(projectIndex);
    return project.getTODOs()[todoId];
};
const updateChecklistItem = (projectIndex, todoId, checklistItemIndex, updatedChecklistItem) => {
    const todo = getTODO(projectIndex, todoId);
    todo.updateChecklistItem(checklistItemIndex, updatedChecklistItem);
};
const createDummyTODOs = () => {
    ProjectHandler.createProject('Default');
    createTODO('abc',
        'Art Work',
        0,
        1,
        'document.querySelector("#select-project")',
        new Date(),
        [{ done: true, title: 'dishes' }]
    );
};

export { getNewId, createTODO, deleteTODO, createDummyTODOs, getTODO, updateTODO, checkTODO, updateChecklistItem };