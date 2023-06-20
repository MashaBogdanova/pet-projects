import {ILevelParams} from "../types/types";
import {createElement} from "../utils/create-element";

export class Level {
    levelNumber: ILevelParams["levelNumber"];
    levelHeader: ILevelParams["levelHeader"];
    instruction: ILevelParams["instruction"];
    itemsSet: ILevelParams["itemsSet"];
    itemsStyle: ILevelParams["itemsStyle"];
    levelHint: ILevelParams["levelHint"];

    constructor(params: ILevelParams) {
        this.levelNumber = params.levelNumber;
        this.levelHeader = params.levelHeader;
        this.instruction = params.instruction;
        this.itemsSet = params.itemsSet;
        this.itemsStyle = params.itemsStyle;
        this.levelHint = params.levelHint;
    }

    rerender(increaseLevel: () => void, decreaseLevel: () => void) {
        createElement({tag: 'main', styles: ['main'], parent: '.body'});
        // Instruction
        createElement({
            tag: 'h2',
            styles: ['instruction'],
            parent: '.main',
            innerText: 'Hi! Replace me with normal instruction!'
        });

        //Board
        createElement({tag: 'section', styles: ['board'], parent: '.main'});

        // Editor
        createElement({tag: 'section', styles: ['editor-wrapper'], parent: '.main'});
        createElement({tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper'});
        createElement({tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper'});

        // Nav
        createElement({tag: 'nav', styles: ['nav'], parent: '.body'});

        // Nav Levels
        createElement({tag: 'section', styles: ['levels'], parent: '.nav'});

        const arrowLeft = createElement({tag: 'button', styles: ['levels__arrow'], parent: '.levels', innerText: '<'});
        arrowLeft && arrowLeft.addEventListener('click', (e) => decreaseLevel());

        const arrowRight = createElement({tag: 'button', styles: ['levels__arrow'], parent: '.levels', innerText: '>'});
        arrowRight && arrowRight.addEventListener('click', (e) => increaseLevel());

        createElement({
            tag: 'h2',
            styles: ['levels__header'],
            parent: '.levels',
            innerText: `Level ${this.levelNumber + 1} from 10`
        });

        // Nav Rules
        createElement({tag: 'section', styles: ['rules'], parent: '.nav'});
    }
}
