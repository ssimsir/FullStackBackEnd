"use strict"
/* -------------------------------------------- */

// console.log('Module index started')

/* -------------------------------------------- *
// Export:

function test() {
    console.log('test fonksiyonu çalıştı')
}

module.exports = test

/* -------------------------------------------- *

module.exports = function test() {
    console.log('test fonksiyonu çalıştı')
}

/* -------------------------------------------- */

function test1() {
    console.log('test1 çalıştı.')
}

function test2() {
    console.log('test2 çalıştı.')
}

function test3() {
    console.log('test3 çalıştı.')
}

// Array export:
// module.exports = [
//     test1,
//     test2,
//     test3
// ]

// Object Export -1:
// module.exports = {
//     test1: test1,
//     test2: test2,
//     test3: test3
// }
// ShortHand:
// module.exports = {
//     test1,
//     test2,
//     test3
// }

// Object Export -2:
// module.exports.test1 = test1
// module.exports.test2 = test2
// module.exports.test3 = test3


/* -------------------------------------------- */
// Module export -> function expression

// Object Export -3:

// module.exports.test1 = function() {
//     console.log('test1 çalıştı.')
// }

// module.exports.test2 = function() {
//     console.log('test2 çalıştı.')
// }

// module.exports.test3 = function() {
//     console.log('test3 çalıştı.')
// }

// module.exports.newVar = 'new-value'

/* -------------------------------------------- */
// Object Export -4:

module.exports = {

    test1: function() {
        console.log('test1 çalıştı.')
    },
    
    test2: function() {
        console.log('test2 çalıştı.')
    },
    
    test3: function() {
        console.log('test3 çalıştı.')
    },

    newVar: 'extra value'
}

/* -------------------------------------------- */