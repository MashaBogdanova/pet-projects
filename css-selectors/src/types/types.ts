//Level
export interface ILevelParams {
    levelNumber: levelCountType;
    instruction: string;
    levelRules: instructionType;
    itemsSet: string;
    levelHint: hintType;
    solution: string;
    html: string;
}
type instructionType = {
    title: string;
    subtitle: string;
    text: string;
    exampleText: string;
}
type hintType = {
    header: string;
    text: string;
}
export type levelCountType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
