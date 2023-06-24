import { ILevelParams } from '../types/types';
import { createElement } from '../utils/create-element';

export class Level {
    levelNumber: ILevelParams['levelNumber'];
    instruction: ILevelParams['instruction'];
    levelRules: ILevelParams['levelRules'];
    itemsSet: ILevelParams['itemsSet'];
    levelHint: ILevelParams['levelHint'];
    solution: ILevelParams['solution'];
    html: ILevelParams['html'];
    increaseLevel: () => void;
    decreaseLevel: () => void;

    constructor(params: ILevelParams, increaseLevel: () => void, decreaseLevel: () => void) {
        this.levelNumber = params.levelNumber;
        this.instruction = params.instruction;
        this.levelRules = params.levelRules;
        this.itemsSet = params.itemsSet;
        this.levelHint = params.levelHint;
        this.solution = params.solution;
        this.html = params.html;
        this.increaseLevel = increaseLevel;
        this.decreaseLevel = decreaseLevel;
    }

    rerender() {
        createElement({ tag: 'main', styles: ['main'], parent: '.body' });
        // Instruction
        createElement({
            tag: 'h2',
            styles: ['instruction'],
            parent: '.main',
            innerText: `${this.instruction}`
        });

        //Board
        const board = createElement({ tag: 'section', styles: ['board'], parent: '.main' });
        board.innerHTML = this.itemsSet;

        // Editor
        createElement({ tag: 'section', styles: ['editor-wrapper'], parent: '.main' });

        // CSS Editor
        createElement({ tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper' });
        this.fillEditor('.editor_css', 'CSS Editor', '\n{\n/* Styles would go here. */\n}', 'editor__entry-field_css');
        this.addAnswerForm();

        // HTML Editor
        createElement({ tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper' });
        this.fillEditor('.editor_html', 'HTML Viewer', `${this.html}`);

        // Nav
        createElement({ tag: 'nav', styles: ['nav'], parent: '.body' });

        // Nav Levels
        createElement({ tag: 'section', styles: ['levels'], parent: '.nav' });

        const arrowLeft = createElement({ tag: 'button', styles: ['levels__arrow'], parent: '.levels', innerText: '<' });
        arrowLeft && arrowLeft.addEventListener('click', () => this.decreaseLevel());

        const arrowRight = createElement({ tag: 'button', styles: ['levels__arrow'], parent: '.levels', innerText: '>' });
        arrowRight && arrowRight.addEventListener('click', () => this.increaseLevel());

        createElement({
            tag: 'h2',
            styles: ['levels__header'],
            parent: '.levels',
            innerText: `Level ${this.levelNumber + 1} from 10`
        });

        // Nav Rules
        createElement({ tag: 'section', styles: ['rules'], parent: '.nav' });
        createElement({ tag: 'h3', styles: ['rules__title'], parent: '.rules', innerText: `${this.levelRules.title}` });
        createElement({ tag: 'h4', styles: ['rules__subtitle'], parent: '.rules', innerText: `${this.levelRules.subtitle}` });
        createElement({ tag: 'plaintext', styles: ['rules__selector'], parent: '.rules', innerText: `${this.levelRules.selector}` });
        createElement({ tag: 'p', styles: ['rules__text'], parent: '.rules', innerText: `${this.levelRules.text}` });
        createElement({ tag: 'h4', styles: ['rules__example-title'], parent: '.rules', innerText: 'Examples' });
        createElement({ tag: 'p', styles: ['rules__example'], parent: '.rules', innerText: `${this.levelRules.exampleText}` });
    }
    private fillEditor(parent: string, headerText: string, entryFieldText: string, additionalStyle?: string): void {
        const asideText = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20';
        createElement({ tag: 'h3', styles: ['editor__header'], parent: parent, innerText: headerText });
        createElement({ tag: 'plaintext', styles: ['editor__aside'], parent: parent, innerText: asideText });
        createElement({ tag: 'plaintext', styles: ['editor__entry-field', `${additionalStyle}`], parent: parent, innerText: entryFieldText });
    }
    private addAnswerForm() {
        const form = createElement({ tag: 'form', styles: ['answer-form'], parent: '.editor__entry-field_css', method: 'prepend' });
        const input = createElement({ tag: 'input', styles: ['answer-form__input'], parent: '.answer-form', placeholder: 'Type in a CSS selector', type: 'text' }) as  HTMLInputElement;
        const button = createElement({ tag: 'button', styles: ['answer-form__btn'], parent: '.answer-form', innerText: 'Enter', type: 'submit' });

        const handleSubmit = (e: Event) => {
            e.preventDefault();
            if (input.value.trim().toLowerCase() === this.solution) {
                this.increaseLevel();
                input.value = '';
            } else {
                const editorWrapper = document.querySelector('.editor-wrapper');
                editorWrapper && editorWrapper.classList.add('editor-wrapper_shake');
                setTimeout(() => {
                    editorWrapper && editorWrapper.classList.remove('editor-wrapper_shake');
                }, 500);
            }
        }

        form.addEventListener('submit', handleSubmit);
        button.addEventListener('click', handleSubmit);
    }
}
