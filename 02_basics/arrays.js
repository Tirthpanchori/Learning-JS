const arr = [1, 2, 3, 4, 5]

//array in js create shallow copy means have a same reference point so any change will reflect in both array
// in a single array you can have multiple DT value, bool, string, number etc..
// size of array is dynamic in js
const ar = ['tirth','shiv']
const a = new Array(1, 2, 3, 4, 5)

// console.log(arr[1]);
// console.log(ar[1]);
// console.log(a[1]);

// Array methods

// arr.push(10)
// arr.push(11)
// arr.pop()

// arr.unshift(10)
// arr.shift()

// console.log(arr);
// console.log(arr.join());
// console.log(typeof arr.join());

//slice and splice
console.log('A ', arr);

const n1 = arr.slice(0, 3)
console.log('B: ', n1);

const n2 = arr.splice(0, 3)
console.log('C: ', n2);
console.log('Original array: ', arr);

//slice doesn't change the org array but splice does