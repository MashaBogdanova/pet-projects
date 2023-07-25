import { createElement } from '../utils/create-element';

describe('createElement', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('should create an element with the specified tag', () => {
        const elem = createElement({ tag: 'div' });
        expect(elem.tagName).toBe('DIV');
    });

    test('should create element without adding any styles', () => {
        const elem = createElement({ tag: 'div' });
        expect(elem.classList.length).toBe(0);
    });

    test('should add styles to the element', () => {
        const elem = createElement({ tag: 'div', styles: ['first', 'second'] });
        expect(elem.classList.contains('first')).toBe(true);
        expect(elem.classList.contains('second')).toBe(true);
    });

    test('should append element to parent if method is not provided', () => {
        document.body.innerHTML = '<div id="parent"><div id="child"></div></div>';
        const parentElem: HTMLElement | null = document.querySelector('#parent');
        const elem: HTMLElement = createElement({ tag: 'div', parent: '#parent' });
        if (parentElem) {
            expect(parentElem.children.length).toBe(2);
            expect(parentElem.lastChild).toBe(elem);
        }
    });

    test('should prepend element to parent if method is "prepend"', () => {
        document.body.innerHTML = '<div id="parent"><div id="child"></div></div>';
        const parentElem: HTMLElement | null = document.querySelector('#parent');
        const elem: HTMLElement = createElement({ tag: 'div', parent: '#parent', method: 'prepend' });
        if (parentElem) {
            expect(parentElem.children.length).toBe(2);
            expect(parentElem.firstChild).toBe(elem);
        }
    });

    test('should set innerText', () => {
        const elem = createElement({ tag: 'div', innerText: 'innerText' });
        expect(elem.innerText).toBe('innerText');
    });

    test('should set innerHTML', () => {
        const elem = createElement({ tag: 'div', innerHTML: '<span>innerHTML</span>' });
        expect(elem.innerHTML).toBe('<span>innerHTML</span>');
    });

    test('should set attribute', () => {
        const elem = createElement({ tag: 'div', attribute: { key: 'placeholder', value: 'Hello!' } });
        expect(elem.getAttribute('placeholder')).toBe('Hello!');
    });
});
