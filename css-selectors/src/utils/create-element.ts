interface IElementParam {
    tag: string;
    styles: Array<string>;
    parent?: string;
    innerText?: string;
}

export function createElement(param: IElementParam) {
    const element = document.createElement(param.tag);
    element!.classList.add(...param.styles);
    if (param.innerText) {
        element!.innerText = param.innerText;
    }
    if (param.parent) {
        const parentElem = document.querySelector(param.parent);
        parentElem && parentElem.append(element);
    }
    return element;
}
