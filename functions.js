 // Functions in JS
/* function myFunction(){
    console.log("Hello my brother Abhishek...!!");
    console.log("you will definitely get a job my brother. Don't worry!!");
}
myFunction(); */
/*function sum(a,b){
    return a+b;
}

let res = sum(1,2)
console.log(res)*/

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

const countVowels = (str) => {
    let count = 0;
    for(let char of str){
        if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count ++;
        }
    }
    console.log(count);
}

countVowels("Abhishek Yadav");  // output : 5