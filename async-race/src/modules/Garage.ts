import {createElem} from "../utils/createElem";
import {getData} from "../api/getData";
import {ICar} from "../types/dataTypes";
import {Car} from "./Car";
import {createCarForm} from "../utils/createCarForm";
import {addNewCar} from "../api/addNewCar";

export class Garage {
    data: any;
    garageElem: HTMLElement | null;

    constructor() {
        this.data = this.getData();
        this.garageElem = null;
    }

    private async getData(): Promise<void> {
        try {
            const data = await getData('garage');
            this.render(data);
        } catch (error) {
            console.error(error);
        }
    }

    private render(data: ICar[]): void {
        const garagePage = createElem({
            htmlTag: 'section',
            styles: ['garage'],
            parentClass: '.body'
        });
        const carCreator = createCarForm({parent: garagePage, formAdditionalStyle: ['garage__create']});
        this.onCreateFormSubmit(carCreator);

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

        createElem({
            htmlTag: 'h1',
            styles: ['garage__title'],
            parentNode: garagePage,
            innerText: `Garage ${data.length}`
        });
        createElem({htmlTag: 'h2', styles: ['garage__pagination'], parentNode: garagePage, innerText: `Page #${'1'}`});

        const garageCars = createElem({htmlTag: 'div', styles: ['garage__cars'], parentNode: garagePage});
        data.map((carData: ICar) => {
            const car = new Car(carData);
            garageCars.append(car.carElem);
        });
        this.garageElem = garagePage;
    }

    private onCreateFormSubmit(form: HTMLFormElement) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData: FormData = new FormData(form);
            const name = formData.get('name') as string;
            const color = formData.get('color') as string;

            if (name.length !== 0 && color.length !== 0) {
                addNewCar({name: name, color: color});
                const input: HTMLInputElement | null = document.querySelector('.garage__create .input');
                if (input) {
                    input.value = '';
                }
            }
        });
    }
}
