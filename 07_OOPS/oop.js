const user = {
    username: "Tirth",
    loginCount: 10,
    signedin: true,

    getuserdetails: function() {
        // console.log("Got userdetails from database");
        // console.log(this.username);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);

function User(username, logincount, isLoggedin) {
    this.username = username;
    this.loginCount = logincount
    this.isLoggedin = isLoggedin;

    return this;
}

const user1 = new User("tirth", 10, true)
const user2 = new User("Shiv", 6, false)
// console.log(user1);
// console.log(user2);
console.log(user2.constructor);

// "new" creates a new object called "instance" 
// a constructor function is called cuz of new
// all the arguments are injected in this keyword
// given back to funtion