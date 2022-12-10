// generics
interface Bootle{
    brand: string
    type: number
}

function identity<T>(val:T) : T{
    return val;
}

identity<Bootle> ({brand:"d", type:3})