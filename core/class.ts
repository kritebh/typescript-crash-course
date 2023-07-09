class User {

    email:string;
    private name:string;

    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }


    get getEmail():string{
        return this.email
    }

    set setEmail(email:string){
        this.email = email;
    }
}


const myUser = new User("user@gmail.com","User");
console.log(myUser.getEmail);
console.log(myUser)