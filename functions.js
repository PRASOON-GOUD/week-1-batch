// function demo(){
//     console.log("I am UNPREDICTABLE");
// }
// demo();
function f(){
    alert("Added to Cart Succesfully");
}
f();

// function add1(a,b){
//     console.log(a+b);
// }
// add1(5,6);
// add1(9,3);
// add1(8,4);

// function isPalindrome(str){
//     let revStr = "";
//     for(let i=str.length-1;i>=0;i--){
//         // console.log(str[i]);
//         revStr += str[i];
//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not Palindrome");
//     }
// }
// isPalindrome("sir")
// isPalindrome("malayalam")
// isPalindrome("madam")

// 1) function expression for anonymous
// let x = function(){
//     console.log("Function expression");
// }
// x();

// // 2)
// (
//     function(){
//         console.log("IIFE");
//     }
// )();


// // arrow function
// let y = _=>{console.log("Hello");
// }
// y();

// let z = a=>{console.log(a);
// } 
// z(10);

// function add(a,b){
//     return a+b;
// }
// add(10,9);


function add(callback){
    return callback(5,3);
}
let x = add(function(a,b){return a+b});
console.log(x);

let users=["fuck", "you","bastard"];
// for(let i= 0; i<users.length;i++){
    // console.log(users[i]);

 // }
// let y = users.map((user)=>{
//     return user;
// });
// console.log(y);

// var a= 10;
// let b= 30;
// function z(){
//     var user = "Jon snow";
//     let comapany="Got";
//     const salary=200000000000000000;
//     console.log(user);
//     console.log(comapany);
//     console.log(salary);
//     console.log(a);
//     console.log(b);
// }
// z();

function m(){
    var a= 10;
    let b =20;
    console.log(a , b);
    function n(){
        let p ="js";
        let q = "React";
        console.log(p,q);
        function o(){
            const username="PRASOON";
            console.log(username);
            console.log(a);
            console.log(p);
        }
        o();
    }
    n();
}
m();

