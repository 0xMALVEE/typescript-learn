const User = {
    name : "bog",
    email: "bog@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

createUser({name: " alvee", isPaid: true})

let createCourse = ():{name: string, price: number} => { 
    return {name:"df", price: 300}
}

// type aliases

type User = {
    readonly _id: string
    name : string
    email: string
    isActive: boolean 
}

function createUser2(user: User){

}

// interface

interface robot{
    name: string
    age: number
}

let bot: robot = {
    name: "irobot",
    age: 33
}

// arrays 

let numbers: number[] = [213,4,5234,3]

let names: string[] = new Array()

names.push('jhon')

export { }