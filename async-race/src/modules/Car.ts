import {createElem} from "../utils/createElem";
import {ICar} from "../types/dataTypes";
import {removeCarData} from "../api/removeCarData";
import {createCarForm} from "../utils/createCarForm";
import {sendFormData} from "../utils/sendFormData";
import {updateCar} from "../api/updateCar";
import {toggleCarEngine} from "../api/toggleCarEngine";

enum carStatus {
    started = 'started',
    stopped = 'stopped',
    drive = 'drive'
}

export class Car {
    data: ICar;
    carElem: HTMLElement;
    carStatus: carStatus;

    constructor(data: ICar) {
        this.data = data;
        this.carElem = this.render(this.data);
        this.carStatus = carStatus.stopped;
    }

    render(data: ICar): HTMLElement {
        const car = createElem({htmlTag: 'article', styles: ['car'], parentClass: '.garage__cars'});

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

        // todo: менять цвет svg
        const carIcon = createElem({htmlTag: 'div', styles: ['car__icon'], parentNode: carMoveWrapper});
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
            this.carStatus = status;
            // todo: какие тут величины времени?
            const time: number | undefined = await toggleCarEngine({id, status});
            if (time) {
                carIcon.classList.add('car__icon_animated');
                carIcon.style.transition = `transform ${Math.round(time / 1200)}s linear`;
            } else {
                carIcon.removeAttribute('style');
                carIcon.style.transform = 'translateX(0vw)';
                carIcon.style.transition = `transform 0s linear`;
                carIcon.className = 'car__icon';
                setTimeout(() => {
                    carIcon.removeAttribute('style');
                }, 1)
            }
        });
    }
}
