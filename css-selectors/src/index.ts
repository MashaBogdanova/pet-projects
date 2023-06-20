import './sass/style.scss';
import {ElementCreator} from './utils/element-creator';

function init(): void {
    new ElementCreator({tag: 'header', styles: ['header'], parent: '.body'});
    new ElementCreator({tag: 'h1', styles: ['header__title'], parent: '.header', innerText: 'Welcome to RSS CSS Selectors!'});
    new ElementCreator({tag: 'main', styles: ['main'], parent: '.body'});
    new ElementCreator({tag: 'h2', styles: ['instruction'], parent: '.main', innerText: 'Hi! Replace me with normal instruction!'});
    new ElementCreator({tag: 'section', styles: ['board'], parent: '.main'});
    new ElementCreator({tag: 'section', styles: ['editor-wrapper'], parent: '.main'});
    new ElementCreator({tag: 'article', styles: ['editor', 'editor_css'], parent: '.editor-wrapper'});
    new ElementCreator({tag: 'article', styles: ['editor', 'editor_html'], parent: '.editor-wrapper'});
    new ElementCreator({tag: 'nav', styles: ['nav', 'rules'], parent: '.body'});
    new ElementCreator({tag: 'nav', styles: ['nav', 'levels', 'hidden'], parent: '.body'});
    new ElementCreator({tag: 'footer', styles: ['footer'], parent: '.body'});
}

init();
