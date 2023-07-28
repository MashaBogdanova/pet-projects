import { createElem } from '../utils/createElem';
import { fetchData } from '../api/fetchData';
import { ICar } from '../types/dataTypes';
import { Car, carStatus } from './Car';
import { createCarForm } from '../utils/createCarForm';
import { sendFormData } from '../utils/sendFormData';
import { addNewCar } from '../api/addNewCar';
import { Winners } from './Winners';

const CARS_ON_PAGE = 7;

export class Garage {
    carsData: any;
    totalCarsNumber: number;
    currentPage: number;
    garageElem: null | HTMLElement;
    winners: Winners;

    constructor() {
        this.carsData = null;
        this.totalCarsNumber = 0;
        this.currentPage = 1;
        this.garageElem = null;
        this.winners = new Winners();
        this.getPageData();
    }

    private async getPageData() {
        try {
            const response = await fetchData('garage', this.currentPage, CARS_ON_PAGE);
            let pageData;
            if (response) {
                pageData = await response.json();
                this.carsData = pageData;
                this.totalCarsNumber = Number(response.headers.get('X-Total-Count'));
                this.renderPage(pageData);
            }
        } catch (error) {
            console.error(error);
        }
    }

    private renderPage(data: ICar[]): void {
        const garagePage: HTMLElement = createElem({
            htmlTag: 'section',
            styles: ['garage'],
            parentClass: '.body'
        });
        this.renderCarCreator(garagePage);
        this.renderGarageTitle(garagePage);
        this.renderPagination(garagePage);
        this.renderGaragePage(garagePage, data);
    }

    private renderCarCreator(garagePage: HTMLElement) {
        createElem({
            htmlTag: 'h1',
            styles: ['garage__create-title'],
            parentNode: garagePage,
            innerText: 'Create your own car'
        });
        const carCreator = createCarForm({ parent: garagePage, formAdditionalStyle: ['garage__create-form'] });
        this.onCreateFormSubmit(carCreator);
    }

    private renderGarageTitle(garagePage: HTMLElement) {
        createElem({
            htmlTag: 'h1',
            styles: ['garage__title'],
            parentNode: garagePage,
            innerText: `Garage (${this.totalCarsNumber})`
        });

        const garageBtns: HTMLElement = createElem({ htmlTag: 'div', styles: ['garage__btns'], parentNode: garagePage });
        // Race
        const raceBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Race'
        });
        this.onRaceBtnPress(raceBtn);
        // Reset
        const resetBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Reset'
        });
        // Generate cars
        const generateBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Generate'
        });
        this.onResetBtnPress(resetBtn);
        this.onGenerateBtnPress(generateBtn);
    }

    private renderGaragePage(garagePage: HTMLElement, data: ICar[]) {
        const garageCars = createElem({ htmlTag: 'div', styles: ['garage__cars'], parentNode: garagePage });
        data.map((carData: ICar) => {
            const car = new Car(carData);
            garageCars.append(car.carElem);
        });
        this.garageElem = garagePage;
    }

    private renderPagination(garagePage: HTMLElement) {
        const pagination = createElem({ htmlTag: 'div', styles: ['pagination'], parentNode: garagePage });
        createElem({
            htmlTag: 'h2',
            styles: ['pagination__title'],
            parentNode: pagination,
            innerText: `Page #${this.currentPage}`
        });

        const paginationBtns = createElem({ htmlTag: 'div', styles: ['pagination__buttons'], parentNode: pagination });
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary', 'button_circle'],
            parentNode: paginationBtns,
            innerText: '<'
        });
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary', 'button_circle'],
            parentNode: paginationBtns,
            innerText: '>'
        });
        this.onPaginationBtnPress(paginationBtns);
    }

    private onCreateFormSubmit(carCreator: HTMLFormElement) {
        carCreator.addEventListener('submit', async (e) => {
            const newCarData = await sendFormData(e, carCreator, addNewCar, '.garage__create .input');
            this.carsData.push(newCarData);

            const car = new Car(newCarData);
            const garageCars = document.querySelector('.garage__cars');
            garageCars && garageCars.append(car.carElem);
        });
    }

    private onRaceBtnPress(btn: HTMLElement) {
        btn.addEventListener('click', async () => {
            const raceResults: any = {};
            for (const car of this.carsData) {
                const id: number = car.id;
                const model: string = car.name;
                const time: number | undefined = await Car.getRaceTime(id);

                if (time) {
                    raceResults[id] = { time, model };
                }
            }
            for (const car in raceResults) {
                const carElem = document.getElementById(`${car}`);
                if (carElem) {
                    raceResults[car].status = Car.race(Number(car), carElem, raceResults[car].time);
                }
            }

            this.getWinner(raceResults);
        });
    }

    private onResetBtnPress(btn: HTMLElement) {
        btn.addEventListener('click', () => {
            for (const car of this.carsData) {
                const carElem: HTMLElement | null = document.getElementById(`${car.id}`);
                if (carElem) {
                    carElem.removeAttribute('style');
                    carElem.className = 'car__icon';
                }
            }
        });
    }

    private onGenerateBtnPress(generateBtn: HTMLElement) {
        generateBtn.addEventListener('click', () => {
            this.generateRandomCars();
            const garageTitle = document.querySelector('.garage__title');
            if (garageTitle) {
                garageTitle.innerHTML = `Garage ${this.carsData.length + 100}`;
            }
        });
    }

    private async generateRandomCars() {
        const firstModelPart = ['Ford', 'Ferrari', 'Mercedes', 'Tesla', 'Opel', 'Mustang', 'BMW', 'Mazda', 'Range Rover', 'KIA'];
        const secondModelPart = ['Model A', 'Model Q', 'Model Z', 'Model S', 'Model V', 'Model S', 'Model W', 'Model R', 'Model P', 'Model L'];

        for (let i = 0; i < 100; i += 1) {
            const name = `${firstModelPart[Math.floor(Math.random() * 10)]} ${secondModelPart[Math.floor(Math.random() * 10)]}`;
            const color = `#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)}`;
            const newCarData = await addNewCar({ name, color });
            new Car(newCarData);
            this.carsData.push(newCarData);
        }
    }

    private async getWinner(raceResults: { [key: string]: any }) {
        let bestResult: number | undefined;
        let fastestCarId: string | undefined;

        for (const carId in raceResults) {
            const status = await raceResults[carId].status;
            if (status !== carStatus.stopped
                && (!bestResult || raceResults[carId].time < bestResult)) {
                bestResult = Number(raceResults[carId].time);
                fastestCarId = carId;
            }
        }

        if (bestResult && fastestCarId) {
            this.showWinner(bestResult, raceResults[fastestCarId].model);
            this.winners.addNewWin(fastestCarId, bestResult);
        }
    }

    private showWinner(time: number, model: string): void {
            alert(`${model} finished first (${time} s)!`);
    }

    private onPaginationBtnPress(paginationBtns: HTMLElement) {
        paginationBtns.addEventListener('click', (e) => {
            const pressedBtn = e.target as HTMLElement;
            const pressedBtnText = pressedBtn.innerText;
            if (pressedBtnText === '<' && this.currentPage > 1) {
                this.currentPage -= 1;
                const garage = document.querySelector('.garage');
                garage && garage.remove();
                this.getPageData();
            } else if (pressedBtnText === '>' && this.currentPage < Math.ceil(this.totalCarsNumber / CARS_ON_PAGE)) {
                this.currentPage += 1;
                const garage = document.querySelector('.garage');
                garage && garage.remove();
                this.getPageData();
            }
        })
    }
}
