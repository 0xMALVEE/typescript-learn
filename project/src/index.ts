// class User{
//     email: string
//     name: string
//     constructor(name: string,email: string){
//         this.name = name;
//         this.email = email;
//     }
// }

// const jhon = new User("jhon", "jhon@")


class User{
   private key: number = 34
    constructor(public name: string,public email: string, key: number){
        this.key = key
    }
    get getKey(){
        return this.key
    }
    set setKey(num: number){
        this.key = num
    }
}

const jhon = new User("jhon", "jhon@", 33)

console.log(jhon.getKey)

