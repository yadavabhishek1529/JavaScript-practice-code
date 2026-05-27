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


    //EX :
/* function getData(dataId) {
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

// REVISE ALL THE METHODS 
/* function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(4, 8, sum); */
/*
function getData(dataId,getNextData) {
    setTimeout(()=> {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}                   // Callback hell
getData(1, () =>{
    getData(2, () =>{
        getData(3, () =>{
            getData(4)
        });
    });
});
*/
/*
const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("it is a promise");
        // resolve("success");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
})

promise.catch((err)=>{
    console.log("promise rejected",err);
}) */
/*
const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("it is a promise");
        // resolve("success");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
})

promise.catch((err)=>{
    console.log("promise rejected",err);
})
    */
   
/*
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout (() =>{
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data 1....");
asyncFunc1().then((res)=>{
    console.log("fetching data 2....");
    asyncFunc2().then((res)=>{});
});
*/
