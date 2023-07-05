import { editorParamsType, ILevelParams } from '../types/types';
import { createElement } from '../utils/create-element';
import { init } from '../index';

export class Level {
    levelNumber: ILevelParams['levelNumber'];
    instruction: ILevelParams['instruction'];
    levelRules: ILevelParams['levelRules'];
    itemsSet: ILevelParams['itemsSet'];
    solution: ILevelParams['solution'];
    html: ILevelParams['html'];
    increaseLevel: () => void;
    decreaseLevel: () => void;
    isLevelChecked: boolean;
    isHintUsed: boolean;

    constructor(params: ILevelParams, increaseLevel: () => void, decreaseLevel: () => void) {
        this.levelNumber = params.levelNumber;
        this.instruction = params.instruction;
        this.levelRules = params.levelRules;
        this.itemsSet = params.itemsSet;
        this.solution = params.solution;
        this.html = params.html;
        this.increaseLevel = increaseLevel;
        this.decreaseLevel = decreaseLevel;
        this.isLevelChecked = false;
        this.isHintUsed = false;
    }

    render() {
        createElement({ tag: 'main', styles: ['main'], parent: '.body' });

        // Instruction
        createElement({
            tag: 'h2',
            styles: ['instruction'],
            parent: '.main',
            innerText: `${this.instruction}`
        });

        //Board
        const board: HTMLElement = createElement({
            tag: 'section',
            styles: ['board'],
            parent: '.main',
            innerHTML: this.itemsSet
        });
        this.onBoardElemHover(board);

        // Editor
        createElement({ tag: 'section', styles: ['editor-wrapper'], parent: '.main' });

        // CSS Editor
        createElement({ tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper' });
        this.fillEditor({ parent: '.editor_css', headerText: 'CSS Editor', innerText: '{\n/* Styles would go here. */\n}', additionalStyle: 'editor__entry-field_css' });
        this.addHelpBtn();
        this.addAnswerForm();

        // HTML Editor
        createElement({ tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper' });
        const template = this.getHTMLTemplate();
        this.fillEditor({ parent: '.editor_html', headerText: 'HTML Viewer', innerHTML: `${template}` });

        // Nav
        createElement({ tag: 'nav', styles: ['nav'], parent: '.body' });

        // Nav Levels
        createElement({ tag: 'section', styles: ['levels'], parent: '.nav' });
        this.addArrow('<', this.decreaseLevel);
        this.addArrow('>', this.increaseLevel);
        createElement({
            tag: 'h2',
            styles: ['levels__header'],
            parent: '.levels',
            innerText: `Level ${this.levelNumber + 1} from 12`
        });
        this.addCheck();

        // Nav Rules
        createElement({ tag: 'section', styles: ['rules'], parent: '.nav' });
        createElement({ tag: 'h3', styles: ['rules__title'], parent: '.rules', innerText: `${this.levelRules.title}` });
        createElement({
            tag: 'h4',
            styles: ['rules__subtitle'],
            parent: '.rules',
            innerText: `${this.levelRules.subtitle}`
        });
        createElement({
            tag: 'plaintext',
            styles: ['rules__selector'],
            parent: '.rules',
            innerText: `${this.levelRules.selector}`
        });
        createElement({ tag: 'p', styles: ['rules__text'], parent: '.rules', innerText: `${this.levelRules.text}` });
        createElement({ tag: 'h4', styles: ['rules__example-title'], parent: '.rules', innerText: 'Examples' });
        createElement({
            tag: 'p',
            styles: ['rules__example'],
            parent: '.rules',
            innerText: `${this.levelRules.exampleText}`
        });

        // Nav reset button
        this.addResetBtn();
    }

    private onBoardElemHover(board: HTMLElement): void {
        let popup: HTMLElement;
        let elemId: string | null;

        board.addEventListener('mouseover', (e: Event) => {
            const targetElem = this.setTargetElem(e);
            if (targetElem) {

                // Add hover animation to board element
                targetElem.classList.add('hovered');
                setTimeout(() => {
                    targetElem.classList.remove('hovered');
                }, 450);

                elemId = targetElem.getAttribute('id');
                if (elemId) {
                    // Create and show popup
                    popup = createElement({ tag: 'div', styles: ['popup'], innerHTML: `${this.html[elemId]}` });
                    targetElem.append(popup);

                    // Remove class property in popup children elements
                    const children: NodeListOf<Element> = popup.querySelectorAll('*');
                    children.forEach(child => child.className = '');

                    // Highlight tags in editor
                    const editorHTMLTags = document.querySelectorAll<HTMLElement>(`.elem-${elemId}`);
                    Array.from(editorHTMLTags).forEach(tag => tag.classList.add('editor_highlight'));

                }
            }
        });

        board.addEventListener('mouseout', (e: Event) => {
            if (this.setTargetElem(e)) {
                popup.remove();
                const editorHTMLTags = document.querySelectorAll<HTMLElement>(`.elem-${elemId}`);
                Array.from(editorHTMLTags).forEach(tag => tag.classList.remove('editor_highlight'));
            }
        });
    }

    private setTargetElem(e: Event): HTMLElement | undefined {
        const targetElem = e.target as HTMLElement;
        if (!targetElem.classList.contains('board')) {
            return targetElem
        }
    }

    private addAnswerForm(): void {
        const form: HTMLElement = createElement({
            tag: 'form',
            styles: ['answer-form'],
            parent: '.editor__entry-field_css',
            method: 'prepend'
        });
        const input = createElement({
            tag: 'input',
            styles: ['answer-form__input'],
            parent: '.answer-form',
            attribute: {
                key: 'placeholder',
                value: 'Type in a CSS selector'
            }
        }) as HTMLInputElement;
        const button: HTMLElement = createElement({
            tag: 'button',
            styles: ['answer-form__btn'],
            parent: '.answer-form',
            innerText: 'Enter',
            attribute: {
                key: 'type',
                value: 'submit'
            }
        });

        form.addEventListener('submit', (e: Event) => this.checkAnswer(e, input));
        button.addEventListener('click', (e: Event) => this.checkAnswer(e, input));
    }

    private checkAnswer(e: Event, input: HTMLInputElement): void {
        e.preventDefault();
        const usersAnswer: string = input.value.trim().toLowerCase();
        if (this.solution.includes(usersAnswer)) {
            if (this.levelNumber === 11) {
                this.showWinModal();
            }

            const check: HTMLElement | null = document.querySelector('.levels__check');
            if (!this.isHintUsed) {
                localStorage.setItem(`level ${this.levelNumber}`, 'true');
                check && check.classList.add('levels__check_done');
            }

            const targetElements: NodeListOf<HTMLElement> = document.querySelectorAll('.target');
            for (const elem of targetElements) {
                elem.classList.add('target_fly-up');
            }
            setTimeout(() => {
                this.increaseLevel();
                input.value = '';
            }, 1000)
        } else {
            const editorWrapper: HTMLElement | null = document.querySelector('.editor-wrapper');
            editorWrapper && editorWrapper.classList.add('editor-wrapper_shake');
            setTimeout(() => {
                editorWrapper && editorWrapper.classList.remove('editor-wrapper_shake');
            }, 500);
        }
    }

    private addHelpBtn(): void {
        const helpBtn: HTMLElement = createElement({
            tag: 'button',
            styles: ['editor__help-btn'],
            parent: '.editor_css .editor__header',
            innerText: 'Help!'
        });
        helpBtn.addEventListener('click', () => {
            this.isHintUsed = true;
            const answerInput: HTMLInputElement | null = document.querySelector('.answer-form__input');
            const rightAnswer: string = this.solution[0];
            if (answerInput) {
                answerInput.value = '';
                let index = 0;
                const delay = 100;
                const typeText = () => {
                    if (index < rightAnswer.length) {
                        answerInput.value += rightAnswer.charAt(index);
                        index += 1;
                        setTimeout(typeText, delay);
                    }
                }
                typeText();
            }
        });
    }

    private fillEditor(params: editorParamsType): void {
        const asideText = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20';
        createElement({ tag: 'h3', styles: ['editor__header'], parent: params.parent, innerText: params.headerText });
        createElement({ tag: 'plaintext', styles: ['editor__aside'], parent: params.parent, innerText: asideText });
        const editor: HTMLElement = createElement({
            tag: 'div',
            styles: ['editor__entry-field', `${params.additionalStyle}`],
            parent: params.parent,
            innerHTML: params.innerHTML,
            innerText: params.innerText
        });
        this.onTagElemHover(editor);
    }

    private onTagElemHover(editor: HTMLElement): void {
        let targetElem: HTMLElement;
        let boardElem: HTMLElement | null;
        editor.addEventListener('mouseover', (e: MouseEvent) => {
            targetElem = e.target as HTMLElement;
            if (!targetElem.classList.contains('editor__entry-field') && !targetElem.classList.contains('answer-form__input')) {
                targetElem.classList.add('elem');
                const boardElemId: string = targetElem.classList[0][targetElem.classList[0].length - 1];
                boardElem = document.getElementById(`${boardElemId}`);
                boardElem && boardElem.classList.add('hovered');
            }
        });
        editor.addEventListener('mouseout', () => {
            if (!targetElem.classList.contains('editor__entry-field')) {
                targetElem.classList.remove('elem');
                boardElem && boardElem.classList.remove('hovered');
            }
        });
    }

    private getHTMLTemplate(): string {
        let template = '';
        Object.keys(this.html).map(key => template += this.html[key]);
        return template;
    }

    private addArrow(innerText: '<' | '>', callback: () => void): void {
        const arrow: HTMLElement = createElement({
            tag: 'button',
            styles: ['levels__arrow'],
            parent: '.levels',
            innerText: innerText
        });
        arrow.addEventListener('click', () => callback());
    }

    private addCheck(): void {
        if (localStorage.getItem(`level ${this.levelNumber}`) === 'true') {
            createElement({ tag: 'div', styles: ['levels__check', 'levels__check_done'], parent: '.levels' });
        } else {
            createElement({ tag: 'div', styles: ['levels__check'], parent: '.levels' });
        }
    }

    private addResetBtn(): void {
        const resetBtn: HTMLElement = createElement({
            tag: 'button',
            styles: ['rules__reset'],
            parent: '.rules',
            innerText: 'Reset results'
        });
        resetBtn.addEventListener('click', () => {
            localStorage.clear();
            const header: HTMLElement | null = document.querySelector('.header');
            header && header.remove();
            const footer: HTMLElement | null = document.querySelector('.footer');
            footer && footer.remove();
            init();
        })
    }

    private showWinModal(): void {
        createElement({ tag: 'div', styles: ['modal-overlay'], parent: '.body' });
        createElement({ tag: 'div', styles: ['modal-window'], parent: '.modal-overlay' });
        createElement({
            tag: 'h2',
            styles: ['modal-window__title'],
            parent: '.modal-window',
            innerText: 'Congratulations!\nYou completed all levels!'
        });
        createElement({ tag: 'div', styles: ['modal-window__cake'], parent: '.modal-window' });
    }
}
