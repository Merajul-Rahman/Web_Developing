function print(v)
{
    console.log(v);
}

const persons = ["Shipon", "Nusrat", "Meraj"];

persons[3] = "Rahman";

//access full array
console.log(persons);

//access one element 
console.log(persons[2]);

//array to string
const st = persons.toString()
console.log(st);

//string to array
console.log(st.split(','));

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
console.log(typeof persons);
//array use number to access its elements
const person1 = {firstName:"John", lastName:"Doe", age:46};
const person2 = ["John", "Doe", 46];
console.log(person1['firstName']+ " " + person2[1]);

//array properties and methods
console.log(persons.length);
console.log(persons.sort());

//looping through an array
for (let i=0; i < persons.length;i++)
{
    console.log(persons[i]);
}

//using for each
persons.forEach(func1);

function func1(v){
    console.log(v);
}


//adding array elements
persons.push("Zaman");
print(persons);
persons[persons.length] = "Nusu";
print(persons);

persons[10] = "gdwh";
print(persons);

//creating a array with single element
const a1 = [10];
const a2 = new Array(10); //will creatw an array of size 10 with 10 undefined elements

print(a1.length + " " + a2.length);

//check if an object is an array
print(Array.isArray(a1));  //using isarray
print(a2 instanceof Array);

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

print(myObj);
print(myObj['name'] + myObj.age + myObj.cars);  

for (let i in myObj.cars) {
    print(myObj.cars[i].name);
    for (let j in myObj.cars[i].models) {
      print(myObj.cars[i].models[j]);
    }
  }


  //Array Methods
  //array length
  let size  = persons.length;
  print(size);

  //tostring()
  let str1 = persons.toString();
  print(str1);

  //at()
let person3 = persons.at(2);
let person4 = persons[7];
print(person3);
print(person4);

//join()
let str2 = persons.join(";");
print(str2);

//pop
let person5 = persons.pop(); //pop removes the last element and returns the last element
print(person5);
print(persons);

let new_length = persons.push("dgvh") //The push() method adds a new element to an array (at the end): and returns the array length
print(new_length);

//shift
let p5 = persons.shift(); //removes the first element and returns it, also shifts all the element 1 index left.
print(p5);
print(persons);
//unshift
new_length = persons.unshift("New Name"); //adds a new element at begining and returns the array length
print(persons);
print(new_length);

//delete() delete leaves an undefined holes in the array. 
delete persons[3];
print(persons);
print(typeof persons[3]);

persons[3] = "Shipon";

//merging two array concat(a1,a2,a3.....)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3, "Random Strings");
print(myChildren);

//Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(1, 0);
print(fruits);
fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
print(fruits);

//JavaScript Array flat()
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
let myArr = [[1,2],[3,4],[5,6],[7,8,9,10]];
let newArr = myArr.flat();
print(newArr.length);

//flatmaps,  
myArr = [1, 2, 3, 4, 5, 6];
newArr = myArr.flatMap(x => [x, x * 10]);
print(newArr);

newArr = myArr.flatMap(x => [x, "P"+x]);
print(newArr);

/* Splicing and Slicing Arrays
The splice() method adds new items to an array.
The slice() method slices out a piece of an array to a new array. */

fruits.splice(2,0, "Lemon", "Kiwi");
print(fruits);
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
print(fruits);
//we can use splice to remove elements
fruits.splice(2,2);
print(fruits);

//to keep the original array unchanged and creating a ner array
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(2, 1);
print(months);
print(spliced);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3); //if only one parameter then take n to rest;
print(citrus);

//Array Search
// indexof array.indexOf(item, start) finds the first index
let pos = fruits.indexOf("Apple",0); //the item to search for, starting position
print(pos);
// /Array.indexOf() returns -1 if the item is not found.
print(fruits.indexOf("Litchi"));

//lastindexof finds the last intex of an item
// array.lastIndexOf(item, start)
fruits = ["Apple", "Orange", "Apple", "Mango"];
print(fruits.lastIndexOf("Apple"));

//Array includes() returns true if the item is in the aarray
fruits = ["Banana", "Orange", "Apple", "Mango"];
print(fruits.includes("Mango")); 

//Array find() returns the first array element that passes a test function
numbers = [4, 9, 16, 25, 29];
print( numbers.find(grt18));

function grt18(value, index, array) {
  return value > 18;
}

//findIndex() method returns the index of the first array element that passes a test function.
print(numbers.findIndex(grt18));
//findLast()
print(numbers.findLast(grt18));
//findLastIndex()
print(numbers.findLastIndex(grt18));

//Array Sorting Methods
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
print(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
print(fruits);

//to sort in descending order combine sort and reverse
fruits.sort().reverse();
print(fruits);

//toSorted() and toReversed() doesnt change the original array, creates a new sorted/reversed array

//Numeric sort. the default sort() only works for string. to do for numeric we need to use a comapare function
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
print(points)

//to sort descending
points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
print(points);

//sorting an array in random order // resuffeling
points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
print(points);

//Lowest of an array
//sort  and tthe first element or find manually
points = [40,100,10,5,1,25,6,7,9,44,52,20,10];
points.sort(function(a,b){return a-b} );
print("Smallest number = " + points[0]);
print("Largest number = " + points[points.length-1]);

//largest of an array
//sort and the last element

//manual
points = [40,100,10,5,1,25,6,7,9,44,52,20,10];
let min = points[0];
let max = points[0];
for(let i = 1; i<points.length; i++)
{
  if(min>points[i])
  {
    min = points[i];
  }
  if(max<points[i])
  {
      max = points[i];
  }
}
print(min);
print(max);

//using Math.min.apply
print(Math.min.apply(null, points));
print(Math.max.apply(null, points));

// Sorting Object Arrays using the manual function inside sort
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a,b){return a.year - b.year});
print(cars);

cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
print(cars);

//Array Iteration
//foreach() it calss a function for each element
let txt = '';
fruits.forEach(func2);
function func2(value, index, array)
{
  txt += value + "<br>";
}
print(txt);
txt = ""; 
function func3(value) //same
{
  txt += value + "<br>";
}
print(txt);

//map() creates a new array by performing a function on eacch element
const numbers1 = [45, 4, [9, 16], 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
print(numbers2);

//flatmap() first maps then creates an array by flatting
const myArr2 = [1, 2, [3, 4], 5, 6];
const newArr2 = myArr.flatMap((x) => x * 2);
print(newArr2);

//filter() creates a new array with elements that pass a test
let age = [1,5,3,8,9,7,20,51,23,58,62,12,8,5,98,12,18,19,25,17];
let under18 = age.filter(somefunction);
function somefunction(value)
{
  return value < 18;
}
print(under18);

//reduce runs a function on each element to produce a single value. works from left to right
let sum = age.reduce(somefunction,100);
function sumfunction(total, value)
{
  return total + value;
}
print(sum);
sum = age.reduceRight(sumfunction);
print(sum);

//Every() checks if all elements pass a test
print(age.every(somefunction));

//some checks if some elemets pass a test
print(age.some(somefunction));

//Array.form() returns array from any object with a length or any iterable object
//string to array
let strtoarr = Array.from("Abcdefghoiwhsoih65168");
print(strtoarr);

//keys()  method returns an Array Iterator object with the keys of an array.
let keys = Array.from(fruits.keys());
print(keys);

//entries The entries() method returns an Array Iterator object with key/value pairs:
let f = Array.from(fruits.entries());
print(f);

//with() changing without altering the original array (safe way)
let newmonths = months.with(2,"Shipon");
print(newmonths);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
print(year);

print(q1.concat(q2,q3,q4));