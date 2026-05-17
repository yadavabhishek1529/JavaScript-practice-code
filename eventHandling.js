//Event handling in JS :-
/*let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button was clicked.");
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside in box.");
}   */
    //Example of an event object :
/*let btn = document.querySelector("button");
btn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
} */
   //Example of event listeners.
/*let btn = document.querySelector("button");
btn.addEventListener("dblclick", () => {
    console.log("Button was clicked 2 times.");
}) */
   //accessing event object with the event listeners.
/* btn.addEventListener("dblclick", (evt) => {
    console.log("Button was clicked 2 times.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
})*/

/*
let btn = document.querySelector("#btn");

btn.onclick = () =>{
    console.log("button is clicked");
} */

    //Example of remove event listeners.
/* let btn = document.querySelector("button");
btn.addEventListener("dblclick", () => {
    console.log("Button was clicked 2 times. - Handler1");
});
btn.addEventListener("dblclick", () => {
    console.log("Button was clicked 2 times. - Handler2");
});

const Handler3 = () => {
    console.log("Button was clicked 2 times. - Handler3");
};
btn.addEventListener("dblclick",Handler3);

btn.addEventListener("dblclick", () => {
    console.log("Button was clicked 2 times. - Handler4");
});

btn.removeEventListener("dblclick",Handler3);  */

    //Practice Q.
/* let modeBtn = document.querySelector("#mode");

let currMode = "light";
modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});*/
    //Another sufficient method to solve :
/* let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});  */
