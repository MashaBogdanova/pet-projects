import { createElem } from './createElem';

interface IParams {
    parent: HTMLElement
    formAdditionalStyle: string[]
}

export function createCarForm(params: IParams): HTMLFormElement {
    const form = createElem({
        htmlTag: 'form',
        styles: ['form', ...params.formAdditionalStyle],
        parentNode: params.parent
    }) as HTMLFormElement;
    createElem({
        htmlTag: 'input',
        styles: ['input'],
        parentNode: form,
        attribute: {
            name: 'placeholder',
            value: 'Write a car model'
        },
        inputName: 'name'
    });
    createElem({
        htmlTag: 'input',
        styles: ['input_color'],
        parentNode: form,
        attribute: {
            name: 'type',
            value: 'color'
        },
        inputName: 'color'
    });
    createElem({
        htmlTag: 'button',
        styles: ['button', 'button_secondary'],
        parentNode: form,
        attribute: {
            name: 'type',
            value: 'submit'
        },
        innerText: 'Save'
    });
    createElem({
        htmlTag: 'button',
        styles: ['button', 'button_secondary'],
        parentNode: form,
        attribute: {
            name: 'type',
            value: 'reset'
        },
        innerText: 'Reset'
    });
    return form;
}
