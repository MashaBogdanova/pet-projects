import {createElem} from "../utils/createElem";

export class Garage {
    constructor() {
        this.render();
    }

    private render() {
        const garagePage = createElem({
            htmlTag: 'section',
            styles: ['garage'],
            parentClass: '.body'
        });
        const createForm = createElem({
            htmlTag: 'form',
            styles: ['garage__create-form'],
            parentNode: garagePage,
            placeholder: 'Write a car model'
        });
        createElem({
            htmlTag: 'input',
            styles: ['input'],
            parentNode: createForm,
            placeholder: 'Write a car model'
        });
        createElem({
            htmlTag: 'button',
            styles: ['button_secondary'],
            parentNode: createForm,
            innerText: 'Create'
        });
    }
}
