import {ILevelParams} from "../types/types";

export const levelsData: Array<ILevelParams> = [
    {
        levelNumber: 0,
        instruction: 'Select the plates',
        levelRules: {
            title: 'Type Selector',
            subtitle: 'Select elements by their type',
            text: 'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
            exampleText: 'div selects all <div> elements.'
        },
        itemsSet: '<div class="plate"></div><div class="plate"></div>',
        levelHint: {
            title: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.' +
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: 'plate',
        html: '<div class="container">\n  <plate />\n  <plate />\n</div>'
    },
    {
        levelNumber: 1,
        instruction: 'Select the fancy plate',
        levelRules: {
            title: 'ID Selector',
            subtitle: 'Select elements with an ID',
            text: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
            exampleText: '#cool selects any element with id="cool"'
        },
        itemsSet: '<div class="plate plate_fancy"></div><div class="plate"></div><div class="plate"></div>',
        levelHint: {
            title: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.' +
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: '#fancy',
        html: '<div class="container">\n  <plate id="fancy"/>\n  <plate />\n  <plate />\n</div>'
    },
    {
        levelNumber: 2,
        instruction: 'Select the cupcake on the plate',
        levelRules: {
            title: 'Descendant Selector',
            subtitle: 'Select an element inside another element',
            text: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
            exampleText: '#fancy span selects any <span> elements that are \inside of the element with id="fancy"'
        },
        itemsSet: '<div class="plate plate_fancy"></div><div class="plate"><div class="yummy yummy_top"></div></div><div class="yummy"></div>',
        levelHint: {
            title: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.' +
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: 'plate apple',
        html: '<div class="container">\n  <plate />\n  <plate>\n    <cupcake />\n  </plate>\n  <cupcake />\n</div>'
    },
    {
        levelNumber: 3,
        instruction: 'Select the small cakes',
        levelRules: {
            title: 'Class Selector',
            subtitle: 'Select elements by their class',
            text: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
            exampleText: '.neato selects all elements with class="neato"'
        },
        itemsSet: '<div class="yummy yummy_cake"></div><div class="yummy yummy_cake yummy_small"></div><div class="plate"><div class="yummy yummy_cake yummy_small yummy_top"></div></div><div class="plate"></div>',
        levelHint: {
            title: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.' +
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: '.small',
        html:
            '<div class="container">\n' +
            '  <cake />\n' +
            '  <cake class="small" />\n' +
            '  <plate>\n    <cake class="small" />\n  </plate>\n' +
            '  </plate>\n' +
            '</div>'},
    {
        levelNumber: 4,
        instruction: 'Select all desserts',
        levelRules: {
            title: 'Comma Combinator',
            subtitle: 'Combine, selectors, with... commas!',
            text: 'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
            exampleText: 'p, .fun selects all <p> elements as well as all elements with class="fun"'
        },
        itemsSet:
            '<div class="plate plate_fancy"></div>' +
            '<div class="yummy yummy_strawberry"></div>' +
            '<div class="plate"><div class="yummy yummy_cupcake yummy_top"></div></div>' +
            '<div class="plate plate_fancy"><div class="yummy yummy_cake yummy_top"></div></div>' +
            '<div class="plate"></div>',
        levelHint: {
            title: 'No worries, you\'ve got this!',
            text: 'You\'re about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.' +
                'p { margin-bottom: 12px; }' +
                'Here, the "p" is the selector (selects all <p> elements) and applies the margin-bottom style.' +
                'To play, type in a CSS selector in the editor below to select the correct items on the table.' +
                'If you get it right, you\'ll advance to the next level.' +
                'Hover over the items on the table to see their HTML markup.' +
                'Get help with selectors on the right! →'
        },
        solution: 'strawberry, cupcake, cake',
        html:
            '<div class="container">\n' +
            '  <plate class="fancy"/>\n' +
            '  <straeberry />\n' +
            '  <plate>\n    <cupcake />\n  </plate>\n' +
            '  <plate class="fancy">\n    <cake />\n  </plate>\n' +
            '  </plate>\n' +
            '</div>'
    }
]
