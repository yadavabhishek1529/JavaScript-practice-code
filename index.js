/*const Employee = {
    fullName : "Abhishek Yadav",
    Dept : "IT",
    Age : 21,
    salary : 45000,
    isWork : true,
};

Employee["fullName"] = "Rahul Sharma";
console.log(Employee["fullName"]);*/

// creating insta profile object :-
/*const Profile = {
    username : "raoabhi_007",
    fullName : "Abhishek Yadav",
    Followers : 4156,
    following : 756,
    isFollow : true,
    occupation : "Enterpreneur",
    Bio : "God knows what you need, Just trust on him.| Rao_sahab | JecrcU'26",
};*/

// Arithmetic operators 
/*let num1 = 5;
let num2 = "5";

console.log("num1 =", num1 , "num2 =", num2);
console.log("num1+num2 = ", num1+num2);
console.log("num1-num2 = ", num1-num2);
console.log("num1*num2 = ", num1*num2);
console.log("num1/num2 = ", num1/num2);
console.log("num1%num2 = ", num1%num2);   //modulus
console.log("num1**num2 = ", num1**num2); //exponentiation*/

//Unary operator :-
/*console.log("++num1=", ++num1); //pre increment
console.log("num1=",num1);

console.log("num1++ =", num1++); //post increment
console.log("num1=",num1);

console.log("--num1=", --num1); //pre decrement
console.log("num1=",num1);

console.log("num1-- =", num1--); //poSt decrement
console.log("num1=",num1);*/

//Assignment operator
/*num1= 6;
num1+= 2;
console.log(num1);
num1-= 2;
console.log(num1);
num1*= 2;
console.log(num1);
num1/= 2;
console.log(num1);
num1%= 2;
console.log(num1);
num1**= 2;
console.log(num1);*/

//Comparison operator 
/*console.log("num1 != num2", num1 != num2);
console.log("num1 !== num2", num1 !== num2);
console.log("num1 === num2", num1 === num2);
console.log("num1 <= num2", num1 <= num2);
console.log("num1 >= num2", num1 >= num2);*/

//Logical operators
/*let num1 = 5;
let num2 = 5;
console.log(num1>=num2 && num1!=num2);
console.log(num1>=num2 || num1==num2);
console.log(![num1>=num2]);*/
/*
let age = 15;
if(age >= 18) {
    console.log("You Can Vote....!");
}
if(age < 18) {
    console.log("You Cannot Vote....!");
}*/

/*let mode="dark"
let color;

if(mode =="dark"){
    color = "black";
}
if(mode =="light"){
    color = "white";
}
console.log(color); */

/*let num = 13;
if(num%2===0){
    console.log(num, "is an even number");
}
else{
    console.log(num, "is an odd number");
}*/
/*
let mode= "dark";
let color;

if(mode === "dark"){
    color = "black";
}
else if(mode == "blue"){
    color= "blue";
}
else if(mode == "pink"){
    color = "pink";
}
else{
    color="white";
}
console.log(color);*/

//Ternary operator
/*let age = 20;
result = age >= 18 ? "adult": "not adult";
console.log(result);*/

//Q. Get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not.
/*let number = prompt("Enter a Number :");
if(number %5 === 0){
    console.log(number,"is multiple of 5.");
}
else{
    console.log(number,"is not a multiple of 5.")
}*/

//Q. write a code which can give grades to students according to thier scores. 
/*let marks = prompt("enter marks ");

if(marks>=100 && marks<=90){
    console.log("Grade : A")
}
else if(marks<=89 && marks>=70){
    console.log("Grade : B")
}
else if(marks<=69 && marks>=60){
    console.log("Grade : C")
}
else if(marks<=59 && marks>=50){
    console.log("Grade : D")
}
else if(marks<=49 && marks>=0){
    console.log("Fail")
} */

/*for (let i=1; i<=5; i++){
    console.log("Hello Abhi bro..!!")
}*/

//Calculate sum of first n numbers.
/*let num = 10;
let sum = 0;
for(let i=0; i<=num; i++){
    sum = sum+i;
}
console.log(sum); */

//For-of Loop :-
/*let length=0;
let str = "Hello My brother Abhishek :";
for(let val of str){
    console.log(val);
    length++;
}

console.log("length of str is:", length); */

// For-in Loop :-
/*let student = {
    name : "Abhishek yadav",
    age : 25,
    Batch : "BCA 2025",
    specialization : "Data science and data analytics",
    isPass : true
};
for(let key in student){
    console.log("key=", key , "value=",student[key]);
}*/

//Q. Print all the even numbers from 0 to 100.
/*for (let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}    */

/*    Q. : Create a game where you can start with any random game number. 
Ask the user to keep guessing the game number until the user enters correct value.   */
/*let number = 9;
guessing_num = prompt("Guess a number");

while(number != guessing_num){
    guessing_num = prompt("you entered a wrong number. Guess again.");
}
console.log("Congratulations, you guess a right number.");*/

