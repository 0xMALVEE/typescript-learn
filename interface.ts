// define custom data types using type aliases and interace

interface User {
    name : String,
    startTrail(): boolean,
    getCoupon(name: string): boolean
}


let alvee: User = {
    name: "Alvee",
    startTrail: function(){
        return true
    },
    getCoupon: function(name:"2023"){
        return true
    }
}

// reopening interface 
interface test {
    name: string
}

interface test{
    age: 3
}

const may : test = {
    name: ' hi',
    age:3
}

// inheritance in interface

interface Admin extends User{
    role: string
    power: "admin"
}



export { }