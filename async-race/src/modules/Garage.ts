import {createElem} from "../utils/createElem";
import {fetchData} from "../api/fetchData";
import {ICar} from "../types/dataTypes";
import {Car, carStatus} from "./Car";
import {createCarForm} from "../utils/createCarForm";
import {sendFormData} from "../utils/sendFormData";
import {addNewCar} from "../api/addNewCar";
import {fetchWinner} from "../api/fetchWinner";

const CARS_ON_PAGE = 7;

export class Garage {
    data: any;
    totalCarsNumber: number;
    currentPage: number;
    garageElem: null | HTMLElement;


    constructor() {
        this.data = null;
        this.totalCarsNumber = 0;
        this.currentPage = 1;
        this.getPageData();
        this.garageElem = null;
    }

    private async getPageData() {
        try {
            const response = await fetchData('garage', this.currentPage, CARS_ON_PAGE);
            let pageData;
            if(response) {
                pageData = await response.json();
                this.data = pageData;
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
        this.renderGarageTitle(garagePage, data);
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
        const carCreator = createCarForm({parent: garagePage, formAdditionalStyle: ['garage__create-form']});
        this.onCreateFormSubmit(carCreator);
    }

    private renderGarageTitle(garagePage: HTMLElement, data: ICar[]) {
        createElem({
            htmlTag: 'h1',
            styles: ['garage__title'],
            parentNode: garagePage,
            innerText: `Garage (${this.totalCarsNumber})`
        });

        const garageBtns: HTMLElement = createElem({htmlTag: 'div', styles: ['garage__btns'], parentNode: garagePage});
        // Race
        const raceBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Race'
        });
        this.onRaceBtnPress(raceBtn);
        // Reset
        createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Reset'
        });
        // Generate cars
        const generateBtn = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: garageBtns,
            innerText: 'Generate'
        });
        this.onGenerateBtnPress(generateBtn);
    }

    private renderGaragePage(garagePage: HTMLElement, data: ICar[]) {
        const garageCars = createElem({htmlTag: 'div', styles: ['garage__cars'], parentNode: garagePage});
        data.map((carData: ICar) => {
            const car = new Car(carData);
            garageCars.append(car.carElem);
        });
        this.garageElem = garagePage;
    }

    private renderPagination(garagePage: HTMLElement) {
        const pagination = createElem({htmlTag: 'div', styles: ['pagination'], parentNode: garagePage});
        createElem({
            htmlTag: 'h2',
            styles: ['pagination__title'],
            parentNode: pagination,
            innerText: `Page #${this.currentPage}`
        });

        const paginationBtns = createElem({htmlTag: 'div', styles: ['pagination__buttons'], parentNode: pagination});
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
        this.onPageBtnPress(paginationBtns);
    }

    private onCreateFormSubmit(carCreator: HTMLFormElement) {
        carCreator.addEventListener('submit', async (e) => {
            const newCarData = await sendFormData(e, carCreator, addNewCar, '.garage__create .input');
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
                carElem && Car.race(+carId, carStatus.started, carElem);
            }
        });
    }

    private async getCarsToRace(): Promise<{ [key: string]: any }> {
        const allCars: ICar[] = this.data;
        const raceResults: { [key: string]: any } = {}

        for (let i = 0; i < CARS_ON_PAGE; i += 1) {
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

    private onGenerateBtnPress(generateBtn: HTMLElement) {
        generateBtn.addEventListener('click', () => {
            this.generateRandomCars();
            const garageTitle = document.querySelector('.garage__title');
            if (garageTitle) {
                garageTitle.innerHTML = `Garage ${this.data.length + 100}`;
            }
        });
    }

    private async generateRandomCars() {
        const firstModelPart = ['Ford', 'Ferrari', 'Mercedes', 'Tesla', 'Opel', 'Mustang', 'BMW', 'Mazda', 'Range Rover', 'KIA'];
        const secondModelPart = ['Model A', 'Model Q', 'Model Z', 'Model S', 'Model V', 'Model S', 'Model W', 'Model R', 'Model P', "Model L"];

        for (let i = 0; i < 100; i += 1) {
            const name = `${firstModelPart[Math.floor(Math.random() * 10)]} ${secondModelPart[Math.floor(Math.random() * 10)]}`;
            const color = `#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)}`;
            const newCarData = await addNewCar({name, color});
            new Car(newCarData);
            this.data.push(newCarData);
        }
    }

    private getWinner(raceResults: { [key: string]: any }) {
        let bestResult: number | undefined;
        let fastestCarId: string | undefined;

        for (let carId in raceResults) {
            // todo: показывает не первого
            if (!bestResult) {
                bestResult = +raceResults[carId].time;
            } else if (raceResults[carId].time < bestResult) {
                bestResult = +raceResults[carId].time;
                fastestCarId = carId;
                // console.log(raceResults[fastestCarId].model, bestResult)
            }
        }
        const winnerElem: HTMLElement | null = document.getElementById(`${fastestCarId}`);
        if (winnerElem && bestResult && fastestCarId) {
            this.showWinner(winnerElem, bestResult, raceResults[fastestCarId].model);
            this.updateWinnersTable(+fastestCarId, bestResult);
        }
    }

    private async updateWinnersTable(id: number, time: number) {
        const winnerData = await fetchWinner(id);
        const wins = await winnerData;
        console.log(winnerData, wins)
        // const winnerData = {id, wins, time}
        // addWinnerData(winnerData);
    }

    private showWinner(winner: HTMLElement, time: number, model: string): void {
        winner.addEventListener('transitionend', e => {
            alert(`${model} finished first (${time} s)!`);
        });
    }

    private onPageBtnPress(paginationBtns: HTMLElement) {
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
