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
let person5 = persons.pop();
print(person5);
print(persons);

persons.push("dgvh")