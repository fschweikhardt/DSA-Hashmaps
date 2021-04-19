const HashMap = require('./HashMap')

function main() {
    const lotr = new HashMap()

    lotr.MAX_LOAD_RATIO = .5
    lotr.MAX_SIZE_RATIO = 3

    // lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandolf')
    lotr.set('Human', 'Aragorn')
    // lotr.set('Elf', 'Legolas')
    // lotr.set('Maiar', 'The Necromancer')
    // lotr.set('Maiar', 'Sauron')
    // lotr.set('RingBearer', 'Gollum')
    // lotr.set('LadyOfLight', 'Galadriel')
    // lotr.set('HalfElven', 'Arwen')
    // lotr.set('Ent', 'Treebeard')
    
    console.log(lotr)
    
    // console.log(lotr._capacity)
    // console.log('Maiar key:', lotr.get('Maiar'))
    // console.log('Hobbit key:', lotr.get('Hobbit'))
}
//const hashMap = main()
//console.log(hashMap)

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

//WhatDoesThisDo()


'4. Remove duplicates'

let string1 = 'google'
let string2 = 'google all that you think can think of'

function removeDoubles(string) {

    const duplicateMap = new Map()

    for (let i = 0; i < string.length; i++) {
        duplicateMap.set(string[i], '')
    }

    let newString = ''
    for (let letter of duplicateMap) {
        newString += letter
    }

    const filteredString = newString.split('').filter(letters => {
       return letters !== ','
    })

    return filteredString.join('')
}

//console.log(removeDoubles(string2))


function removeDuplicates(string) {
    const map = new Map()
    let newStr = ''
    string.split('').forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, 'does not matter')
            newStr += letter
        } else {
            console.log(`already have ${letter}`)
        }
        
        })
    return newStr
}
//console.log('return', removeDuplicates('abcabc'))


'5. Any permutation a palindrome'

function palindrome(string) {
    const result = new Map();
    for (let i = 0; i < string.length; i++) {
        if (!result.delete(string[i])) {
            result.set(string[i], '')
        }
    //this works too!
        //     if (result.has(string[i])) {
        //         result.delete(string[i])
        //     } else {
        //         result.set(string[i], 'map set')
        //     }
    }
    console.log(result.size, result)
    if (result.size <= 1) {
        // console.log(result.size)
        return true;
    } return false;
}
// console.log(palindrome('raccear')) 
// console.log(palindrome('north')) 
// console.log(palindrome('messem'))
console.log(palindrome('aba')) 
// console.log(palindrome('abc')) 


'6. Anagram grouping'
let inputAnagram = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
// output = [
//         ['east', 'teas', 'eats'],
//         ['cars', 'arcs'],
//         ['acre', 'race']
//    ]

