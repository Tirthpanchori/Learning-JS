const bottle = ['cello', 'milton']

const headphone = {
    name: 'Oppo encho air',
    price: 2999,

    getprice: function() {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

Object.prototype.tirth = function() {
    console.log("Tirth is in all objects");
}

Array.prototype.heytirth = function() {
    console.log("Tirth is in all arrays");
}

bottle.tirth()
bottle.heytirth()
headphone.tirth()


// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()