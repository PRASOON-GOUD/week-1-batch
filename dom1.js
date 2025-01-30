// let x =document.createElement("h1");
// x.innerText="Dynamic creation of html element from js";
// x.setAttribute("id","demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src="download.jpeg";
// console.log(image);
// document.body.appendChild(image);
// let mainEle = document.createElement("div");
// mainEle.setAttribute("class", "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");




// let image = document.createElement("img");
// image.src="./images.jpg";
// image.width="400";
// image.height="300";

// let bottomEle= document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText="Heading";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form=document.querySelector("form");
let username=document.getElementById("uName");
let password=document.getElementById("uPass");
let check=document.getElementById("check");
let gender =document.getElementsByName("gender");

check.addEventListener("click",event=>{
    if(event.target.checked== true){
        password.setAttribute("type","text");
        show.innerText="hide password";

    } else{
        password.setAttribute("type", "password");
        show.innerText="show password"
    }
})

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un= username.value;
    let up = password.value;
    let gender="";

    for(let i=0;i<=gender.length-1;i++){
        if(gender[i].checked == true){
            gender += gender[i].value;
        }
    }
let userDetails={
    un,up,gender
};
console.log(userDetails);
})
