import {createElem} from "../utils/createElem";
import {fetchData} from "../api/fetchData";
import {ICar} from "../types/dataTypes";
import {Car, carStatus} from "./Car";
import {createCarForm} from "../utils/createCarForm";
import {addNewCar} from "../api/addNewCar";
import {sendFormData} from "../utils/sendFormData";

export class Garage {
    data: any;
    garageElem: null | HTMLElement;

    constructor() {
        this.data = null;
        this.getData();
        this.garageElem = null;
    }

    private async getData() {
        try {
            const data = await fetchData('garage');
            this.data = data;
            this.render(data);
        } catch (error) {
            console.error(error);
        }
    }

    private render(data: ICar[]): void {
        const garagePage: HTMLElement = createElem({
            htmlTag: 'section',
            styles: ['garage'],
            parentClass: '.body'
        });
        createElem({
            htmlTag: 'h2',
            styles: ['garage__create-title'],
            parentNode: garagePage,
            innerText: 'Create your own car'
        });
        const carCreator = createCarForm({parent: garagePage, formAdditionalStyle: ['garage__create-form']});
        this.onCreateFormSubmit(carCreator);

        const garageBtns: HTMLElement = createElem({htmlTag: 'div', styles: ['garage__btns'], parentNode: garagePage});
        const raceBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Race'
        });
        this.onRaceBtnPress(raceBtn);

        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Reset'
        });

        const generateBtn = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Generate'
        });
        this.onGenerateBtnPress(generateBtn);

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

    private onCreateFormSubmit(carCreator: HTMLFormElement) {
        carCreator.addEventListener('submit', async (e) => {
            const newCarData = await sendFormData(e, carCreator, addNxewCar, '.garage__create .input');
            this.data.push(newCarData);

            const car = new Car(newCarData);
            const garageCars = document.querySelector('.garage__cars');
            garageCars && garageCars.append(car.carElem);
        });
    }

    private onRaceBtnPress(btn: HTMLElement) {
        btn.addEventListener('click', async (e) => {
            const carsToRace: { [key: string]: any } = await this.getCarsToRace();
            const winner = this.getWinner(carsToRace);

            for (let carId in carsToRace) {
                const carElem = document.getElementById(`${carId}`);
                carElem && Car.race(Number(carId), carStatus.started, carElem);
            }
        });
    }

    private onGenerateBtnPress(generateBtn: HTMLElement) {
        generateBtn.addEventListener('click', () => {
            const carsToGenerate = this.generateRandomCars();
        });
    }

    private generateRandomCars() {
        const firstModelPart = ['Ford', 'Ferrari', 'Mercedes', 'Tesla', 'Opel', 'Mustang', 'BMW', 'Mazda', 'Range Rover', 'KIA'];
        const secondModelPart = ['Model A', 'Model Q', 'Model Z', 'Model S', 'Model V', 'Model S', 'Model W', 'Model R', 'Model P', "Model L"];
        const carData = {
            name: `${'sdrg'}`,
            color: `string`
        }
    }

    private async getCarsToRace(): Promise<{ [key: string]: any }> {
        const allCars: ICar[] = this.data;
        const raceResults: { [key: string]: any } = {}

        for (let i = 0; i < 7; i += 1) {
            if (allCars[i]) {
                const id = allCars[i].id;
                const model = allCars[i].name;
                const carIcon: HTMLElement | null = document.getElementById(`${id}`);
                const time: number | undefined = await Car.getRaceTime(id, carStatus.started);

                if (carIcon && time) {
                    raceResults[id] = {
                        time: time,
                        model: model
                    };
                }
            }
        }
        return raceResults;
    }

    private getWinner(raceResults: { [key: string]: any }) {
        let bestResult: number | undefined;
        let fastestCarId: string | undefined;

        for (let carId in raceResults) {
            // todo: показывает не первого
            if (!bestResult) {
                bestResult = Number(raceResults[carId].time);
            } else if (raceResults[carId].time < bestResult) {
                bestResult = Number(raceResults[carId].time);
                fastestCarId = carId;
                console.log(raceResults[fastestCarId].model, bestResult)
            }
        }
        const winnerElem: HTMLElement | null = document.getElementById(`${fastestCarId}`);
        if (winnerElem && bestResult && fastestCarId) {
            this.showWinner(winnerElem, bestResult, raceResults[fastestCarId].model);
            this.updateWinnersTable();
        }
    }

    private showWinner(winner: HTMLElement, time: number, model: string): void {
        winner.addEventListener('transitionend', e => {
            alert(`${model} finished first (${time} s)!`);
        });
    }
    private updateWinnersTable() {

    }
}
