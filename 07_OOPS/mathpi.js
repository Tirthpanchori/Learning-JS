const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discriptor);

const tirth = {
    name: "Tirth",
    age: 19,
    sex: "M",

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(tirth, "name"));

Object.defineProperty(tirth, "name", {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(tirth, "name"));

for (let [key, value] of Object.entries(tirth)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}