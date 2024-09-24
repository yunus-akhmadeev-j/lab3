<<<<<<< HEAD
import {createElement} from '../framework/render.js';


function createContainerContTemplate() {
    return (
        `<div id="main">
        
        </div>`
      );
}


export default class ContainerCont {
  getTemplate() {
    return createContainerContTemplate();
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
}
=======
import {createElement} from '../framework/render.js';


function createContainerContTemplate() {
    return (
        `<div id="main">
        
        </div>`
      );
}


export default class ContainerCont {
  getTemplate() {
    return createContainerContTemplate();
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
}
>>>>>>> cd04d837147e57f89912bdb4c2eb67d9ec6cff69
