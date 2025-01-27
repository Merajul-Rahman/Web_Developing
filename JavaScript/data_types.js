//Premetive Data Types

//1. Number: int, float, dubble all is number type in JS. (range:  ±2^53)
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