import './style.css';
import * as ModalHandler from './handlers/modal';
import * as ProjectFromHandler from './handlers/projectForm';
import * as TodoFormHandler from './handlers/todoForm';
import * as ProjectSelector from './projectSelector';
import * as ContainerComponent from './components/container';

ModalHandler.setupEventListeners();
ProjectFromHandler.setupEventListeners();
TodoFormHandler.setupEventListeners();
ProjectSelector.setupEventListeners();
ContainerComponent.changeContainerTo(0);