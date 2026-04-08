'use strict'; //to set command for using leatest javascript

let nameOf = "namess" ;
let age = 34 ;
let isFollow = true ;
let emptyValue = null ;
let undefined ;

// numbers = maximum 2**53 otherwise use 'Bigint'
// string => "" 
//Booleans => True/False
// nulll => stand alone empty value
// undefined => varieable is assigned but not the value and datatype
//symbole => for assigned something unique 

console.log(typeof nameOf, typeof age, typeof isFollow) //to know the datatypes we use "typeof"

//typeof null shows ** OBJECT **

console.table([nameOf, age, isFollow, emptyValue, undefined])