import {createElem} from "../utils/createElem";
import {Garage} from "./Garage";
import {Winners} from "./Winners";

export class Main {
    garagePage: Garage | null;
    garagePageElem: HTMLElement | null;
    winnersPage: Winners | null;
    winnersPageElem: HTMLElement | null;

    constructor() {
        this.garagePage = null;
        this.garagePageElem = null;
        this.winnersPage = null;
        this.winnersPageElem = null;
        this.render();
    }

    private render() {
        const body: HTMLElement = document.getElementsByTagName('body')[0];
        body.classList.add('body');

        const garageBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: body,
            innerText: 'Garage'
        });
        const winnersBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: body,
            innerText: 'Winners'
        });
        this.renderGaragePage(body);
        this.addRenderPageListeners(garageBtn, winnersBtn);
    }

    private addRenderPageListeners(garageBtn: HTMLElement, winnersBtn: HTMLElement) {
        const body: HTMLElement | null = document.querySelector('.body');
        garageBtn.addEventListener('click', e => {
            this.renderGaragePage(body);
        });
        winnersBtn.addEventListener('click', e => {
            this.renderWinnersPage(body);
        });
    }

    private renderGaragePage(body: HTMLElement | null) {
        if (!document.querySelector('.garage')) {
            this.garagePage = new Garage();
            this.garagePageElem = this.garagePage.garageElem;
            body && body.append(this.garagePageElem as HTMLElement);
        }
        this.removePage('.winners');

    }

    private renderWinnersPage(body: HTMLElement | null) {
        if (!document.querySelector('.winners')) {
            this.winnersPage = new Winners();
            this.winnersPageElem = this.winnersPage.winnersElem;
            body && body.append(this.winnersPageElem as HTMLElement);
        }
        this.removePage('.garage');
    }

    private removePage(pageSelector: string): void {
        const pageToRemove = document.querySelector(pageSelector);
        pageToRemove && pageToRemove.remove();
    }
}
