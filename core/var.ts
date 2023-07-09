let greeting :string = `Hello Var`;

console.log(greeting)

let id : number = 234

console.log(id)

let isTrue:boolean = false;

console.log(isTrue);


function add(a:number,b:number):number{
    return a+b;
}

type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
}

let myUser:User={
    _id:"dsfdsgsdfsdfsdfsd",
    name:"John",
    email:"jkwednkjnd@kjbhikjb.com",
    isActive:true
}


console.log(add(4,6))

//Arrays
const list: string[] = [];
list.push("1");
list.push("2");
list.push("3");

const nums:Array<number>= [];
nums.push(1);