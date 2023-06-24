interface IElementParam {
    tag: string;
    styles: Array<string>;
    parent?: string;
    innerText?: string;
    placeholder?: string;
    type?: string;
    method?: string;
}

export function createElement(param: IElementParam) {
    const element: HTMLElement = document.createElement(param.tag);
    element.classList.add(...param.styles);
    if (param.innerText) {
        element.innerText = param.innerText;
    }
    if (param.parent) {
        const parentElem = document.querySelector(param.parent);
        if (parentElem) {
            param.method === 'prepend' ? parentElem.prepend(element) : parentElem.append(element);
        }
    }
    if (param.placeholder) {
        element.setAttribute('placeholder', param.placeholder);
    }
    if (param.type) {
        element.setAttribute('type', param.type);
    }
    return element;
}
