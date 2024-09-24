<<<<<<< HEAD
import {createElement} from '../framework/render.js';


function createTaskBasketTemplate() {
    return (
        `<div class="clear-button">
            <button class="button-clear">
                <a href="#">
                    <p class="clear-button-text">Очистить</p>
                </a>
            </button>
        </div> `
      );
}


export default class TaskBasket {
  getTemplate() {
    return createTaskBasketTemplate();
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


function createTaskBasketTemplate() {
    return (
        `<div class="clear-button">
            <button class="button-clear">
                <a href="#">
                    <p class="clear-button-text">Очистить</p>
                </a>
            </button>
        </div> `
      );
}


export default class TaskBasket {
  getTemplate() {
    return createTaskBasketTemplate();
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
