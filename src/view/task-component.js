
import { createElement } from "../framework/render.js";
function createTaskComponentTemplate(task) {
    const {title, status} = task;
    return (
        `<section class="tasks">
            <div class="task-body">
           <ul><h3>${status}</h3>
       <li class="task1">${title}</li>
     
       </ul>
       
        </div>
        </section>`
    );
}
export default class TaskComponent{

    constructor({task}) {
        this.task = task;
    }


    getTemplate() {
    return createTaskComponentTemplate(this.task);
    }

    getElement() {
    if (!this.element) {
        this.element = createElement(this.getTemplate());
    }
    return this.element;
    }
    removeElement() {
    this.element = null;
    }   
