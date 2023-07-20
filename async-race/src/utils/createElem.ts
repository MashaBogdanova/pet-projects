interface IParams {
    htmlTag: string
    styles: Array<string>
    parentNode?: HTMLElement
    parentClass?: string
    innerText?: string
    innerHTML?: string
    attribute?: { [key: string]: string }
    inputName?: string
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
    if(params.innerHTML) {
        elem.innerHTML = params.innerHTML;
    }
    if(params.attribute) {
        elem.setAttribute(params.attribute.name, params.attribute.value);
    }
    if(params.inputName) {
        elem.setAttribute('name', params.inputName);
    }
    return elem;
}
