interface IElementParam {
    tag: string;
    styles: Array<string>;
    parent: string;
    innerText?: string;
}

export class ElementCreator {
    elem: HTMLElement | null;
    constructor(param: IElementParam) {
        this.elem = null;
        this.createElem(param);
    }
    createElem(param: IElementParam): HTMLElement {
        this.elem = document.createElement(param.tag);
        this.elem!.classList.add(...param.styles);
        if(param.innerText) {
            this.elem!.innerText = param.innerText;
        }
        const parentElem = document.querySelector(param.parent);
        parentElem && parentElem.append(this.elem);
        return this.elem;
    }
}
