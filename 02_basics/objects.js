// object literals

const sym = Symbol("key1")
const user = {
    name: 'TIRTH',
    age: 19,
    [sym]: "mykey1", 
    location: "Bangalore",
    mail: "panchoritirth483@gmail.com",
    isLoggedIn: false
}

//how to access object

// console.log(user.name); // not good as it doesn't work for keys that are written in "" and also for symbol
// console.log(user["name"]);
// console.log(typeof user[sym]);
// console.log(user);

// user.mail = "tirth@google.com"
// Object.freeze(user)
// user.mail = "tirth@chatgpt.com"
// console.log(user);

user.greeting = function() {
    console.log("Hello brother!");
}
console.log(user.greeting());

user.greetingTwo = function() {
    console.log(`Hello my brother ${this.name}`);
}
console.log(user.greetingTwo());
