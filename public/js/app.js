/*jshint esversion: 6 */

function getData(){
  const oReq = new XMLHttpRequest();
        oReq.addEventListener('load', function(){
          const reqData = JSON.parse(this.responseText);
         console.log(reqData);
        });
        oReq.open('GET','http://swapi.co/api/planets/');
        oReq.send();
}

getData();

// function linkTest(){
//     const oReq = new XMLHttpRequest();
//     oReq.addEventListener ('load', function(){
//           const reqData = JSON.parse(this.responseText);
//         });
//     oReq.open('GET', 'http://swapi.co/api/planets/1/');
//     oReq.send();
// }

// linkTest();

function fetch(category, num){
   const oReq = new XMLHttpRequest();

   if(category === "people"){
    oReq.addEventListener('load', function(){
      let reqData = JSON.parse(this.responseText);
      const personName = reqData.name;
      const personGender = reqData.gender;
      const personSpecies = reqData.species;
      post(personName, personGender, personSpecies);
      });
   }
   if (category === "planets"){
    oReq.addEventListener('load', function(){
      let reqData = JSON.parse(this.responseText);
      const planetName = reqData.name;
      console.log(planetName);
      const planetTerr= reqData.terrain;
      console.log(planetTerr);
      const planetPop = reqData.population;
      console.log(planetPop);
      post(planetName, planetTerr, planetPop);
      });
   }

  if (category === "starships"){
      oReq.addEventListener('load', function(){
      let reqData = JSON.parse(this.responseText);
      const starshipName = reqData.name;
      const starshipMan = reqData.manufacturer;
      const starshipClass = reqData.starship_class;
      post(starshipName, starshipMan, starshipClass);
      });
  }
  oReq.open('GET',`http://swapi.co/api/${category}/${num}/`);
  oReq.send();
}

//fetch("people","4");
//fetch("planets","1");
fetch("starships","3");

function post(name, a, b){
  let put = document.querySelector("#contentContainer");

  const header = document.createElement("h2");
  header.innerHTML = `${name}`;
  put.appendChild(header);

  const subOne = document.createElement("p");
  subOne.innerHTML = `${a}`;
  put.appendChild(subOne);

  const subTwo = document.createElement("p");
  subTwo.innerHTML = `${b}`;
  put.appendChild(subTwo);
}

let request = document.querySelector("#requestResourceButton");
request.addEventListener("click", function(){
  let category = document.querySelector("#resourceType").value;
  let id = document.querySelector("#resourceId").value;
  console.log(category);
  console.log(id);
  console.log("Success");
  fetch(category, id);

});
