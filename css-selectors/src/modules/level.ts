export interface ILevelParams {
    levelNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    levelHeader: string;
    instruction: instructionType;
    itemsSet: string;
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

export class Level {
    levelNumber: ILevelParams["levelNumber"];
    levelHeader: ILevelParams["levelHeader"];
    instruction: instructionType;
    itemsSet: ILevelParams["itemsSet"];
    itemsStyle: ILevelParams["itemsStyle"];
    levelHint: ILevelParams["levelHint"];

    constructor(params: ILevelParams) {
        this.levelNumber = params.levelNumber;
        this.levelHeader = params.levelHeader;
        this.instruction = params.instruction;
        this.itemsSet = params.itemsSet;
        this.itemsStyle = params.itemsStyle;
        this.levelHint = params.levelHint;
    }
}
