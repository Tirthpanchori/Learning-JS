class user {
    constructor(username) {
        this.username = username
    } 

    logme() {
        console.log(`User ${this.username} is logged in`);
    }
    
    static createID() {
        return `123`
    }
}

const u1 = new user("Tirth")
// u1.createID()
u1.logme()

class Me extends user {
    constructor(username, mail) {
        super(username)
        this.mail = mail
    }
}

const u2 = new Me("Shiv", "Tirth@mail")
u2.logme()