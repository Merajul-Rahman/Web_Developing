/*Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:*/

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

a = 5;
console.log(a);
var a;

a = 10;
console.log(a);