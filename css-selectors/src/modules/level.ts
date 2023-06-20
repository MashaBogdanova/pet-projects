import {ILevelParams} from "../types/types";
import {createElement} from "../utils/create-element";

export class Level {
    levelNumber: ILevelParams["levelNumber"];
    levelHeader: ILevelParams["levelHeader"];
    instruction: ILevelParams["instruction"];
    itemsSet: ILevelParams["itemsSet"];
    itemsStyle: ILevelParams["itemsStyle"];
    levelHint: ILevelParams["levelHint"];
    increaseLevel: () => void;
    decreaseLevel: () => void;

    constructor(params: ILevelParams, increaseLevel: () => void, decreaseLevel: () => void) {
        this.levelNumber = params.levelNumber;
        this.levelHeader = params.levelHeader;
        this.instruction = params.instruction;
        this.itemsSet = params.itemsSet;
        this.itemsStyle = params.itemsStyle;
        this.levelHint = params.levelHint;
        this.increaseLevel = increaseLevel;
        this.decreaseLevel = decreaseLevel;
    }
    rerenderLevel() {
        debugger
        // Header
        createElement({tag: 'header', styles: ['header'], parent: '.body'});
        createElement({
            tag: 'h1',
            styles: ['header__title'],
            parent: '.header',
            innerText: 'Welcome to RSS CSS Selectors!'
        });

        // Main
        createElement({tag: 'main', styles: ['main'], parent: '.body'});
        createElement({
            tag: 'h2',
            styles: ['instruction'],
            parent: '.main',
            innerText: 'Hi! Replace me with normal instruction!'
        });
        createElement({tag: 'section', styles: ['board'], parent: '.main'});
        createElement({tag: 'section', styles: ['editor-wrapper'], parent: '.main'});
        createElement({tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper'});
        createElement({tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper'});

        // Nav
        createElement({tag: 'nav', styles: ['nav'], parent: '.body'});

        // Nav Levels
        createElement({tag: 'section', styles: ['levels'], parent: '.nav'});

        const arrowLeft =  createElement({tag: 'button', styles: ['levels__arrow'], parent: '.levels'});
        arrowLeft && arrowLeft.addEventListener('click', (e) => {
            this.increaseLevel();
            this.rerenderLevelHeader(this.levelNumber);
        })

        const arrowRight = createElement({
            tag: 'button',
            styles: ['levels__arrow', 'levels__arrow-right'],
            parent: '.levels'
        });
        arrowRight && arrowRight.addEventListener('click', (e) => {
            this.decreaseLevel();
            this.rerenderLevelHeader(this.levelNumber);
        })

        createElement({
            tag: 'h2',
            styles: ['levels__header'],
            parent: '.levels',
            innerText: `Level ${this.levelNumber + 1} from 10`
        });

        // Nav Rules
        createElement({tag: 'section', styles: ['rules'], parent: '.nav'});

        // Footer
        createElement({tag: 'footer', styles: ['footer'], parent: '.body'});

    }
    private rerenderLevelHeader(currentLevel: number): void {
        const prevHeader = document.querySelector('.levels__header');
        prevHeader && prevHeader.remove();
        createElement({
            tag: 'h2',
            styles: ['levels__header'],
            parent: '.levels',
            innerText: `Level ${currentLevel + 1} from 10`
        });
    }
}
