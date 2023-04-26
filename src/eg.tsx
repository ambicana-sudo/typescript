import React from 'react'

// for variables
let name: string;
let age: number | string; //define it as a number or string
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
//for unknown type
let personName: unknown

// for object
// type Person ={
//   name: string;
//   age:number;
//   //make age optional
//   // age?: number;
// }

//instead of type we can use interface
interface Person {
  name: string;
  age:number
}

let person: Person = {
  name:"ambika",
  age:22,
}

interface Guy extends Person{
  perofession: string
}

// for Array
// let arrayOfPeople: Person = []

//function
function printName(name: string){
  console.log(name)
}

printName("ambika")

let sayHello : (name:string)=> void;