import {createElem} from "../utils/createElem";
import {Garage} from "./Garage";
import {Winners} from "./Winners";

export class Main {
    garagePage: any;
    winnersPage: any
    constructor() {
        this.garagePage = null;
        this.winnersPage = null;
        this.render();
    }
    private render() {
        const body: HTMLElement = document.getElementsByTagName('body')[0];
        body.classList.add('body');

        const garageBtn: HTMLElement = createElem({htmlTag: 'button', styles: ['button', 'button_primary'], parentNode: body, innerText: 'Garage'});
        this.renderGarage(garageBtn);

        const winnersBtn: HTMLElement = createElem({htmlTag: 'button', styles: ['button', 'button_primary'], parentNode: body, innerText: 'Winners'});
        this.renderWinners(winnersBtn);
    }
    private renderGarage(btn: HTMLElement) {
        btn.addEventListener('click', () => {
            // this.winnersPage && this.winnersPage.remove();
            this.garagePage = new Garage();
        });
    }
    private renderWinners(btn: HTMLElement) {
        btn.addEventListener('click', () => {
            // this.garagePage && this.garagePage.remove();
            this.winnersPage = new Winners();
        });
    }
}
