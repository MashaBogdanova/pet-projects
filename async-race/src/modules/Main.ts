import { createElem } from '../utils/createElem';
import { Garage } from './Garage';
import { Winners } from './Winners';

export class Main {
    garagePage: Garage | null;
    winnersPage: Winners | null;

    constructor() {
        this.garagePage = null;
        this.winnersPage = null;
        this.render();
    }

    private render() {
        const body: HTMLElement = document.getElementsByTagName('body')[0];
        body.classList.add('body');

        const nav = createElem({ htmlTag: 'nav', styles: ['nav'], parentNode: body });
        const garageBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: nav,
            innerText: 'Garage'
        });
        this.onGarageBtnPress(garageBtn);

        const winnersBtn: HTMLElement = createElem({
            htmlTag: 'button',
            styles: ['button', 'button_primary'],
            parentNode: nav,
            innerText: 'Winners'
        });
        this.onWinnersBtnPress(winnersBtn);

        this.renderGaragePage();
    }

    private onGarageBtnPress(garageBtn: HTMLElement) {
        garageBtn.addEventListener('click', () => {
            this.renderGaragePage();
        });
    }

    private onWinnersBtnPress(winnersBtn: HTMLElement) {
        winnersBtn.addEventListener('click', () => {
            this.renderWinnersPage();
        });
    }

    private renderGaragePage() {
        const garage = document.querySelector('.garage');
        if (!garage) {
            this.garagePage = new Garage();
        }
        this.removePage('.winners');
    }

    private renderWinnersPage() {
        if (!document.querySelector('.winners')) {
            this.winnersPage = new Winners();
            this.winnersPage.getData();
        }
        this.removePage('.garage');
    }

    private removePage(pageSelector: string): void {
        const pageToRemove = document.querySelector(pageSelector);
        pageToRemove && pageToRemove.remove();
    }
}
