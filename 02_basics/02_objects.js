//singleton

const user = new Object() // singleton
//const user = {} // non singleton

user.id = '123tr'
user.name = 'tirth'
user.isvalid = false
//console.log(user);

const anotheruser = {
    id : 123,
    fullname: {
        userfullname: {
            firstname : 'tirth',
            lastname: 'panchori'
        }
    }
}

// console.log(anotheruser.fullname);

const obj1 = {a : 1, b : 2}
const obj2 = {c : 1, d : 2}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));

