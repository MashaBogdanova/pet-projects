export interface ILevelParams {
    levelNumber: levelCountType;
    instruction: string;
    levelRules: instructionType;
    itemsSet: string;
    solution: Array<string>;
    html: {
        [key: string]: string;
    };
}
type instructionType = {
    title: string;
    subtitle: string;
    selector: string;
    text: string;
    exampleText: string;
}

export type levelCountType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
