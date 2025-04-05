const promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        // console.log("Async task is completed");
        // resolve();
    }, 1000);
})

promise1.then(function () {
    // console.log("Promise is consumed");  
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log("Async task 2");
        // resolve()
    }, 2000)
}).then(function() {
    // console.log("Async 2 consumed");  
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    // resolve({username: "tirth", mail: "tirth@mail.com"})
    }, 2000)
})

promise3.then((user) => {
    // console.log(user);   
})

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "tirth", mail: "tirth@mail.com"})
        } else {
            reject("Error! Something went wrong");
        }
    }, 1000)
})

promise4.then(function(user) {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Something happened to Promise");
})

const promise5 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "JS", mail: "JS@mail.com"})
        } else {
            reject("Error! JS went wrong");
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

fetch('https://api.github.com/users/Tirthpanchori')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))