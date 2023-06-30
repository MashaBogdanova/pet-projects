interface IElementParam {
    tag: string;
    styles?: Array<string>;
    parent?: string;
    innerText?: string;
    innerHTML?: string;
    method?: string;
    attribute?: {
        key: string,
        value: string
    };
}

export function createElement(param: IElementParam) {
    const element: HTMLElement = document.createElement(param.tag);

    if(param.styles && param.styles.length !== 0) {
        element.classList.add(...param.styles);
    }
    if (param.parent) {
        const parentElem = document.querySelector(param.parent);
        if (parentElem) {
            param.method === 'prepend' ? parentElem.prepend(element) : parentElem.append(element);
        }
    }
    if (param.innerText) {
        element.innerText = param.innerText;
    }
    if (param.innerHTML) {
        element.innerHTML = param.innerHTML;
    }
    if (param.attribute) {
        element.setAttribute(param.attribute.key, param.attribute.value);
    }
    return element;
}
