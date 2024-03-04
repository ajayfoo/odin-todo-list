import './style.css';
import * as ModalHandler from './modalHandler';
import * as ProjectFromHandler from './projectFormHandler';
import * as TodoFormHandler from './todoFormHandler';
import * as ProjectSelector from './projectSelector';
import * as ContainerComponent from './containerComponent';

ModalHandler.setupEventListeners();
ProjectFromHandler.setupEventListeners();
TodoFormHandler.setupEventListeners();
ProjectSelector.setupEventListeners();
ContainerComponent.changeContainerTo(0);