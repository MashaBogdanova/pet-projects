import {createElem} from "../utils/createElem";
import {ICar} from "../types/dataTypes";
import {removeCarData} from "../api/removeCarData";
import {createCarForm} from "../utils/createCarForm";

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
        const carEditor = createCarForm({parent: carInfo, formAdditionalStyle: ['car__edit', 'hidden']});

        const editBtn = createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Edit'});
        const removeBtn = createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Remove'});

        this.addEditCarListeners(editBtn, carEditor);
        this.addRemoveCarListener(removeBtn);

        const carMove = createElem({htmlTag: 'div', styles: ['car__move'], parentNode: car});
        const carMoveWrapper = createElem({htmlTag: 'div', styles: ['car__move-wrapper'], parentNode: carMove});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__start-btn'], parentNode: carMoveWrapper});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__restart-btn'], parentNode: carMoveWrapper});
        createElem({htmlTag: 'div', styles: ['car__car-icon'], parentNode: carMoveWrapper});
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
