function myName() {
    console.log('T');
    console.log('I');
    console.log('R');
    console.log('T');
    console.log('H');
}

// myName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumber(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumber(2,3)
// console.log(result);

function userloggedin(username = 'sam') {
    if(username === undefined) {
        console.log('Please enter a name');
        
    }
    return `${username} is logged in!`
}

const user = userloggedin()
// console.log(user);

function addCartValue(val1, val2, ...num1) { // ... is called rest operator
    return num1
}

// console.log(addCartValue(2,5,6,7,8,9));

const users = {
    username: 'tirth',
    price: 100
}

function handleObject(anyobject) {
    console.log(`Name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(users)
// handleObject({
//     username: 'sam',
//     price: 200
// })

const arr = [200,300,400,500]

function secondElement(arr) {
    return arr[1]
}

console.log(secondElement(arr));
