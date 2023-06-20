interface IItemParams {
    name: string;
    svg: string;
    styles: Array<string>;
    children: Array<Item>;
}

export class Item {
    name: string;
    svg: string;
    styles: Array<string>;
    children: Array<Item>;

    constructor(params: IItemParams) {
        this.name = params.name;
        this.svg = params.svg;
        this.styles = params.styles;
        this.children = params.children;
    }
}
