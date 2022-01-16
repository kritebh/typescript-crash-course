//Number
let id:number = 69 

let MyName: string = "Kritebh"

let isStudent:boolean = true

let x:any = "Any DataType"

let age:number

age = 21

let ids:number[] = [1,2,3,4,5]
ids.push(32)

let arr:any [] = [1,"Hello",true,32]

//Tuple
let person:[number,string,boolean] = [112,"John",false]
//Tuple Array
let employee:[number,string][]

employee = [[1,"Bihar"],[2,"Jharkhand"]]

//Union
let productID:string|number
productID = "22"

//Enum

enum Direction1 {
    Up,Down,Left,Right,
}

/*OBJECTS*/

type User = {
    id:number,
    name:string
}


const user: User = {
    id : 1,
    name : "John",
}

//Type Assertion

let cid :any = 1

// let CustomerID = <number>cid

let CustomerID = cid as number


// FUnction

function addNum(x:number,y:number):number{
    return x+y
}

// Interfaces

