import {createElem} from "../utils/createElem";
import {ICar} from "../types/apiTypes";
import {render} from "sass";

export class Car {
    data: ICar;
    carElem: HTMLElement;
    constructor(data: ICar) {
        this.data = data;
        this.carElem = this.render(this.data);
    }
    render(data: ICar): HTMLElement {
        const car = createElem({htmlTag: 'article', styles: ['car'], parentClass: '.garage__cars'});

        const carInfo = createElem({htmlTag: 'div', styles: ['car__info'], parentNode: car});
        const carModel = createElem({htmlTag: 'h3', styles: ['car__model'], parentNode: carInfo, innerText: `${data.name}`});
        const carEditor = createElem({
            htmlTag: 'form',
            styles: ['car__edit', 'hidden'],
            parentNode: car
        });
        createElem({
            htmlTag: 'input',
            styles: ['input'],
            parentNode: carEditor,
            placeholder: 'Write a car model'
        });
        createElem({
            htmlTag: 'input',
            styles: ['input_color'],
            parentNode: carEditor,
            type: 'color'
        });
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_secondary'],
            parentNode: carEditor,
            type: 'submit',
            innerText: 'Edit'
        });
        this.addEditCarListeners(carModel, carEditor);

        createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Remove'});

        const carMove = createElem({htmlTag: 'div', styles: ['car__move'], parentNode: car});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__start-btn'], parentNode: carMove});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__restart-btn'], parentNode: carMove});
        createElem({htmlTag: 'img', styles: ['car__car-icon'], parentNode: carMove});
        createElem({htmlTag: 'img', styles: ['car__flag'], parentNode: carMove});

        return car;
    }
    private addEditCarListeners(carModel: HTMLElement, carEditor: HTMLElement) {
        carModel.addEventListener('click', e => {
            carModel.classList.add('hidden');
            carEditor.classList.remove('hidden');
        });
        carEditor.addEventListener('submit', e => {
            e.preventDefault();
            carEditor.classList.add('hidden');
            carModel.classList.remove('hidden');
        });
    }
}
