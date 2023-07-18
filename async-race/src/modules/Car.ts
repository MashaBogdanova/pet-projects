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
        createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Edit'});
        createElem({htmlTag: 'button', styles: ['button', 'button_secondary'], parentNode: carInfo, innerText: 'Remove'});
        createElem({htmlTag: 'h3', styles: ['car__title'], parentNode: carInfo, innerText: `${data.name}`});

        const carMove = createElem({htmlTag: 'div', styles: ['car__move'], parentNode: car});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__start-btn'], parentNode: carMove});
        createElem({htmlTag: 'button', styles: ['button_invisible', 'car__restart-btn'], parentNode: carMove});
        createElem({htmlTag: 'img', styles: ['car__car-icon'], parentNode: carMove});
        createElem({htmlTag: 'img', styles: ['car__flag'], parentNode: carMove});

        return car;
    }
}
