const users=["jon","snow","rob","arya"];
users.push("sansa");
console.log(users);

users.pop("snow");
console.log(users);

users.unshift("Ned");
console.log(users);

users.shift(" ");
console.log(users);

users.reverse();
console.log(users);

console.log(users.join(" "));

let frontend=["Html","css","JavaScript","angular"];
let backend=["Java","Sql","Node"];
let fullstack = frontend.concat(backend);
console.log(fullstack.join(" "));

//objects
function call(){
let userdetails ={
    name:"Walter white",
    age:50,
    city:"california",
    address:{
        area:"Amsterdam",
    }

}
document.writeln(userdetails.name);
document.writeln("<br>");
document.writeln(userdetails.age);
document.writeln("<br>");
document.writeln(userdetails.city);
document.writeln("<br>");
document.writeln(userdetails.address.area);
}