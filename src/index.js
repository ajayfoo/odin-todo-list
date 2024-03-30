import './style.css';
import * as ModalHandler from './handlers/modal';
import * as ProjectFromHandler from './handlers/projectForm';
import * as StorageHandler from './handlers/storage';
import * as TodoHandler from './handlers/todo';
import * as TodoFormHandler from './handlers/todoForm';
import * as ProjectHandler from './handlers/project';
import * as ContainerComponent from './components/container';

const storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
};

const populateAppWithSavedData= () => {
    const savedProjects = StorageHandler.getSavedProjects();
    for (let i = 0; i < savedProjects.length; i+=1) {
        ProjectHandler.createProject(savedProjects[i].name);
        const {TODOs} = savedProjects[i];
        TODOs.forEach(todo => TodoHandler.createTODO(
            todo.id,
            todo.name,
            i,
            todo.priority,
            todo.description,
            todo.dueDate,
            todo.checklist,
            todo.complete
        ));
    }
};

const initiateApp = () => {
    ModalHandler.setupEventListeners();
    ProjectFromHandler.setupEventListeners();
    if (storageAvailable("localStorage")) {
        if(StorageHandler.savedProjectsExist()){
        populateAppWithSavedData();
        }
        else{
        TodoHandler.createDefaultTODOs();
        }
        window.addEventListener('beforeunload', () => {
            StorageHandler.saveAllProjects();
        });
    } else {
        TodoHandler.createDefaultTODOs();
    }
    TodoFormHandler.setupEventListeners();
    ProjectHandler.setupEventListeners();
    ContainerComponent.changeContainerTo(0);
};

initiateApp();