import {Item} from './item';

interface ILevelParams {
    instruction: string;
    itemsSet: string;
    itemsStyle: Array<Item>;
}

export class Level {
    instruction: string;
    itemsSet: string;
    itemsStyle: Array<Item>;
    constructor(params: ILevelParams) {
        this.instruction = params.instruction;
        this.itemsSet = params.itemsSet;
        this.itemsStyle = params.itemsStyle;
    }
}
