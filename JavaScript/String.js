//Strings are used to store texts.
// Strings can be written with '' or "" or  ``
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
let carName3 = `Volvo xc60`;  // Backticks (Template Strings)
let tem_str = `This is a test {$}`;
console.log(carName1,carName2,carName3, typeof carName3);

//Single qoutes can be used inside double quotes and vise versa.
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1,"\n", answer2, "\n", answer3); 

//String length
console.log(answer1.length);
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lth = text.length;
console.log(lth);

//Escape Characters: we can use \ to use "" in side "" or '' inside ''
//The backslash escape character (\) turns special characters into string characters:
text =  "We are the so-called \"Vikings\" from the north. \a";
console.log(text);

//Escape sequences
console.log(answer1,"\b",answer2);
console.log(answer1,"\f",answer2);
console.log(answer1,"\n",answer2);
console.log(answer1,"\r",answer2);
console.log(answer1,"\t",answer2);
console.log(answer1,"\v",answer2);

text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

//String as object
let x = "John";
let y = new String("John");
console.log(x==y, x===y);

let x1 = new String("John");
let y1 = new String("John");

console.log(x1==y1, x1===y1);


// JavaScript String Methods
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

/* String length String charAt()
String charCodeAt() String at() String [ ]
String slice() String substring() String substr() */

/* String Search Methods String Templates
String toUpperCase() String toLowerCase()
String concat() String trim() String trimStart() String trimEnd()
String padStart() String padEnd() String repeat() String replace()
String replaceAll() String split() */

//The length property returns the length of a string:
text = "HELLO A WORLD";
console.log(text.length);

//Extracting String Characters There are 4 methods for extracting string characters:
//at(position)
console.log(text.at(6))
console.log(text.charAt(6))
console.log(text.charCodeAt(6))  //returns a UTF-16 code 
console.log(text[6])

// at supports negative index but charat doesnot
console.log(text.at(-2));
console.log(text.charAt(text.length-2));

// [] Property access might be a little unpredictable:
//If [] doesn't found any character it returns undefined, charAt returns empty string
// It is read only. str[0] = "A" gives no error (but does not work!)

text[0] = "A";    // Gives no error, but does not work
console.log(text);

//Extracting String Parts
// 1. slice(start, end) extracts a part of a string and returns the extracted part in a new string.
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);
console.log(text.slice(7)); //ommiting second element will slice rest of the string
console.log(text.slice(-7));
console.log(text.slice(-12, -6));

//2. substring(start, end) here start and end values less than 0 are treated as 0 in substring()
console.log(text.substring(7,13));
console.log(text.substring(7));
console.log(text.substring(-7));
console.log(text.substring(-12, -6));

//3. substr(start, length) the second parameter specifies the length of the extracted part
console.log(text.substr(7,6));
console.log(text.substr(7));
console.log(text.substr(-7));
console.log(text.substr(-12, 6));

// Converting to Upper and Lower Case
console.log(answer1.toUpperCase());
console.log(answer1.toLowerCase());

// JavaScript String concat()
let constr1 = answer1.concat(" ", carName1, " gidjbhd", "vdhhd", text.slice(7,13));
let constr2 = answer1 + " "+carName1+" gidjbhd"+ "vdhhd"+text.slice(7,13);
console.log(constr1, "\n", constr2);

// JavaScript String trim()
//trim() method removes whitespace from both sides of a string
//trimStart() removes whitespace only from the start of a string.
//trimEnd() removes whitwspaces only from the end of a string.
let text1 = "      Hello World!      I am Shipon   ";
let text2 = text1.trim();
console.log(text2);
let text3 = text1.trimStart();
console.log(text3);
let text4 = text1.trimEnd();
console.log(text4);

//JavaScript String Padding: It pads a string with another string (multiple times) until it reaches a given length.
let text5 = "5555";
let text6 = text5.padStart(10,"0");
let text7 = text5.padEnd(4,"1");
console.log(text6, text6.length);
console.log(text7, text7.length);

//JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
let text8 = "Shipon";
let text9 = text8.repeat(5); //will return Shipon 5 times.
console.log(text9, text9.length);

//Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let text10 = "Please visit Microsoft!";
let Text11 = text10.replace("Microsoft", "W3Schools");
console.log(Text11);
//By default replace is case sensative and replace only the first match.
//to replace case insensative we need to use an RE with /i flag. and to replace all /g flag.
let text12 = text10.replace("MICROSOFT","W3Schools");
console.log(text12);
let text13 = text10.replace(/MICROSOFT/i, "W3Schools");
console.log(text13);
text10 = "Please visit Microsoft! And see the course offered by Microsoft.";
Text11 = text10.replace("Microsoft", "W3Schools");
console.log(Text11);
Text11 = text10.replace(/Microsoft/g, "W3Schools");
console.log(Text11);

// JavaScript String ReplaceAll()
console.log(text10.replaceAll("Microsoft","Website"));
console.log(text10.replaceAll(/Microsoft/g,"Website"));

//JavaScript String split()
console.log(text10.split("!")); //returns an array.
console.log(text10.split(" "));
console.log(text10.split("")); //all character is splitted.