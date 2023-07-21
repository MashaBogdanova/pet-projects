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
        this.onGarageBtnPress(garageBtn);

        const winnersBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: body,
            innerText: 'Winners'
        });
        this.onWinnersBtnPress(winnersBtn);

        this.renderGaragePage();
    }
    private onGarageBtnPress(garageBtn: HTMLElement) {
        garageBtn.addEventListener('click', e => {
            this.renderGaragePage();
        });
    }
    private onWinnersBtnPress(winnersBtn: HTMLElement) {
        winnersBtn.addEventListener('click', e => {
            this.renderWinnersPage();
        });
    }
    private renderGaragePage() {
        const garage = document.querySelector('.garage');
        if (!garage) {
            this.garagePage = new Garage();
            this.garagePageElem = this.garagePage.garageElem;
        }
        this.removePage('.winners');
    }
    private renderWinnersPage() {
        if (!document.querySelector('.winners')) {
            this.winnersPage = new Winners();
            this.winnersPageElem = this.winnersPage.winnersElem;
        }
        this.removePage('.garage');
    }
    private removePage(pageSelector: string): void {
        const pageToRemove = document.querySelector(pageSelector);
        pageToRemove && pageToRemove.remove();
    }
}
