// let first = document.querySelector("#first") as HTMLInputElement
// let second = document.querySelector("#second") as HTMLInputElement
// let addButton = document.querySelector("#add") 
// let ans = document.querySelector("#ans") 


// function add(num1:number,num2:number) {
//     let sol = num1+ num2
//     console.log(sol)
//     ans.innerHTML = sol
// }

// addButton.addEventListener("click", ()=>{add(+first.value,+second.value)});

// let user:{
//     name:string;
//     email:string;
// } = {
//     name:'klb',
//     email:'email@mail.com'
// }

// console.log(user.name)

// let fruits:string[];
// fruits = ['mango','apple']

// console.log(fruits)

/* tuples */

// let role:[number,string] = [34,'weewfw'];  //it will accept only two things


/* enums */

enum ROLES{
    ADMIN=1,
    AUTHOR,
    GUEST
}

console.log(ROLES)

function add():void{
    console.log(3+2);
    return 
}

let ADD:()=>number;


add()
