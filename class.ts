class Person{
    private role: string = "admin"
    constructor(public name: string,public age: number){

    }

    get getRole(): String{
        return this.role;
    }

    set setrole(r: string){
        this.role = r;
    }

}


const jhon = new Person("Alvee", 18);

jhon.setrole = "superadmin"

jhon.getRole