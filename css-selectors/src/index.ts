import './sass/style.scss';
import {ILevelParams, levelCountType} from "./types/types";
import {Level} from "./modules/level";
import {levelsData} from "./data/data";
import {createElement} from "./utils/create-element";

class Game {
    currentLevel: levelCountType;

    constructor() {
        this.currentLevel = 0;
        this.initialRender();
    }

    private initialRender(): void {
        // Header
        createElement({tag: 'header', styles: ['header'], parent: '.body'});
        createElement({
            tag: 'h1',
            styles: ['header__title'],
            parent: '.header',
            innerText: 'Welcome to RSS CSS Selectors!'
        });

        this.renderCurrentLevel();

        // Footer
        createElement({tag: 'footer', styles: ['footer'], parent: '.body'});
        createElement({tag: 'p', styles: ['footer__author'], parent: '.footer', innerText: 'Made by Masha Bogdanova\nRSS School'})
    }

    private renderCurrentLevel(): void {
        const mainElement = document.querySelector('.main');
        mainElement && mainElement.remove();
        const navElement = document.querySelector('.nav');
        navElement && navElement.remove();

        const currentLevelParams: ILevelParams = levelsData[this.currentLevel];
        const level = new Level(currentLevelParams, this.increaseLevel, this.decreaseLevel);
        level.rerender();
    }

    increaseLevel = (): void => {
        if (this.currentLevel < 9) {
            this.currentLevel += 1;
        }
        this.renderCurrentLevel();
    }
    decreaseLevel = (): void => {
        if (this.currentLevel > 0) {
            this.currentLevel -= 1;
        }
        this.renderCurrentLevel();
    }
}

const game = new Game;

