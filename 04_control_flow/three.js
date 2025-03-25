const nums = [1, 2, 3, 4]
// const n = nums.reduce(function (acc, curr) {
//     console.log(`Accumulator value ${acc} and Current Value ${curr}`);
//     return acc + curr
// }, 0)

const n = nums.reduce( (acc, curr) => acc + curr, 0)
// console.log(n);

const cart = [
    {
        item: 'bag',
        price: 299
    },
    {
        item: 'speaker',
        price: 5999
    },
    {
        item: 'mouse',
        price: 7999
    }
]

const sum = cart.reduce( (acc, val) => acc + val.price, 0)
console.log(sum);
