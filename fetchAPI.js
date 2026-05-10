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