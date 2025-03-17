
if(true) {
    let a = 10
    const b = 20
    var c = 30 // doesn't have any scope, can access outside loop also
    d = 40 // doesn't have any scope, can access outside loop also
}
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

function one() {
    const name = 'tirth'

    function two() {
        // console.log(name);
        const site = 'yt'
    }

    // console.log(site); throws error

    two()
}

one()

// +++++++++++++++++++++++++interesting+++++++++++++++++++

addOne(5) // does not throw error
function addOne(num) {
    return num++
}

addOne(5)


// addTwo(5) // throws error
const addTwo = function(num) {
    return num+2
}

addTwo(5)