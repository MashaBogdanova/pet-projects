import {createElem} from "../utils/createElem";
import {ICar} from "../types/dataTypes";
import {removeCarData} from "../api/removeCarData";

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
        createElem({htmlTag: 'h3', styles: ['car__model'], parentNode: carInfo, innerText: `${data.name}`});
        const carEditor = createElem({
            htmlTag: 'form',
            styles: ['car__edit', 'hidden'],
            parentNode: car
        });
        createElem({
            htmlTag: 'input',
            styles: ['input'],
            parentNode: carEditor,
            attribute: {
                name: 'placeholder',
                value: 'Write a car model'
            }
        });
        createElem({
            htmlTag: 'input',
            styles: ['input_color'],
            parentNode: carEditor,
            attribute: {
                type: 'placeholder',
                value: 'color'
            }
        });
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_secondary'],
            parentNode: carEditor,
            attribute: {
                type: 'placeholder',
                value: 'submit'
            },
            innerText: 'Edit'
        });

        const editBtn = createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Edit'});
        const removeBtn = createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Remove'});

        this.addEditCarListeners(editBtn, carEditor);
        this.addRemoveCarListener(removeBtn);

        const carMove = createElem({htmlTag: 'div', styles: ['car__move'], parentNode: car});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__start-btn'], parentNode: carMove});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__restart-btn'], parentNode: carMove});
        createElem({htmlTag: 'div', styles: ['car__car-icon'], parentNode: carMove});
        createElem({htmlTag: 'div', styles: ['car__flag'], parentNode: carMove});

        return car;
    }
    private addEditCarListeners(carModel: HTMLElement, carEditor: HTMLElement): void {
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
    private addRemoveCarListener(removeBtn: HTMLElement): void {
        removeBtn.addEventListener('click', e => {
            removeCarData('garage', this.data.id);
            removeCarData('winners', this.data.id);
            this.carElem.remove();
        });
    }
}
