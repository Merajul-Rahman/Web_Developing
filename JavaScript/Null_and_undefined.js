//Null means there is no value or no object.
//null is a way to reset a variable, signalling that it should not reference any object.
//Whenever a variable is declared but not initialized or assigned a value, then it is stored as undefined. 
// A function returns undefined if a value was not returned. 
// A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value.

let x = null;
let a;
console.log("Data Type of " , x , " is " , typeof(x));
console.log("Data Type of " , a , " is " , typeof(a));

//check null with ===
if (x===null)
{
    console.log("x===null is true for x=null");
}

x=undefined;
if (x===null)
{
    console.log("It will not executed");
}
else
{
    console.log("x===null is false for x=undefined");
}
// == is true for both null and undefined
let x1 = null;
if (x1==null)
{
    console.log("x == null True for x = null");
}
x1=undefined;
if (x1==null)
{
    console.log("x == null True for x=undefined");
}

//Arithmetics of null
console.log(2 + null); // 2
console.log(null + 2); // 2

console.log(2 - null); // 2
console.log(null - 2); // -2

console.log(2 * null); // 0
console.log(null * 2); // 0

console.log(2 ** null); // 1
console.log(0 ** 2); // 0

console.log(null / 2); // 0

//Arithmetics of Undefined
console.log(2 + undefined); // NaN
console.log(2 * undefined); // NaN
console.log(2 - undefined); // NaN
console.log(2 ** undefined); // NaN