import {createElem} from "../utils/createElem";
import {getData} from "../api/api";
import {ICar} from "../types/apiTypes";
import {Car} from "./Car";

export class Garage {
    constructor() {
        this.getData();
    }

    private async getData(): Promise<void> {
        try {
            const data = await getData();
            this.render(data);
        } catch (error) {
            console.error(error);
        }
    }

    private render(data: any): void {
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
            htmlTag: 'input',
            styles: ['input_color'],
            parentNode: createForm,
            type: 'color'
        });
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_secondary'],
            parentNode: createForm,
            innerText: 'Create'
        });

        const garageBtns = createElem({htmlTag: 'div', styles: ['garage__btns'], parentNode: garagePage});
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Race'
        });
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Reset'
        });

        createElem({htmlTag: 'h1', styles: ['garage__title'], parentNode: garagePage, innerText: `Garage ${'(6)'}`});
        createElem({htmlTag: 'h2', styles: ['garage__pagination'], parentNode: garagePage, innerText: `Page #${'1'}`});

        const garageCars = createElem({htmlTag: 'div', styles: ['garage__cars'], parentNode: garagePage});
        data.map((carData: ICar) => {
            const car = new Car(carData);
            garageCars.append(car.carElem);
        });
    }
}
