//In JS all types of number(int,float,double) is stored as Number data type. its range is +-2^53
let n1 = 5555;
console.log(n1, typeof n1);

let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

/* 255 and 255.0 are equivalent, as JavaScript treats both as the same number.
0xff represents 255 in hexadecimal notation.
0b11111111 represents 255 in binary notation.
0.255e3 is 255 in exponential notation.
All these different representations are equal to 255 in JavaScript. */

console.log(num1,num2,num3,num4,num5);
console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true

//String to number (parseInt,parseFloat)
let str1 = "19658.515";
console.log(str1, typeof str1);
let num6 = parseInt(str1);
console.log(num6, typeof num6);

let str2 = "19658.58418";
console.log(str2, typeof str2);
let num7 = parseFloat(str2);
console.log(num7, typeof num7);