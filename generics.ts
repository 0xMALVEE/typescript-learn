// generics
interface Bootle{
    brand: string
    type: number
}

function identity<T>(val:T) : T{
    return val;
}

identity<Bootle> ({brand:"d", type:3})

// again
// <> is the generic ?
// generic type is unknown type later it's reviled after code is exicuted 

// the function last can be any type depending on the input
const last = <T>(arr: Array<T>):T =>{
    
    return arr[0];
}

const l1 = last([1,23,4])

// const l2 = last(["a", "b", "c"]) -> this will automaticly know the type
const l2 = last<string>(["a", "b", "c"]) // also we can define it ourself 


// when to use : so when ever we making a function or interface or just block of code in general related to types that is not type specific then instade of using any cuz that will break the type safety , we use generics (types using <T>) that will make it a own component type depending on the input or the type is specified when calling the function 

