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
