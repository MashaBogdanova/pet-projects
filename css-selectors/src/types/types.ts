import {Item} from "../modules/item";

export type levelCountType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface ILevelParams {
    levelNumber: levelCountType;
    levelHeader: string;
    instruction: instructionType;
    itemsSet: Array<Item>;
    itemsStyle: Array<string>;
    levelHint: hintType;
}
type instructionType = {
    header: string;
    subheader: string;
    text: string;
    exampleHeader: string;
    exampleText: string;
};
type hintType = {
    header: string;
    text: string;
    solution: string;
}
