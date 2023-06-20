import './sass/style.scss';
import {ILevelParams, levelCountType} from "./types/types";
import {Level} from "./modules/level";

const levelsData: Array<ILevelParams> = [
    {
        levelNumber: 0,
        levelHeader: 'Select the plates',
        instruction: {
            header: 'Type Selector',
            subheader: 'Select elements by their type',
            text: 'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
            exampleHeader: 'Examples',
            exampleText: 'div selects all div elements.'
        },
        itemsSet: [
            {
                name: '',
                svg: '',
                styles: [''],
                children: []
            }
        ],
        itemsStyle: ['asdf'],
        levelHint: {
            header: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.',
            solution: 'p { margin-bottom: 12px; }'
        }
    }
]

function init(): void {
    let currentLevel: levelCountType = 0;
    const params: ILevelParams = levelsData[currentLevel];
    new Level(params, increaseLevel, decreaseLevel);

    function increaseLevel(): void {
        currentLevel += 1;
    }
    function decreaseLevel(): void {
        currentLevel -= 1;
    }
}

init();

