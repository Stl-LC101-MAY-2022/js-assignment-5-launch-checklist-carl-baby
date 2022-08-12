// Write your helper functions here!
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
    console.log(testInput, "validateInput");
    if (testInput === "" || testInput === null || testInput === 0) {
        return 'Empty'
    } else if ((!isNaN(Number(testInput)))) {
        return 'Is a Number'
    } else {
        return 'Not a Number'
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    console.log(pilotStatus);
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    console.log(validateInput(pilotStatus), pilotStatus);
    //check all fields are filled
    if ( validateInput(pilot.value)=== 'Empty' || validateInput(copilot.value) === 'Empty'|| 
    validateInput(fuelLevel.value) === 'Empty' ||validateInput(cargoLevel.value) === 'Empty') {
        window.alert("All fields are required!");
        return;
}     else if (validateInput(fuelLevel.value) === 'Not a Number' || validateInput(cargoLevel.value) === 'Not a Number') {
    window.alert("Please enter a NUMBER for Fuel Level and Cargo Mass");
    return;
    } else if (validateInput(pilot.value)=== 'Is a Number' ||validateInput(copilot.value)=== 'Is a Number' ) {
    window.alert("Please enter a NAME for pilot or co-pilot");
    return;
} 
else {
list.style.visibility = 'hidden';
pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready`;
};

//check fuel levels and update faulty items
if (fuelLevel.value < 10000) {
    fuelStatus.innerHTML = `Not enough fuel for journey`;
    list.style.visibility = 'visible';
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`;
} else if (cargoLevel.value > 10000) {
    cargoStatus.innerHTML = `Cargo too heavy for takeoff`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`;
} else if (cargoLevel.value < 10000 && fuelLevel.value > 10000) {
    list.style.visibility = `visible`;
    fuelStatus.innerHTML = `Enough fuel for journey`;
    cargoStatus.innerHTML = `Cargo light enough for takeoff`;
    launchStatus.innerHTML = `Shuttle ready for launch`;
    launchStatus.style.color = `green`;
}
};

//should work 
async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json();
    })
     return planetsReturned;
    };


function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