//stings :-
/*
let str = "Apna college";
console.log(str);

console.log("length of string is :", str.length);

console.log(str[0],str[5]);
*/
//Template literals :-
/*
let specialString = `this is a template literal.`;
console.log(specialString);
*/
//Ex of Template literals :-
/*let obj = {
    name : "pen",
    price : 10,
};

let output = `The cost of ${obj.name} is ${obj.price} rupees.`;
console.log(output);    */

//Arrays in JS :-
/*let marks = [96,84,79,91,89];
console.log(marks[0]);*/

//Looping over an array.
/*let students = ["Abhishek","Abhinav","Anmol","Yadvendra","Prajjwal","Rishi"];

let marks = [97,84,79,91,86,78];
for(let idx=0; idx<marks.length; idx++){
    console.log(students[idx],"=", marks[idx]);
} */

    // access elements using For-of loop. :-
/*let cities = ["Jaipur","Tonk","Bundi","Ajmer","Delhi","Pune"];
for(let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
} */

    //Practice Q.
/*let sum=0;
let stu_marks = [85,97,44,37,76,60];
for (let val of stu_marks){
    sum += val;
}
let result = sum/stu_marks.length;
console.log(result); */

    //Practice Q.2 :-
/*let prices = [250,645,300,900,50];
for (let price of prices){
    let discount_price = price/10;
    let final_price = price-discount_price;
    console.log(final_price);
}*/
   //Another way to solve previous question.
/*let items = [250,645,300,900,50];
for(let i=0; i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);  */

   //Array methods in JS 
   //Push() method :=
/*let foodItems = ["Burger","petties","momos","sandwich"];
foodItems.push("tandoori petties","aloo-tikki"); //add new values in last using push() method.
console.log(foodItems);
   //pop() method :=
let deleteItem = foodItems.pop(); //delete last value using pop() method.
console.log(foodItems);*/

   //concat() method:=
/* let veggies = ["potato","tomato","onion"];
let fruits = ["apple","banana","litchi",];
let junkFoods = ["burger","petties","sandwich"];

let foods = veggies.concat(fruits,junkFoods);
console.log(foods);    */

   //unshift() method in jS :=
// let foodItems = ["Burger","petties","momos","sandwich"];

/*foodItems.unshift("petties"); //add value in the starting of array.
console.log(foodItems);*/

/*foodItems.shift();  //Deleting the value from the starting of array.
console.log(foodItems); */

/* let result = foodItems.slice(1,4);
console.log(result);*/

    //Practice Q.
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
/* companies.shift();  //Remove first company name from the array.
console.log(companies); */

/* companies.splice(2,1,"Ola");  //Add "Ola" on the place of "Uber".
console.log(companies); */

/* companies.push("Amazon");
console.log(companies); */

    // Functions in JS
/* function myFunction(){
    console.log("Hello my brother Abhishek...!!");
    console.log("you will definitely get a job my brother. Don't worry!!");
}
myFunction(); */

/*function myFunction(x,y){
    s = x+y;
    return s;
}
sum = myFunction(67,89);
console.log(sum); */

/*function myFunction(x,y,z) {
    console.log(x+y+z);
}
myFunction(74,81,90); */

/*const arrowsum = (a,b) => {
    console.log(a+b);
}
arrowsum(65,34);
const mul = (x,y) => {
    console.log(x*y);
}
mul(40,5);

const printHello = () => {
    console.log("Hello !");
}
printHello();*/ 

    // count vowels in a string using passing parameter in functions. 
/*function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
countVowels("Abhishek Yadav");  */

    //using arrow function:-
/* const countVowels = (str) => {
    let count = 0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
countVowels("abhishek Yadav");   */

/*let numbers = [4,8,6,3];
numbers.forEach((val) =>{
    console.log(`value of square is: ${val*val}`);
});  */

    //
/*let arr = [1,2,3,4,5,6,7,8];
    //filter method using arrays in JS. :=
let newArr = arr.filter((val) =>{
    return val%2===0;
})
console.log(newArr);  */

    //Reduce method in arrays :=
/* let arr = [1,2,3,4];
const output = arr.reduce((res, curr) => {
    return res+curr;
});
console.log(output);  */

   //Practice Q:=
/* let n= prompt("Enter the value of n ");
let arr = [];

for(let i=1; i<=n; i++) {
    arr[i-1]= i;
}

console.log(arr);

let sum=arr.reduce((res, curr) => {
    return res+curr;
});
console.log("sum =",sum);

let factorial=arr.reduce((res, curr) => {
    return res*curr;
});
console.log("factorial =",factorial);  */
/*
const x=[];
x[4] = 1;
x.forEach((i) => {
    console.log("Hii");
})
*/

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

    //Classes and objects:
