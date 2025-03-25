const language = ['java', 'cpp', 'js', 'ruby']

// const values = language.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7]

// const nums = myNums.filter( (num) => num > 3)
const nums = myNums.filter( (num) => { // if you put curly braces then you have to explicitely type return keyword
    return num > 3
})
// console.log(nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const read = books.filter( (item) => item.genre === 'Fiction')
// console.log(read);

const n = myNums.map( (item) => item + 10).map( (item) => item * 2).filter( (item) => item >= 30)
console.log(n);
