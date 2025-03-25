// loops specific for for loops

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    //console.log(i);
    
}

// maps

const map = new Map() 
map.set('IN', 'India')
map.set('Fr', 'France')
map.set('It', 'Italy')

// console.log(map);

for (const key of map) {
    //console.log(key);
}
for (const [key, value] of map) {
    //console.log(key + ' :- ' + value);
}

const myObject = {
    game1: 'COC',
    game2: 'BGMI'
}
// objects are not iterable via forof loop
// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value);
// }

const mObject = {
    js: 'Javascript',
    cpp: 'C plus plus',
    rb: 'ruby'
}

for (const key in mObject) {
   // console.log(key);  
}
for (const key in mObject) {
   // console.log(mObject[key]);  
}

const name = ['tirth', 'shiv', 'sarthak']

for (const key in name) {
    // console.log(name[key]);  
    // console.log(key); // this gives indices  
}

// most used loop for arrays
const language = ['java', 'cpp', 'js', 'ruby']
// language.forEach( function (ele) {
//     console.log(ele);
    
// })
// console.log();

language.forEach( (ele, index, arr) => {
    // console.log(ele, index, arr);
    
})

// function printme(item) {
//     console.log(item);
// }

// language.forEach(printme)

const lang = [
    {
        languageName: 'java',
        languagefiletype: 'java'
    },
    {
        languageName: 'javascript',
        languagefiletype: 'js'
    },
    {
        languageName: 'python',
        languagefiletype: 'py'
    },
]

lang.forEach( (key) => {
    console.log(key.languageName);
    
})