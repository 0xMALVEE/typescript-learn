"use strict";
// class User{
//     email: string
//     name: string
//     constructor(name: string,email: string){
//         this.name = name;
//         this.email = email;
//     }
// }
// const jhon = new User("jhon", "jhon@")
class User {
    constructor(name, email, key) {
        this.name = name;
        this.email = email;
        this.key = 34;
        this.key = key;
    }
    get getKey() {
        return this.key;
    }
    set setKey(num) {
        this.key = num;
    }
}
const jhon = new User("jhon", "jhon@", 33);
console.log(jhon.getKey);
