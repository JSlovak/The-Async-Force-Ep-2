/*jshint esversion: 6 */

function getData(){
  const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function(){
          const reqData = JSON.parse(this.responseText);
         console.log(reqData);
        });
        oReq.open('GET','http://swapi.co/api/');
        oReq.send();
}

getData();

function linkTest(){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener ('load', function(){
          const reqData = JSON.parse(this.responseText);
        });
    oReq.open('GET', 'http://swapi.co/api/planets/1/');
    oReq.send();
}

linkTest();

function fetch(category, num){
   const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function(){
          const reqData = JSON.parse(this.responseText);
          const result = reqData.name;
          post(result);

        });
        oReq.open('GET',`http://swapi.co/api/${category}/${num}/`);
        oReq.send();
}

function post(query){
  let put = document.querySelector("#contentContainer");
  put.innerHTML = `${query}`;
}

let test = fetch("planets","1");
let test2 = fetch("people","4");

let request = document.querySelector("#requestResourceButton");
let category = document.querySelector("#resourceType").value;
console.log(category);
let id = document.querySelector("#resourceId").value;
console.log(id);

request.addEventListener("click", function(){
  // fetch("people","4");
  console.log(id);
  console.log(category);
  console.log("Success");
});

