import './sass/style.scss';
import { ElementCreator } from './utils/element-creator';
import { Game } from "./modules/game";
import { Level } from "./modules/level";

const levels: Array<Level> = [
    {
        levelNumber: 0,
        levelHeader: 'Select the plates',
        instruction: {
            header: 'Type Selector',
            subheader: 'Select elements by their type',
            text: 'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
            exampleHeader: 'Examples',
            exampleText: 'div selects all div elements.'
        },
        itemsSet: 'asf',
        itemsStyle: ['asdf'],
        levelHint: {
            header: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to. \n' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style. \n' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table. \n' +
                'If you get it right, you\'ll advance to the next level. \n' +
                'Hover over the items on the table to see their HTML markup.',
            solution: 'p {\n' + '   margin-bottom: 12px;\n' + '}'
        }
    }
]

function init(): void {
    new ElementCreator({ tag: 'header', styles: ['header'], parent: '.body' });
    new ElementCreator({
        tag: 'h1',
        styles: ['header__title'],
        parent: '.header',
        innerText: 'Welcome to RSS CSS Selectors!'
    });
    new ElementCreator({tag: 'main', styles: ['main'], parent: '.body'});
    new ElementCreator({
        tag: 'h2',
        styles: ['instruction'],
        parent: '.main',
        innerText: 'Hi! Replace me with normal instruction!'
    });
    new ElementCreator({tag: 'section', styles: ['board'], parent: '.main'});
    new ElementCreator({tag: 'section', styles: ['editor-wrapper'], parent: '.main'});
    new ElementCreator({tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper'});
    new ElementCreator({tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper'});
    new ElementCreator({tag: 'nav', styles: ['nav', 'rules'], parent: '.body'});
    new ElementCreator({tag: 'nav', styles: ['nav', 'levels', 'hidden'], parent: '.body'});
    new ElementCreator({tag: 'footer', styles: ['footer'], parent: '.body'});

    new Game(levels, 0);
}

init();

