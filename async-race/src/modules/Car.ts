import {createElem} from "../utils/createElem";
import {ICar} from "../types/dataTypes";
import {removeCarData} from "../api/removeCarData";
import {createCarForm} from "../utils/createCarForm";
import {sendFormData} from "../utils/sendFormData";
import {updateCar} from "../api/updateCar";
import {fetchCarEngine} from "../api/fetchCarEngine";
import {carSVG} from "../assets/images/carSVG";

export enum carStatus {
    started = 'started',
    stopped = 'stopped',
    drive = 'drive'
}

export class Car {
    data: ICar;
    carElem: HTMLElement;
    carStatus: carStatus;
    raceTime: number;

    constructor(data: ICar) {
        this.data = data;
        this.carElem = this.render(this.data);
        this.carStatus = carStatus.stopped;
        this.raceTime = 0;
        Car.getRaceTime(data.id);
    }

    render(data: ICar): HTMLElement {
        const car = createElem({
            htmlTag: 'article',
            styles: ['car'],
            parentClass: '.garage__cars'
        });

        // Car information
        const carInfo = createElem({htmlTag: 'div', styles: ['car__info'], parentNode: car});
        createElem({htmlTag: 'h3', styles: ['car__model'], parentNode: carInfo, innerText: `${data.name}`});
        const carEditor: HTMLFormElement = createCarForm({
            parent: carInfo,
            formAdditionalStyle: ['car__edit', 'hidden']
        });

        const editBtn = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_secondary'],
            parentNode: carInfo,
            innerText: 'Edit'
        });
        const removeBtn = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_secondary'],
            parentNode: carInfo,
            innerText: 'Remove'
        });

        this.onEditBtnPress(editBtn, carEditor);
        this.onRemoveBtnPress(removeBtn);

        // Car move
        const carMove = createElem({htmlTag: 'div', styles: ['car__move'], parentNode: car});
        const carMoveWrapper = createElem({htmlTag: 'div', styles: ['car__move-wrapper'], parentNode: carMove});

        const startBtn = createElem({
            htmlTag: 'button',
            styles: ['button_invisible', 'car__start-btn'],
            parentNode: carMoveWrapper
        });
        const restartBtn = createElem({
            htmlTag: 'button',
            styles: ['button_invisible', 'car__restart-btn'],
            parentNode: carMoveWrapper
        });

        const carIcon = createElem({
            htmlTag: 'div',
            styles: ['car__icon'],
            parentNode: carMoveWrapper,
            innerHTML: carSVG
        });
        carIcon.id = data.id.toString();
        const svgElements = carIcon.getElementsByTagName('path');
        for (const path of svgElements) {
            path.setAttribute('fill', `${data.color}`);
        }

        createElem({htmlTag: 'div', styles: ['car__flag'], parentNode: carMove});

        this.onMoveBtnPress(startBtn, data.id, carStatus.started, carIcon);
        this.onMoveBtnPress(restartBtn, data.id, carStatus.stopped, carIcon);

        return car;
    }

    private onEditBtnPress(carModel: HTMLElement, carEditor: HTMLFormElement): void {
        carModel.addEventListener('click', e => {
            carModel.classList.add('hidden');
            carEditor.classList.remove('hidden');
        });
        carEditor.addEventListener('submit', e => {
            e.preventDefault();
            carEditor.classList.add('hidden');
            carModel.classList.remove('hidden');
            sendFormData(e, carEditor, updateCar, '.car__edit .input', this.data.id);
        });
    }

    private onRemoveBtnPress(removeBtn: HTMLElement): void {
        removeBtn.addEventListener('click', e => {
            removeCarData('garage', this.data.id);
            removeCarData('winners', this.data.id);
            this.carElem.remove();
        });
    }

    private onMoveBtnPress(btn: HTMLElement, id: number, status: carStatus, carIcon: HTMLElement) {
        btn.addEventListener('click', async (e) => {
            if (status === carStatus.stopped) {
                carIcon.removeAttribute('style');
                carIcon.className = 'car__icon';
            } else {
                const time = await Car.getRaceTime(id);
                time && Car.race(id, carIcon, time);
            }
        });
    }

    static async race(id: number, carIcon: HTMLElement, time: number | undefined) {
        carIcon.classList.add('car__icon_animated');
        carIcon.setAttribute('style', `animation-duration: ${time}s`);

        const errorStatus = await fetchCarEngine({id, status: carStatus.drive});
        let stopTime: number;
        if (time) {
            stopTime = Math.ceil(Math.random() * (time / 2));
            if (errorStatus === 0) {
                setTimeout(() => {
                    carIcon.style.animationPlayState = 'paused';
                }, stopTime);
                return carStatus.stopped;
            }
        }
        return carStatus.drive;
    }

    static async getRaceTime(id: number) {
        return await fetchCarEngine({id, status: carStatus.started});
    }
}
