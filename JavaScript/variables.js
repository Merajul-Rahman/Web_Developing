//Variable is the name of a data storage/memory location.
//we can use: let/var to declare variable, let is newer.
//Variables declared with the var always have Global Scope.
//Variables declared with the var keyword can NOT have block scope:
//Variables defined with var can be redeclared. But Let cannot be redeclared
//let and const does not bind to this.
//let and const are not hoisted.




let name;
let msg = "Hello"
console.log(msg);
name = "Merajul Rahman Shipon";
console.log(name);
let concat = msg + " Mr. " + name + 10+10;
console.log(concat);

/* 
let user = 'John';
let age = 25;
let message = 'Hello';
*/

/* 
let user = 'John',
age = 25,
message = 'Hello'; 
*/

/*
let user = 'John'
  , age = 25
  , message = 'Hello';
*/

let user = 'John', age = 25, message = 'Hello';
console.log("The user name is",user,"His age is",age,"years");

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3

//we can use a variable without declearing using let/var(Old model). it can be prevented now using "use strict".
n = 5;
console.log(n);

"use strict";
x = 10;
console.log(x);


var ourPlanetName = "Earth";
var currentUserName = "Shipon";
console.log(ourPlanetName, currentUserName);

const birthday = "07-11-1999";
console.log(birthday);