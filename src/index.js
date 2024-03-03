import './style.css';
import * as ModalHandler from './modalHandler';
import * as ProjectFromHandler from './projectFormHandler';
import * as TodoFormHandler from './todoFormHandler';
import * as TodoComponent from './todoComponent';

ModalHandler.setupEventListeners();
ProjectFromHandler.setupEventListeners();
TodoFormHandler.setupEventListeners();
TodoComponent.setupEventListeners();