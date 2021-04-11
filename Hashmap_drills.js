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

function removeDuplicates(string) {

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

//removeDuplicates('112233445566778899')

