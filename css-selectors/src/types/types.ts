//Level
export interface ILevelParams {
    levelNumber: levelCountType;
    levelHeader: string;
    instruction: instructionType;
    itemsSet: Array<IItemParams>;
    itemsStyle: Array<string>;
    levelHint: hintType;
    solution: string;
    html: string;
}
type instructionType = {
    header: string;
    subheader: string;
    text: string;
    exampleHeader: string;
    exampleText: string;
}
type hintType = {
    header: string;
    text: string;
}
export type levelCountType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Item
export interface IItemParams {
    name: string;
    svg: string;
    styles: Array<string>;
    children: Array<IItemParams>;
}
