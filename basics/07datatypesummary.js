// Data types... in basis of how the data is stored and accessed data are divided into two types 1.Primitive 2.Non-Primitive

//Primitive Data Types: 7types (string,number,boolean,null,undefined,bigint,symbol)

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId) //Symbol is used to make the same value not same 


// Rreference or NON-primitive data types: 3types (array,object,function)  NOTE** All typeof non-primitive are shown as object 

// ++++++++++++++++++++++++  MEMORY TYPE +++++++++++++++++++++++++++

// stack(primitive) , heap(non primitive)

let myName = "hasibraihan";

let myAnotherName = myName;
myAnotherName = "ganjababa"

// console.log(myAnotherName);

let userOne = {
    name:"hasib_raihan",
    email:"hasib@google.com",
    home: "balubari",
};

let userTwo = userOne
userTwo.email = "yoyo@dlsc.com";
console.log(userOne);
console.log(userTwo);