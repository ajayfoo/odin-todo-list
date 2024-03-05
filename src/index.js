import './style.css';
import * as ModalHandler from './handlers/modal';
import * as ProjectFromHandler from './handlers/projectForm';
import * as TodoFormHandler from './handlers/todoForm';
import * as ProjectHandler from './handlers/project';
import * as ContainerComponent from './components/container';

ModalHandler.setupEventListeners();
ProjectFromHandler.setupEventListeners();
TodoFormHandler.setupEventListeners();
ProjectHandler.setupEventListeners();
ContainerComponent.changeContainerTo(0);