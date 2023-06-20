import {ILevelParams} from "../types/types";

export const levelsData: Array<ILevelParams> = [
    {
        levelNumber: 0,
        levelHeader: 'Select the plates',
        instruction: {
            header: 'Type Selector',
            subheader: 'Select elements by their type',
            text: 'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
            exampleHeader: 'Examples',
            exampleText: 'div selects all <div> elements.'
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
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: 'div',
        html: '<div class="container"><plate /><plate /></div>'
    },
    {
        levelNumber: 1,
        levelHeader: 'Select the fancy plate',
        instruction: {
            header: 'ID Selector',
            subheader: 'Select elements with an ID',
            text: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
            exampleHeader: 'Examples',
            exampleText: '#cool selects any element with id="cool"'
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
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: '#fancy',
        html: '<div class="container"><plate id="fancy"/><plate /><plate /></div>'
    },
    {
        levelNumber: 2,
        levelHeader: 'Select the jelly on the plate',
        instruction: {
            header: 'Descendant Selector',
            subheader: 'Select an element inside another element',
            text: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
            exampleHeader: 'Examples',
            exampleText: '#fancy span selects any <span> elements that are inside of the element with id="fancy"'
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
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: 'plate apple',
        html: '<div class="container"><plate /><plate><jelly /></plate><jelly /></div>'
    }
]
