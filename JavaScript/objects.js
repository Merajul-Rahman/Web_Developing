// JavaScript object is a data structure that allows us to have key-value pairs; 
// so we can have distinct keys and each key is mapped to a value that can be of any JavaScript data type
//All JavaScript values, except primitives, are objects.


//An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

console.log(user1, typeof user1);
console.log(user2, typeof user2);

//object properties as key value pairs
let car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};
console.log(car,typeof car, car.type, car["model"], typeof car.color);

//create a object then assign values
// Create an Object
const person = {};
console.log(person);
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);

//Properties: The named values, in JavaScript objects, are called properties.
// You can access object properties in two ways:
// objectName.propertyName
// objectName["propertyName"]
console.log(person.firstName,person["age"]);

//Methods: Methods are actions that can be performed on objects.
// Methods are function definitions stored as property values.
person.fullName = function(){
    return this.firstName+" "+this.lastName;
}
console.log(person.fullName());

//Properties delete
delete person.age;
console.log(person);
//use multiword property names
let p2 ={
    "first name":"Merajul",
    lastName: "Shipon",
    age: 25,  //last properties may end with ,. its called tailoring comma
}
console.log(p2["first name"]);
p2["Middle Name"]="Rahman";
console.log(p2);

//computed properties
let fruit = "apple";
let bag = {
    [fruit]: 5
}
console.log(bag);

fruit = "orange"
let bag2 ={}
bag2[fruit] = 10;
console.log(bag2);
bag[fruit] = 8;
console.log(bag);

bag[fruit+"computed"] = "ygsdui";
console.log(bag);


//Property value shorthand
//In real code, we often use existing variables as values for property names.
function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user3 = makeUser("John", 30);
  console.log(user3.name); // John
  
function makeUsershort(name, age) {
    return {
        name, // same as name: name
        age,  // same as age: age
        // ...
    };
}
let user4 = makeUsershort("Shipon",25);
console.log(user4);

//we can use numbers as properties, it will treated as string
let obj ={
    0:"ejhfdvhi",
    1:"khjdvbhb",
}
console.log(obj, obj[0], obj["1"]);  //[0] = ["0"]

// in operator to   check property existamce
let key1 = "age";
let user5 = { name: "John", age: 30 };
console.log("name" in user5, "test" in user5, key1 in user5);

//the for..in loop
let user6 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
for (let key2 in user6) {
    console.log(key2," = ", user6[key2]);
}

//ordered like an object: integer properties are sorted, others appear in creation order. 
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code, codes[code]); // 1, 41, 44, 49
  }

//Nested Objects
let myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}

console.log(myObj.myCars,"\n",myObj.myCars.car1,"\n",myObj["myCars"].car2, "\n", myObj["myCars"]["car3"]);


//JS OBJECT DISPLAY
/* Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values() Object.values() creates an array from the property values:
object.entries()
Displaying the Object using JSON.stringify() */

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person);
  console.log(myArray);

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "\n";
}
console.log(text);

console.log(JSON.stringify(person));

X = JSON.stringify(person);



// //JavaScript Object Constructors
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Bangladeshi",
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person("Merajul","Rahman",25,"Brown");
let person2 = new Person("Merajul","Rahman",25,"Brown");
let person3 = new Person("Nusrat","Zaman",23,"Black");

console.log(person1,"\n",person2,"\n",person3);
console.log(person2.fullName());

//You can NOT add a new property to an object constructor:
// To add a new property, you must add it to the constructor function prototype:
Person.prototype.religion = "Islam";
console.log(person2.religion);
let person4 = new Person("Merajul3","Rahman",25,"Brown");
console.log(person4.religion, person3);

//method to a constructor
Person.prototype.changeName = function (name) {
    this.lastName = name;
  }
person1.changeName("Shipon");
console.log(person1);

//Built in JS Constructors
/* new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object */