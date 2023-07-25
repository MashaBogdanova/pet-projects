import { ILevelParams, levelCountType } from '../types/types';
import { createElement } from '../utils/create-element';
import { levelsData } from '../data/data';
import { Level } from './level';
import '../sass/style.scss';

export class Game {
    currentLevel: levelCountType;

    constructor(currentLevel: levelCountType) {
        this.currentLevel = currentLevel;
        this.initialRender();
    }

    private initialRender(): void {
        // Header
        createElement({ tag: 'header', styles: ['header'], parent: '.body' });
        createElement({ tag: 'div', styles: ['header__logo-wrapper'], parent: '.header' });
        createElement({ tag: 'div', styles: ['header__logo'], parent: '.header__logo-wrapper' });
        createElement({
            tag: 'h1',
            styles: ['header__title'],
            parent: '.header__logo-wrapper',
            innerText: 'RSS CSS Selectors'
        });
        this.addBurgerMenu();

        // Main
        this.renderCurrentLevel();

        // Footer
        createElement({ tag: 'footer', styles: ['footer'], parent: '.body' });
        createElement({ tag: 'p', styles: ['footer__author'], parent: '.footer', innerText: 'Made by ' });
        createElement({ tag: 'a', styles: ['footer__link'], parent: '.footer', innerText: 'Masha Bogdanova', attribute: { key: 'href', value: 'https://github.com/rolling-scopes-school/mashabogdanova-JSFE2023Q1' } });
        createElement({ tag: 'p', styles: ['footer__author'], parent: '.footer', innerText: 'in' });
        createElement({ tag: 'a', styles: ['footer__link'], parent: 'footer', innerText: 'RSS School', attribute: { key: 'href', value: 'https://rs.school/' } });
    }

    private renderCurrentLevel(): void {
        const mainElement = document.querySelector('.main');
        mainElement && mainElement.remove();
        const navElement = document.querySelector('.nav');
        navElement && navElement.remove();

        const currentLevelParams: ILevelParams = levelsData[this.currentLevel];
        const level = new Level(currentLevelParams, this.increaseLevel, this.decreaseLevel);
        level.render();
    }

    private increaseLevel = (): void => {
        if (this.currentLevel < 11) {
            this.currentLevel += 1;
            localStorage.setItem('level', `${this.currentLevel}`);
        }
        this.renderCurrentLevel();
    }
    private decreaseLevel = (): void => {
        if (this.currentLevel > 0) {
            this.currentLevel -= 1;
            localStorage.setItem('level', `${this.currentLevel}`);
        }
        this.renderCurrentLevel();
    }
    private addBurgerMenu() {
        const burgerMenu = createElement({ tag: 'div', styles: ['burger-icon'], parent: '.header' });
        createElement({ tag: 'div', styles: ['burger-icon__line'], parent: '.burger-icon' });
        createElement({ tag: 'div', styles: ['burger-icon__line'], parent: '.burger-icon' });
        createElement({ tag: 'div', styles: ['burger-icon__line'], parent: '.burger-icon' });

        burgerMenu.addEventListener('click', () => {
            const nav = document.querySelector('.nav');
            nav && nav.classList.toggle('visible');
        })
    }
}
