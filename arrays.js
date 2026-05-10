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
let items = [250,645,300,900,50];
for(let i=0; i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);  