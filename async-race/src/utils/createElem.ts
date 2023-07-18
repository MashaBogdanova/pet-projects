interface IParams {
    htmlTag: string
    styles: Array<string>
    parentNode?: HTMLElement
    parentClass?: string
    innerText?: string
    type?: string
    placeholder?: string
}

export function createElem(params: IParams): HTMLElement {
    const elem = document.createElement(params.htmlTag);
    elem.classList.add(...params.styles);
    if(params.parentNode) {
        params.parentNode && params.parentNode.append(elem);
    }
    if(params.parentClass) {
        const parent = document.querySelector(params.parentClass);
        parent && parent.append(elem);
    }
    if(params.innerText) {
        elem.innerText = params.innerText;
    }
    if(params.type) {
        elem.setAttribute('type', params.type);
    }
    if(params.placeholder) {
        elem.setAttribute('placeholder', params.placeholder);
    }
    return elem;
}
