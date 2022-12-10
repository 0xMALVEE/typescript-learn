// using type safety in functions 

function addTwo(num: number){
    return num + 2;
}

addTwo(5)

// default values
let signUp = (username: string,email: string,phone: number = 333):number =>{
    return 123;
}

signUp("3",'4')

// looping

let heros = ['a', "b", 3]

heros.map((hero) =>{
    return "33"
})

// function returning nothing (void)

function errCheck(msg: string):void{
    // return 23;
    console.log(msg)
}

// never return anything
function errorHandle(msg: string):never{
    // return 23;
    throw new Error(msg);
}