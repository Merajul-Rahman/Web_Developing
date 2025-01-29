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

/* Logical Assignment Operators
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y) if x == true then assign x = y else it remains unchanged.
||=	x ||= y	x = x || (x = y) If x is falsy (e.g., false, 0, "", null, undefined, or NaN), then x is assigned the value of y.
??=	x ??= y	x = x ?? (x = y) If x is null or undefined, then x is assigned the value of y.    */

let lao1 = 10;
lao1 &&= 5;
console.log("Logical",lao1);
let lao2 = 0;
lao2 &&= 5;
console.log("Logical",lao2);

let lao3 = 10;
lao3 ||= 5;
console.log("Logical",lao3);
let lao4 = 0;
lao4 ||= 5;
console.log("Logical",lao4);

let lao5 = 0;
lao5 ??= 5;
console.log("Logical",lao5);
let lao6 = null;
lao6 ??= 5;
console.log("Logical",lao6);



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

let text, age=19;
if (age < 18) text = "Too young to vote";
else text = "You can vote";
console.log(text);

console.log(2 < 12, 2 < "12", 2 < "John", 2 > "John", 2 == "John", "2" < "12", "2" > "12", "2" == "12");


// Conditional (Ternary) Operator
age = "55"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";  //ternary operator
}
console.log(voteable);

// Logical Operator
/* Operator	Description	Example	
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true */
let a = 5, b = 8;
console.log(a<10 && b>1);
console.log(a == 1 || b ==5);
console.log(!(a==b));

// The Nullish Coalescing Operator (??)

/* The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second argument. */

let name = null;
let text1 = "missing";
let result = name ?? text1;
console.log(name, text1, result);

let name2 = "Shipon";
console.log(name2??text1);

// The Optional Chaining Operator (?.)
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
console.log(car?.name);
console.log(car?.color);



// JavaScript Type Operators
// Operator	Description
// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type
console.log(typeof 45);



// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	Description	Example	Same as	Result	Decimal
// &	AND	5 & 1	0101 & 0001	0001	 1
// |	OR	5 | 1	0101 | 0001	0101	 5
// ~	NOT	~ 5	 ~0101	1010	 10
// ^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
// <<	left shift	5 << 1	0101 << 1	1010	 10
// >>	right shift	5 >> 1	0101 >> 1	0010	  2
// >>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
console.log(5&1);
console.log(5|1);
console.log(~+5);
console.log(5^1);
console.log(5<<1);
console.log(5>>1);
console.log(5>>>1);