/* const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("Tax rate is 20%");
    }
};
const karanArjun1 = {
    salary : 50000,
};

karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;  */
/*
class toyotaCar{
    constructor(brand, mileage){
        console.log("creating new object");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let fortuner = new toyotaCar("fortuner",10); //automatically invoked constructor method by default firstly.
// fortuner.setBrand("fortuner");
console.log(fortuner);

let lexus = new toyotaCar("lexus",12); //automatically invoked constructor method by default firstly.
// lexus.setBrand("lexus");
console.log(lexus);
*/

/* class parent {
    hello() {
        console.log("Hello my brother!");
    }
}
class child extends parent{}

let obj = new child();  */
/*
class person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("d0 nothing!");
    }
}
class Engineer extends person{
    constructor(name){
        super(name); //to invoked class constructor.
    }
    work(){
        super.eat();
        console.log("solve problems and also build something!");
    }
    //Note : if child & parent have same method, then child's method will be used.[method overriding]
}
class Doctor extends person{
    work(){
        console.log("treat patients and provide them medicines as well!");
    }
}

let abhiObj = new Engineer();
let abhiObj1 = new Doctor();
// let enggObj = new Engineer("Abhishek");
*/

    //Practice Q.
/*
let data = "secret information";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data =",data);
    }
}

let newUser1 = new user("abhishek","abhishek.23bcan0418jecrcu.edu.in");
// console.log(user.viewData(user));
let newUser2 = new user("abhinav","abhinav.23bcan0682@jecrcu.edu.in");
console.log(newUser1.viewData());
*/
    //practice Q part-2 :
/* let data = "secret information";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data =",data);
    }
}
class admin extends user{
    constructor(name,email) {
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}
let admin1 = new admin("admin","admin@college.edu.in"); */
/*
    //try-catch method for error handling.
let a = 10;
let b = 5;

console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
console.log("a-b =",a-b);
try{
console.log("a+c =",a+c);
}
catch(err){
    console.log(err);
}
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);    
*/

    //Callbacks, Promises & Async-await:
// Ex.of synchronous :
/* console.log("one");
console.log("two");
console.log("three");  */

// Ex.of Asynchronous :
/* console.log("one");
console.log("two");
console.log("three");
setTimeout(() => {
    console.log("Hello!");
},2000);       //Timeout 2S = 2000MS
console.log("four");
console.log("five");
*/

    //Callbacks in JS
/* function sum(a,b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a,b);
}
calculator(5,2,sum); // Callback function : callback function is a function passed as an argument to another function.
*/

// function getData(dataId, getNextData){
//     setTimeout(() => {  //2s
//         console.log("data", dataId);
//         getNextData();
//     },2000);
// }
// getData(1, () => {
//     getData(2);
// });

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(2,7,sum);
/*
const hello =() =>{
    console.log("Hello!");
}
setTimeout(hello, 3000);      //3s 
*/
/*
function getData(dataId, getNextData){
    setTimeout(() =>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
} 
getData(1, () => {          //Ex. of Callback hell.
    getData(2, () =>{
        getData(3, () =>{
            getData(4);
        });
    });
});
*/


    //Promises : it is a solution to callback hell.
/* let promise = new Promise((resolve, reject) => {
    console.log("I am a promise!");
    //resolve(123);
    reject("some error occurred!");
});    */
/*
function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        console.log("Data",dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    },5000);
    });
} 
let promise = getData(123);
console.log(promise);   // in this step we recieve a pending data in the promise. 
                        //but after completing setTimeout we recive data of dataId then we will recieve a fulfilled value that is "success".
*/

/*
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am promise");
        //resolve("success");
        reject("error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled",res);
});

promise.catch((err) => {
    console.log("rejected",err);
});
*/

/*
    //Ex of promise chaining:
const asyncFunc1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        },3000);
    });
}
const asyncFunc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        },3000);
    });
}

console.log("fetching data1....");
let p1 = asyncFunc1();                    //promise chain 
p1.then((res) => {
    console.log("fetching data2....");
    let p2 = asyncFunc2();
    p2.then((res) => {});
});
*/

/*
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}
getWeatherData();
*/

/*
    //EX :
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataId);
            resolve(200);
        },2000);
    });
}

async function getAllData() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    console.log("getting data 4...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
}

getAllData();

    //Ex of IIFE(Immediately invoked function expression) : It use only one time in our code.
    // IIFE is a function that is called immediately as soon as it is defined.
(async function getAllData() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    console.log("getting data 4...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
})();
*/


    //Fetch API(Application programming interface)
const URL = "https://api.thecatapi.com/v1/images/search";
let getPara = document.querySelector("#fact");
let getBtn = document.querySelector("#btn");

const getFacts = async () =>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);    //JSON format
    let data = await response.json();
    getPara.innerText = data[0].text;
};

getBtn.addEventListener("click",getFacts);
