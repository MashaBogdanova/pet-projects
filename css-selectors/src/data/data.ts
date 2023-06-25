import { ILevelParams } from '../types/types';

export const levelsData: Array<ILevelParams> = [
    {
        levelNumber: 0,
        instruction: 'Select the donuts',
        levelRules: {
            title: 'Type Selector',
            subtitle: 'Select elements by their type',
            selector: 'A',
            text: 'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
            exampleText: 'div selects all <div> elements.'
        },
        itemsSet:
            '<div class="yummy yummy_donut target"></div>' +
            '<div class="yummy yummy_donut target"></div>',

        solution: 'donut',
        html: '<div class="container">\n  <donut />\n  <donut />\n</div>'
    },
    {
        levelNumber: 1,
        instruction: 'Select the pink plate',
        levelRules: {
            title: 'ID Selector',
            subtitle: 'Select elements with an ID',
            selector: '#id',
            text: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
            exampleText: '#cool selects any element with id="cool"'
        },
        itemsSet:
            '<div class="plate plate_pink target"></div>' +
            '<div class="plate"></div>' +
            '<div class="plate"></div>',
        solution: '#pink',
        html: '<div class="container">\n  <plate id="pink"/>\n  <plate />\n  <plate />\n</div>'
    },
    {
        levelNumber: 2,
        instruction: 'Select the cupcake on the plate',
        levelRules: {
            title: 'Descendant Selector',
            subtitle: 'Select an element inside another element',
            selector: 'A  B',
            text: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
            exampleText: '#pink span selects any <span> elements that are inside the element with id="pink"'
        },
        itemsSet:
            '<div class="plate plate_pink"></div>' +
            '<div class="plate"><div class="yummy yummy_top target"></div></div>' +
            '<div class="yummy"></div>',
        solution: 'plate cupcake',
        html: '<div class="container">\n  <plate />\n  <plate>\n    <cupcake />\n  </plate>\n  <cupcake />\n</div>'
    },
    {
        levelNumber: 3,
        instruction: 'Select the small cakes',
        levelRules: {
            title: 'Class Selector',
            subtitle: 'Select elements by their class',
            selector: '.classname',
            text: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
            exampleText: '.neato selects all elements with class="neato"'
        },
        itemsSet:
            '<div class="yummy yummy_cake"></div>' +
            '<div class="yummy yummy_cake yummy_small target"></div>' +
            '<div class="plate plate_pink"><div class="yummy yummy_cake yummy_small yummy_top target"></div></div>' +
            '<div class="plate plate_pink"></div>',
        solution: '.small',
        html:
            '<div class="container">\n' +
            '  <cake />\n' +
            '  <cake class="small" />\n' +
            '  <plate>\n    <cake class="small" />\n  </plate>\n' +
            '  <plate />\n' +
            '</div>' },
    {
        levelNumber: 4,
        instruction: 'Select all desserts',
        levelRules: {
            title: 'Comma Combinator',
            subtitle: 'Combine, selectors, with... commas!',
            selector: 'A, B',
            text: 'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
            exampleText: 'p, .fun selects all <p> elements as well as all elements with class="fun"'
        },
        itemsSet:
            '<div class="plate plate_pink"></div>' +
            '<div class="yummy yummy_donut target"></div>' +
            '<div class="plate"><div class="yummy yummy_cupcake yummy_top target"></div></div>' +
            '<div class="plate plate_pink"><div class="yummy yummy_cake yummy_top target"></div></div>' +
            '<div class="plate"></div>',
        solution: 'strawberry, cupcake, cake',
        html:
            '<div class="container">\n' +
            '  <plate />\n' +
            '  <donut />\n' +
            '  <plate>\n    <cupcake />\n  </plate>\n' +
            '  <plate>\n    <cake />\n  </plate>\n' +
            '  </plate>\n' +
            '</div>'
    },
    {
        levelNumber: 5,
        instruction: 'Select all the things!',
        levelRules: {
            title: 'The Universal Selector',
            subtitle: 'You can select everything!',
            selector: '*',
            text: 'You can select all elements with the universal selector!',
            exampleText: '* selects all elements.'
        },
        itemsSet:
            '<div class="yummy yummy_strawberry target"></div>' +
            '<div class="plate target"><div class="yummy yummy_cupcake yummy_top yummy_small target"></div></div>' +
            '<div class="plate plate_pink target"></div>' +
            '<div class="plate plate_pink target"><div class="yummy yummy_cupcake yummy_top target"></div></div>' +
            '<div class="plate target"></div>',
        solution: '*',
        html:
            '<div class="container">\n' +
            '  <strawberry />\n' +
            '  <plate>\n    <cupcake class="small"/>\n  </plate>\n' +
            '  <plate />\n' +
            '  <plate />\n    <cupcake />\n  </plate>\n' +
            '  </plate>\n' +
            '</div>'
    },
    {
        levelNumber: 6,
        instruction: 'Select everything on a plate',
        levelRules: {
            title: 'The Universal Selector',
            subtitle: 'Combine the Universal Selector',
            selector: 'A  *',
            text: 'This selects all elements inside of A.',
            exampleText: 'p * selects every element inside all <p> elements.'
        },
        itemsSet:
            '<div class="plate"><div class="yummy yummy_cake yummy_top target"></div></div>' +
            '<div class="plate"><div class="yummy yummy_strawberry yummy_top target"></div></div>' +
            '<div class="yummy yummy_cake"></div>' +
            '<div class="plate"><div class="yummy yummy_cupcake yummy_top yummy_small target"></div></div>',
        solution: 'plate *',
        html:
            '<div class="container">\n' +
            '  <plate>\n    <cake />\n  </plate>\n' +
            '  <plate>\n    <strawberry />\n  </plate>\n' +
            '  <cake />\n' +
            '  <plate />\n    <cupcake class="small"/>\n  </plate>\n' +
            '</div>'
    },
    {
        levelNumber: 7,
        instruction: 'Select every donuts that\'s next to a plate',
        levelRules: {
            title: 'Adjacent Sibling Selector',
            subtitle: 'Select an element that directly follows another element',
            selector: 'A + B',
            text:
                'This selects all B elements that directly follow A. Elements that follow one another are called ' +
                'siblings. They\'re on the same level, or depth.\n' +
                'In the HTML markup for this level, elements that have the same indentation are siblings.',
            exampleText: 'p + .intro selects every element with class="intro" that directly follows a <p>.'
        },
        itemsSet:
            '<div class="plate plate_pink"><div class="yummy yummy_donut yummy_top yummy_small"></div></div>' +
            '<div class="plate"></div>' +
            '<div class="yummy yummy_donut yummy_small target"></div>' +
            '<div class="plate"></div>' +
            '<div class="yummy yummy_donut target"></div>',
        solution: 'plate + donut',
        html:
            '<div class="container">\n' +
            '  <plate>\n    <donut class="small" />\n  </plate>\n' +
            '  <plate />\n'+
            '  <donut class="small" />\n' +
            '  <plate />\n'+
            '  <donut />\n' +
            '  <donut class="small" />\n' +
            '</div>'
    },
    {
        levelNumber: 8,
        instruction: 'Select the 3rd plate',
        levelRules: {
            title: 'Nth Child Pseudo-selector',
            subtitle: 'Select an element by its order in another element',
            selector: ':nth-child(A)',
            text:
                'Selects the nth (Ex: 1st, 3rd, 12th etc.) child element in another element.',
            exampleText: 'div p:nth-child(2) selects the second <p> in every <div>.'
        },
        itemsSet:
            '<div class="plate plate_pink"></div>' +
            '<div class="plate plate_pink"></div>' +
            '<div class="plate plate_pink target"></div>' +
            '<div class="plate"></div>',
        solution: '.container plate:nth-child(3)',
        html:
            '<div class="container">\n' +
            '  <plate />\n'+
            '  <plate />\n'+
            '  <plate />\n'+
            '  <plate />\n'+
            '</div>'
    },
    {
        levelNumber: 9,
        instruction: 'Select the empty plates',
        levelRules: {
            title: 'Empty Selector',
            subtitle: 'Select elements that don\'t have children',
            selector: ':empty',
            text: 'Selects elements that don\'t have any other elements inside of them.',
            exampleText: 'div:empty selects all empty div elements.'
        },
        itemsSet:
            '<div class="plate plate_pink"><div class="yummy yummy_top"></div></div>' +
            '<div class="plate target"></div>' +
            '<div class="plate plate_pink target"></div>' +
            '<div class="plate"><div class="yummy yummy_strawberry yummy_top"></div></div>',
        solution: 'plate:empty',
        html:
            '<div class="container">\n' +
            '  <plate>\n    <cupcake />\n  </plate>\n' +
            '  <plate />\n'+
            '  <plate />\n'+
            '  <plate>\n    <strawberry />\n  </plate>\n' +
            '</div>'
    },
    {
        levelNumber: 10,
        instruction: 'Select the big cakes',
        levelRules: {
            title: 'Negation Pseudo-class',
            subtitle: 'Select all elements that don\'t match the negation selector',
            selector: ':not(X)',
            text: 'You can use this to select all elements that do not match selector "X".',
            exampleText: ':not(.big, .medium) selects all elements that do not have class="big" or class="medium".'
        },
        itemsSet:
            '<div class="plate plate_pink"><div class="yummy yummy_cake yummy_small yummy_top"></div></div>' +
            '<div class="plate"><div class="yummy yummy_cake yummy_top target"></div></div>' +
            '<div class="yummy yummy_cake target"></div>' +
            '<div class="plate"><div class="yummy yummy_strawberry yummy_top"></div></div>' +
            '<div class="yummy yummy_donut"></div>',
        solution: 'cake:not(.small)',
        html:
            '<div class="container">\n' +
            '  <plate>\n    <cake class="small"/>\n  </plate>\n' +
            '  <plate>\n    <cake />\n  </plate>\n' +
            '  <cake />\n' +
            '  <plate>\n    <strawberry />\n  </plate>\n' +
            '  <donut />\n' +
            '</div>'
    },
    {
        levelNumber: 11,
        instruction: 'Select all strawberries, but not the one is after a pink plate',
        levelRules: {
            title: 'Super challenge!',
            subtitle: 'Combine selectors to choose strawberries',
            selector: '?',
            text: '',
            exampleText: '.big:not(.pink, .orange) selects all big elements, but not pink or orange.'
        },
        itemsSet:
            '<div class="plate plate_pink"><div class="yummy yummy_strawberry yummy_top target"></div></div>' +
            '<div class="yummy yummy_strawberry"></div>' +
            '<div class="yummy yummy_strawberry yummy_small target"></div>' +
            '<div class="plate"><div class="yummy yummy_strawberry yummy_top target"></div></div>' +
            '<div class="plate plate_pink"></div>',
        solution: 'strawberry:not(#pink + strawberry)',
        html:
            '<div class="container">\n' +
            '  <plate id="pink">\n    <strawberry />\n  </plate>\n' +
            '  <strawberry />\n' +
            '  <plate>\n    <strawberry />\n  </plate>\n' +
            '  <plate id="pink" />\n' +
            '</div>'
    }
]
