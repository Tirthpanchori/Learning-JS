class user {
    constructor(username, age) {
        this.username = username
        this.age = age
    }

    login() {
        console.log(`${this.username} is logged in`);
    }
}

class Student extends user {
    constructor(username, mail, standard) {
        super(username)
        this.mail = mail
        this.standard = standard
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const st1 = new Student("Tirth", "tirth@mail", "ISE")
st1.addCourse();

const masalaChai = new user("masalaChai")

masalaChai.login()

console.log(st1 instanceof user);