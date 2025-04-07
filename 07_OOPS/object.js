function multiplyby2(num) {
    return num*2
}

multiplyby2.power = 5

// console.log(multiplyby2(2));
// console.log(multiplyby2.power);
// console.log(multiplyby2.prototype);

function batsman(name, run) {
    this.name = name
    this.run = run
}

batsman.prototype.increment = function() {
    this.run++
}

batsman.prototype.print = function() {
    console.log(`The run of ${this.name} is ${this.run}`); 
}

const bat1 = new batsman("Dhoni", 100)
const bat2 = new batsman("Kohli", 200)

bat1.print()
bat1.increment()
bat1.print()
bat2.print()
bat2.increment()
bat2.print()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a 
new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype
property of the constructor function. This means that it has access to properties
and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified
arguments and this is bound to the newly created object. If no explicit return
value is specified from the constructor, JavaScript assumes this, the newly
created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (object, array, function, etc.),
the newly created object is returned.

*/