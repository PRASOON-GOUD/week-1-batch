// let element = document.getElementById("demo");
// element.innerText = "Dom";
// console.log(element);
// let div = document.getElementById("test");
// div.innerHTML ="<h1>Header</h1>"
// console.log(div);


// let ele  = document.getElementsByClassName("test");
// ele[0].style.backgroundColor="yellow" 
// let x=[...ele];
// console.log(x, Array.isArray(x));
// x.map((element)=>{
//     element.style.backgroundColor="teal";
// })

// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementsByName("username");
// console.log(ele);


// let ele= document.querySelectorAll(".test");
// [...ele].map(element=>{
//     console.log(element.innerText);

// })
let bgcolor = document.querySelectorAll(".bgcolor");
[...bgcolor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor=element.innerText;

    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor="transparent";
    })

})

