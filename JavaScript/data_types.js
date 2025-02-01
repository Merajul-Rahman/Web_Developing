//Premetive Data Types

//1. Number: int, float, dubble all is number type in JS. (range:  ±2^53)
//Javascript numbers are always one type: double (64-bit floating point).
let number = 165486;
console.log("Data Type of " , number , " is " ,typeof(number));

//2.String
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
console.log(single, double, backticks);

let str = "165486";
console.log("Data Type of " , str , " is " , typeof(str));

//3. Boolean
let status = true;
console.log("Data Type of " , status , " is " , typeof(status));

//4. Undefined
let a;
console.log("Data Type of " , a , " is " , typeof(a));

//5. Null
let x = null;
console.log("Data Type of " , x , " is " , typeof(x));
//check null
//x=undefined;
if (x===null)
{
    console.log("X is Null");
}
//x=undefined;
if (x==null)
{
    console.log("This is equivalent to x==null||x==undefined");
}
//Arithmetics
console.log(2 + null); // 2
console.log(null + 2); // 2

console.log(2 - null); // 2
console.log(null - 2); // -2

console.log(2 * null); // 0
console.log(null * 2); // 0

console.log(2 ** null); // 1
console.log(0 ** 2); // 0

console.log(null / 2); // 0


//6. Object
/* The object data type can contain both built-in objects, and user defined objects:
Built-in object types can be:
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more. */
// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person);
// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
    
}
// Date object:
const date = new Date("2022-03-25");
console.log(date);

//When adding a number and a string, JavaScript will treat the number as a string.
let stn = 16 + "Volvo";
console.log(stn);

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let x5 = 16 + 4 + "Volvo";
console.log(x5);
x5 = "Volvo" + 16 + 4;
console.log(x5);

//Bigint
let x6 = BigInt("123456789012345678901234567890");
console.log(x6);