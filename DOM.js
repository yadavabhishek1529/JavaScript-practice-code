 //DOM(document object model):
//console.dir(document);
/*
let header = document.getElementById("heading");
console.log(header);

let className = document.getElementsByClassName("byclass");
console.log(className);

let tagName = document.getElementsByTagName("button");
console.log(tagName);
*/
/*
let div = document.querySelector("div");
console.log(div);

let val = div.getAttribute("id");
console.log(val);

let para = document.querySelector("p");
console.log(para.getAttribute("id"));
*/
/*
let para = document.querySelector("p");

let val = para.setAttribute("fact", "abhi");
console.log(val);
*/

    // Practice Q.
/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText += " from Apna College students.";
console.dir(h2.innerText); */

   // Practice Q.
/*let divs = document.querySelectorAll(".box");
let idx=1;
for(let div of divs) {
    div.innerText = (`new unique value of box ${idx}`);
    idx++;
} */
   // DOM Part-2 :=  // getAttribute(attr) method := //to get the attribute value
/* let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.dir(id);

let name = div.getAttribute("name");
console.dir(name);

let para = document.querySelector("p");
console.dir(para.getAttribute("class")); */
   // setAttribute(attr,value) method := //to set the attribute value th
/* let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

let div = document.querySelector("div");
let newdiv = div.setAttribute("id","newId");
console.dir(newdiv);  */

    // style //node.style (for getting the styling details.)
/* let div = document.querySelector("div");
console.dir(div.style);*/
/*
let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.color = "white";
div.innerText = "Hello!";  */

    // Insert elements :
/* let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);  */
/*
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hii, I am new!</i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();   */

    //Practice Q.
/* let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let insertBtn = document.querySelector("body");
insertBtn.prepend(newBtn);*/

    //Practice Q.
// let content = document.querySelector("p");

 // write this lines on the console window in browser's page.
 /*
content
content.classList
content.classList.add("newClass");
 // for removing :=
 // content.classList.remove("newClass");
*/

let div= document.querySelector("div");

div.style.backgroundColor = "lightgreen";
div.innerText = "Hello Abhi!";                         
div.style.fontSize = "15px";
