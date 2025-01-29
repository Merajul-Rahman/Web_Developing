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

//JS Arithmatics
console.log("Addition",num1+num2);
console.log("Subtraction",num7-num2);
console.log("Multiplication",num1*num2);
console.log("Division",num6/num1);
console.log("Exponantial 5**2=", 5**2);
console.log("Modulas 5%2=", 5%2);
console.log("Increment x++ = " ,num1++,num1,++num1,num1);
console.log("Decrement x-- = ", num1--);

// JS Assignment Operators
/* 
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y 
*/
let num8 = 10;
num8 += 10;
console.log(num8);

num8 -= 10;
console.log(num8);

num8 *= 10;
console.log(num8);

num8 /= 10;
console.log(num8);

num8 **= 3;
console.log(num8)

num8 %= 55;
console.log(num8);

//Comparison Operator
/* Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator */
let x = 5;
console.log(x==8);
console.log(x==5);
console.log(x==5.0);
console.log(x == '5');

console.log(x===8);
console.log(x===5);
console.log(x===5.0); //all types of number with .0 stored as the whole number.
console.log(x === '5');

console.log(x!=8);
console.log(x!=5);
console.log(x!="5");

console.log(x!==8);
console.log(x!==5);
console.log(x!=="5");

console.log(x<8, x<"8");
console.log(x<1, x<"1");

console.log(x>8, x>"8");
console.log(x>1, x>"1");

console.log(x<=8, x<="8");
console.log(x<=1, x<="1");

console.log(x>=8, x>="8");
console.log(x>=1, x>="1");