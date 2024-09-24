<<<<<<< HEAD

import {render, RenderPosition} from './framework/render.js';



import HeaderCont from './view/header.js';
import TaskAdder from './view/task-adder.js';
import TaskBasket from './view/task-basket.js';
import ContainerCont from './view/container.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';



const bodyContainer= document.querySelector('.header');
const taskformContainer=document.querySelector('.newtask-add-button');
const containerContainer=document.querySelector('.main');
const taskbasketContainer=document.querySelector('.in-basket');
const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({boardContainer: tasksBoardContainer,  tasksModel,});



render(new HeaderCont(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new TaskAdder(), taskformContainer,  RenderPosition.BEFOREBEGIN);
render(new ContainerCont(), containerContainer);
render(new TaskBasket(), taskbasketContainer,  RenderPosition.BEFOREBEGIN);

render(new ContainerCont(), containerContainer);
tasksBoardPresenter.init();


=======

import {render, RenderPosition} from './framework/render.js';



import HeaderCont from './view/header.js';
import TaskAdder from './view/task-adder.js';
import TaskBasket from './view/task-basket.js';
import ContainerCont from './view/container.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';



const bodyContainer= document.querySelector('.header');
const taskformContainer=document.querySelector('.newtask-add-button');
const containerContainer=document.querySelector('.main');
const taskbasketContainer=document.querySelector('.in-basket');
const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({boardContainer: tasksBoardContainer,  tasksModel,});



render(new HeaderCont(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new TaskAdder(), taskformContainer,  RenderPosition.BEFOREBEGIN);
render(new ContainerCont(), containerContainer);
render(new TaskBasket(), taskbasketContainer,  RenderPosition.BEFOREBEGIN);

render(new ContainerCont(), containerContainer);
tasksBoardPresenter.init();


>>>>>>> cd04d837147e57f89912bdb4c2eb67d9ec6cff69
