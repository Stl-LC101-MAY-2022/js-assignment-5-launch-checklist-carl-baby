// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li> Name: ${name} </li>
                    <li> Diameter: ${diameter} </li>
                    <li> Star: ${star} </li>
                    <li> Distance from Earth: ${distance} </li>
                    <li> Number of Moons: ${moons} </li>
                </ol>
                <img src='${imageUrl}'>
                `
};

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return 'Empty'
    } else if ((!isNaN(Number(testInput)))) {
        return 'Is a Number'
    } else {
        return 'Not a Number'
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoStatus) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    //check all fields are filled
    if (validateInput(pilotStatus) === "" || validateInput(copilotStatus) === ""|| 
    validateInput(fuelLevel) === ""||validateInput(cargoLevel) === "") {
        window.alert("All fields are required!");
}     else if (validateInput(fuelLevel) === NaN || validateInput(cargoLevel) === NaN) {
    window.alert("Please enter a NUMBER for Fuel Level and Cargo Mass");
} else if (validateInput(pilotStatus)!== NaN ||validateInput(copilotStatus)!== NaN ) {
    window.alert("Please enter a NAME for pilot or co-pilot");
} 
else {
pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
list.style.visibility = 'hidden';
};

//check fuel levels and update faulty items
if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Not enough fuel for journey`;
    list.style.visibility = 'visible';
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`;
} else if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Cargo too heavy for takeoff`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`;
} else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
    list.style.visibility = `visible`;
    fuelStatus.innerHTML = `Enough fuel for journey`;
    cargoStatus.innerHTML = `Cargo light enough for takeoff`;
    launchStatus.innerHTML = `Shuttle ready for launch`;
    launchStatus.style.color = `green`;
}
};

async function myFetch() {
let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
let listedPlanetsResponse = response.json();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
})
    }
    )};

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
