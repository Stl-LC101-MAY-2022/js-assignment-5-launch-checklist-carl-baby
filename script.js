const { formSubmission, validateInput } = require("./scriptHelper");

// Write your JavaScript code here!


// window.addEventListener("submit", function() {
//     event.preventDefault();
//     const form = document.querySelector("launchForm");
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         let pilot = document.querySelector("pilotName").value;
//         let list = document.getElementById("faultyItems").value;
//         let copilot = document.querySelector("input[name=copilotName]").value;
//         let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
//         let cargoLevel = document.querySelector("input[name=cargoMass]").value;
//         // formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
//         console.log(list, copilot, pilot, fuelLevel, cargoLevel);
//     })
// });
//1. check original code for window listeners
//2. play with console.logs 

//notes for cobe: where is my button response / variables named the same thing /

window.addEventListener("load", function() { 
    const form = document.querySelector("launchForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector(pilotName).value;
        let list = document.getElementById(faultyItems).value;
        let copilot = document.querySelector(copilotName).value;
        let fuelLevel = document.querySelector(fuelLevel).value;
        let cargoLevel = document.querySelector(cargoMass).value;
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
        console.log(list, copilot, pilot, fuelLevel, cargoLevel);
    })
})
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
});
// starter code
// window.addEventListener("load", function() {

//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse;
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     })
    
//  });