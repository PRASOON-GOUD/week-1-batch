// console.log("javascript is linked to html...")
// document.writeln("Javscript linked");

// var user = "Sam";
// user = "Miller"  //? re-intitialization
// console.log(user);

// let num = 1000;
// num = true;//? re-intitialization
// console.log(num);

// const dob= 1990;
// dob = 2000; //? re-intitalization is not possible
// console.log(dob);

// var a =10;
// var a =30; //! re-decalration
// console.log(a);

// let b= 20;
// let b=50;
// console.log(b);

// const c= true;
// const c =false;
// console.log(c);


let str1 = "double quotes";
console.log(str1);
console.log(typeof(str1));

let str2 = 'single quotes';
console.log(str2);
console.log(typeof(str2));
let str3 = `template literals`;
console.log(str3);
console.log(typeof(str3));

let num = 10.345678;
console.log(num , typeof(num));

let bool = true;
console.log(bool , typeof(bool));

let a;
console.log(a , typeof(a));

let b = null;
console.log(b , typeof(b));

// Non - primitive datatypes

function add(a, b) {
    return a + b;
  }

  let result = add(5, 10);
  console.log(result); 

  //functions
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); 

numbers.push(6);
console.log(numbers); 
 
//objects
let person = {
    name: "John",
    age: 30,
    gender: "Male",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  console.log(person.name);
  console.log(person.age);  
  

  person.greet();
  
  