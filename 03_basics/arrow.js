const user = {
    username : 'tirth',
    price : 200,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // prints the whole obj as it's the current context
    }

}

// user.welcomeMessage()
// user.username = 'shiv'
// user.welcomeMessage()

// console.log(this); // prints empty object as current object is nothing but if we do the same in console it will say WINDOW


function one() {
    let username = "tirth"
    // console.log(this);
    console.log(this.username); // this doesn't work if variables are defined with let or const or var,
    //  but it they are deifned with just their name then it will work
    
}

// one()

const two = function() {
    let username = "tirth"
    // console.log(this);
    console.log(this.username);
}

// two()

const three = () => { //arrow funtion
    let username = "tirth"
    console.log(this);
    // console.log(this.username);
}
// three()

// const addTwo = (num1, num2) => {
//     return num1+ num2
// }

// const addTwo = (num1, num2) => num1+ num2 // this way of implementing is called implicit return
// const addTwo = (num1, num2) => (num1+ num2) // if we use {} then we need to write return but it's not the case with ()
const addTwo = (num1, num2) => ({username: 'tirth'})


console.log(addTwo(3,4));
