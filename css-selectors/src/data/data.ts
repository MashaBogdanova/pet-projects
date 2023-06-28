import {ILevelParams} from '../types/types';

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
            '<div class="yummy yummy_donut target" id="0"></div>' +
            '<div class="yummy yummy_donut target" id="1"></div>',

        solution: 'donut',
        html: {
            0: '<div class="elem-0">&lt;donut /></div>',
            1: '<div class="elem-1">&lt;donut /></div>'
        }
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
            '<div class="plate plate_pink target" id="0"></div>' +
            '<div class="plate" id="1"></div>' +
            '<div class="plate" id="2"></div>',
        solution: '#pink',
        html: {
            0: '<div class="elem-0">&lt;plate id="pink"/></div>',
            1: '<div class="elem-1">&lt;plate /></div>',
            2: '<div class="elem-2">&lt;plate /></div>'
        }
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
            '<div class="plate plate_pink" id="0"></div>' +
            '<div class="plate" id="1"><div class="yummy yummy_top target" id="2"></div></div>' +
            '<div class="yummy" id="4"></div>',
        solution: 'plate cupcake',
        html: {
            0: '<div class="elem-0">&lt;plate /></div>',
            1: '<div class="elem-1">&lt;plate></div>',
            2: '<div class="elem-2">  &lt;cupcake /></div>',
            3: '<div class="elem-1">&lt;/plate></div>',
            4: '<div class="elem-4">&lt;cupcake /></div>',
        }
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
            '<div class="yummy yummy_cake" id="0"></div>' +
            '<div class="yummy yummy_cake yummy_small target" id="1"></div>' +
            '<div class="plate plate_pink" id="2">' +
            '<div class="yummy yummy_cake yummy_small yummy_top target" id="3"></div>' +
            '</div>' +
            '<div class="plate plate_pink" id="5"></div>',
        solution: '.small',
        html: {
            0: '<div class="elem-0">&lt;cake /></div>',
            1: '<div class="elem-1">&lt;cake class="small" /></div>',
            2: '<div class="elem-2">&lt;plate></div>',
            3: '<div class="elem-3">&lt;cake class="small" /></div>',
            4: '<div class="elem-2">&lt;/plate></div>',
            5: '<div class="elem-5">&lt;plate /></div>'
        }
    },
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
            '<div class="plate plate_pink" id="0"></div>' +
            '<div class="yummy yummy_donut target" id="1"></div>' +
            '<div class="plate" id="2">' +
            '<div class="yummy yummy_cupcake yummy_top target" id="3"></div>' +
            '</div>' +
            '<div class="plate plate_pink" id="5">' +
            '<div class="yummy yummy_cake yummy_top target" id="6"></div>' +
            '</div>' +
            '<div class="plate" id="8"></div>',
        solution: 'strawberry, cupcake, cake',
        html: {
            0: '<div class="elem-0">&lt;plate /></div>',
            1: '<div class="elem-1">&lt;donut /></div>',
            2: '<div class="elem-2">&lt;plate></div>',
            3: '<div class="elem-3">&lt;cupcake /></div>',
            4: '<div class="elem-2">&lt;/plate></div>',
            5: '<div class="elem-5">&lt;plate></div>',
            6: '<div class="elem-6">&lt;cake /></div>',
            7: '<div class="elem-5">&lt;/plate></div>',
            8: '<div class="elem-8">&lt;plate /></div>'
        }
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
            '<div class="yummy yummy_strawberry target" id="0"></div>' +
            '<div class="plate target" id="1">' +
            '<div class="yummy yummy_cupcake yummy_top yummy_small target" id="2"></div>' +
            '</div>' +
            '<div class="plate plate_pink target" id="4"></div>' +
            '<div class="plate plate_pink target" id="5">' +
            '<div class="yummy yummy_cupcake yummy_top target" id="6"></div>' +
            '</div>' +
            '<div class="plate target" id="8"></div>',
        solution: '*',
        html: {
            0: '<div class="elem-0">&lt;strawberry /></div>',
            1: '<div class="elem-1">&lt;plate></div>',
            2: '<div class="elem-2">&lt;cupcake class="small"/></div>',
            3: '<div class="elem-1">&lt;/plate></div>',
            4: '<div class="elem-4">&lt;plate /></div>',
            5: '<div class="elem-5">&lt;plate></div>',
            6: '<div class="elem-6">&lt;cupcake /></div>',
            7: '<div class="elem-5">&lt;/plate></div>',
            8: '<div class="elem-8">&lt;plate /></div>'
        }
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
            '<div class="plate" id="0">' +
            '<div class="yummy yummy_cake yummy_top target" id="1"></div>' +
            '</div>' +
            '<div class="plate" id="3">' +
            '<div class="yummy yummy_strawberry yummy_top target" id="4"></div>' +
            '</div>' +
            '<div class="yummy yummy_cake" id="6"></div>' +
            '<div class="plate" id="7">' +
            '<div class="yummy yummy_cupcake yummy_top yummy_small target" id="8"></div>' +
            '</div>',
        solution: 'plate *',
        html: {
            0: '<div class="elem-0">&lt;plate></div>',
            1: '<div class="elem-1">&lt;cake /></div>',
            2: '<div class="elem-0">&lt;/plate></div>',
            3: '<div class="elem-3">&lt;plate></div>',
            4: '<div class="elem-4">&lt;strawberry /></div>',
            5: '<div class="elem-3">&lt;/plate></div>',
            6: '<div class="elem-6">&lt;cake /></div>',
            7: '<div class="elem-7">&lt;plate></div>',
            8: '<div class="elem-8">&lt;cupcake class="small"/></div>',
            9: '<div class="elem-7">&lt;/plate></div>'
        }
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
            '<div class="plate plate_pink" id="0">' +
            '<div class="yummy yummy_donut yummy_top yummy_small" id="1"></div>' +
            '</div>' +
            '<div class="plate" id="3"></div>' +
            '<div class="yummy yummy_donut yummy_small target" id="4"></div>' +
            '<div class="plate" id="5"></div>' +
            '<div class="yummy yummy_donut target" id="6"></div>',
        solution: 'plate + donut',
        html: {
            0: '<div class="elem-0">&lt;plate></div>',
            1: '<div class="elem-1">&lt;donut class="small" /></div>',
            2: '<div class="elem-0">&lt;/plate></div>',
            3: '<div class="elem-3">&lt;plate /></div>',
            4: '<div class="elem-4">&lt;donut class="small" /></div>',
            5: '<div class="elem-5">&lt;plate /></div>',
            6: '<div class="elem-6">&lt;donut /></div>'
        }
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
            '<div class="plate plate_pink" id="0"></div>' +
            '<div class="plate plate_pink" id="1"></div>' +
            '<div class="plate plate_pink target" id="2"></div>' +
            '<div class="plate" id="3"></div>',
        solution: '.container plate:nth-child(3)',
        html: {
            0: '<div class="elem-0">&lt;plate /></div>',
            1: '<div class="elem-1">&lt;plate /></div>',
            2: '<div class="elem-2">&lt;plate /></div>',
            3: '<div class="elem-3">&lt;plate /></div>'
        }
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
            '<div class="plate plate_pink" id="0">' +
            '<div class="yummy yummy_top" id="1"></div>' +
            '</div>' +
            '<div class="plate target" id="3"></div>' +
            '<div class="plate plate_pink target" id="4"></div>' +
            '<div class="plate" id="5">' +
            '<div class="yummy yummy_strawberry yummy_top" id="6"></div>' +
            '</div>',
        solution: 'plate:empty',
        html: {
            0: '<div class="elem-0">&lt;plate></div>',
            1: '<div class="elem-1">&lt;cupcake /></div>',
            2: '<div class="elem-0">&lt;/plate></div>',
            3: '<div class="elem-3">&lt;plate /></div>',
            4: '<div class="elem-4">&lt;plate /></div>',
            5: '<div class="elem-5">&lt;plate></div>',
            6: '<div class="elem-6">&lt;strawberry /></div>',
            7: '<div class="elem-5">&lt;/plate></div>'
        }
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
            '<div class="plate plate_pink" id="0">' +
            '<div class="yummy yummy_cake yummy_small yummy_top" id="1"></div>' +
            '</div>' +
            '<div class="plate" id="3">' +
            '<div class="yummy yummy_cake yummy_top target" id="4"></div>' +
            '</div>' +
            '<div class="yummy yummy_cake target" id="6"></div>' +
            '<div class="plate" id="7">' +
            '<div class="yummy yummy_strawberry yummy_top" id="8"></div>' +
            '</div>' +
            '<div class="yummy yummy_donut" id="10"></div>',
        solution: 'cake:not(.small)',
        html: {
            0: '<div class="elem-0">&lt;plate></div>',
            1: '<div class="elem-1">&lt;cake class="small"/></div>',
            2: '<div class="elem-0">&lt;/plate></div>',
            3: '<div class="elem-3">&lt;plate></div>',
            4: '<div class="elem-4">&lt;cake /></div>',
            5: '<div class="elem-3">&lt;/plate></div>',
            6: '<div class="elem-6">&lt;cake /></div>',
            7: '<div class="elem-7">&lt;plate></div>',
            8: '<div class="elem-8">&lt;strawberry /></div>',
            9: '<div class="elem-7">&lt;/plate></div>',
            10: '<div class="elem-10">&lt;donut /></div>'
        }
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
            '<div class="plate plate_pink" id="0">' +
            '<div class="yummy yummy_strawberry yummy_top target" id="1"></div>' +
            '</div>' +
            '<div class="yummy yummy_strawberry" id="3"></div>' +
            '<div class="yummy yummy_strawberry yummy_small target" id="4"></div>' +
            '<div class="plate" id="5">' +
            '<div class="yummy yummy_strawberry yummy_top target" id="6"></div>' +
            '</div>' +
            '<div class="plate plate_pink" id="8"></div>',
        solution: 'strawberry:not(#pink + strawberry)',
        html: {
            0: '<div class="elem-0">&lt;plate id="pink"></div>',
            1: '<div class="elem-1">&lt;strawberry /></div>',
            2: '<div class="elem-0">&lt;/plate></div>',
            3: '<div class="elem-3">&lt;strawberry /></div>',
            4: '<div class="elem-4">&lt;strawberry /></div>',
            5: '<div class="elem-5">&lt;plate></div>',
            6: '<div class="elem-6">&lt;strawberry /></div>',
            7: '<div class="elem-5">&lt;/plate></div>',
            8: '<div class="elem-8">&lt;plate id="pink" /></div>'
        }
    }
]
