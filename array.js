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
let userdetails ={
    name:"Walter white",
    age:50,
    city:"california",
    address:{
        area:"Amsterdam",
    }

}
console.log(userdetails.address.area);