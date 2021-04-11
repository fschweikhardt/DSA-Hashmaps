const HashMap = require('./HashMap')

function main() {
    const lotr = new HashMap()

    lotr.MAX_LOAD_RATIO = .5
    lotr.MAX_SIZE_RATIO = 3

    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandolf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    
    console.log(lotr._capacity)
    // console.log('Maiar key:', lotr.get('Maiar'))
    // console.log('Hobbit key:', lotr.get('Hobbit'))
}

//main()

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

function removeDuplicate(string) {

    const duplicate = new HashMap()
    duplicate._capacity=16
    
    for (let i = 0; i < string.length; i++) {
        duplicate.set(string[i], string[i])
        //console.log(duplicate)
    }
      
    let newString = '';
    duplicate._hashTable.forEach(x => {
        newString += x.value;
    })

    console.log(newString)

}

//removeDuplicate('google')

function removeDuplicates(string) {
    const map = new Map()
    let newStr = ''
    let split = string.split('')
    split.forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, 'does not matter')
            newStr += letter
            console.log(newStr)
            }
        })
    return newStr
}

//console.log(removeDuplicates('google'))


function palindrome(string) {
    const result = new Map();
    for (let i = 0; i < string.length; i++) {
        console.log(result);
        if (!result.delete(string[i])) {
            result.set(string[i], 1);
        }
    }
    console.log(result.size, result);
    if (result.size <= 1) {
        return true;
    } return false;
}

console.log(palindrome('acecarr')) // true;
console.log(palindrome('north')) // false;