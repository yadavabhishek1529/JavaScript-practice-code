// Conditional Statements
if(age >= 18) {
    console.log("You Can Vote....!");
}
if(age < 18) {
    console.log("You Cannot Vote....!");
}

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
/* let number = prompt("Enter a Number :");
if(number %5 === 0){
    console.log(number,"is multiple of 5.");
}
else{
    console.log(number,"is not a multiple of 5.")
}*/

//Q. write a code which can give grades to students according to thier scores. 
let marks = prompt("enter marks ");

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
} 