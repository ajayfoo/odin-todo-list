import './style.css';
import * as ModalHandler from './modalHandler';
import * as ProjectFromHandler from './projectFormHandler';
import * as TodoFormHandler from './todoFormHandler';

ModalHandler.setupEventListeners();
ProjectFromHandler.setupEventListeners();
TodoFormHandler.setupEventListeners();