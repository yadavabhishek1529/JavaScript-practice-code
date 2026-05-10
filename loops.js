
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
// Q. : Create a game where you can start with any random game number. 
// Ask the user to keep guessing the game number until the user enters correct value.   
let number = 9;
guessing_num = prompt("Guess a number");

while(number != guessing_num){
    guessing_num = prompt("you entered a wrong number. Guess again.");
}
console.log("Congratulations, you guess a right number.");
