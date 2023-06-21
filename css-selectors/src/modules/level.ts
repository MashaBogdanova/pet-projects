import {ILevelParams} from '../types/types';
import {createElement} from '../utils/create-element';

export class Level {
    levelNumber: ILevelParams['levelNumber'];
    instruction: ILevelParams['instruction'];
    levelRules: ILevelParams['levelRules'];
    itemsSet: ILevelParams['itemsSet'];
    levelHint: ILevelParams['levelHint'];
    html: ILevelParams['html']

    constructor(params: ILevelParams) {
        this.levelNumber = params.levelNumber;
        this.instruction = params.instruction;
        this.levelRules = params.levelRules;
        this.itemsSet = params.itemsSet;
        this.levelHint = params.levelHint;
        this.html = params.html;
    }

    rerender(increaseLevel: () => void, decreaseLevel: () => void) {
        createElement({tag: 'main', styles: ['main'], parent: '.body'});
        // Instruction
        createElement({
            tag: 'h2',
            styles: ['instruction'],
            parent: '.main',
            innerText: `${this.instruction}`
        });

        //Board
        const board = createElement({tag: 'section', styles: ['board'], parent: '.main'});
        board.innerHTML = this.itemsSet;

        // Editor
        createElement({tag: 'section', styles: ['editor-wrapper'], parent: '.main'});
        createElement({tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper'});
        this.fillEditor('.editor_css', 'CSS Editor', '{\n/*Styles would go here.*/\n}')

        createElement({tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper'});
        this.fillEditor('.editor_html', 'HTML Viewer', `${this.html}`)

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
    private fillEditor(parent: string, headerText: string, entryFieldText: string): void {
        const asideText: string = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20';
        createElement({tag: 'h3', styles: ['editor__header'], parent: parent, innerText: headerText});
        createElement({tag: 'aside', styles: ['editor__aside'], parent: parent, innerText: asideText});
        createElement({tag: 'plaintext', styles: ['editor__entry-field'], parent: parent, innerText: entryFieldText});
    }
}
