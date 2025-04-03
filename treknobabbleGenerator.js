/*
Crew member: 
outputs.firstName, outputs.lastName, outputs.fullName, outputs.notableEvent, outputs.department, outputs.rank, outputs.rankAbbreviated, outputs.famousCaptain, outputs.notableEvent, outputs.speciality, outputs.species

Malfuntions & Repairs: 
outputs.malfunction, outputs.malfunctionPresentContinuous, outputs.malfunctionInfinitive, outputs.repairInfinitive, outputs.repairPresentContinuous 

Starships: 
outputs.component, outputs.course, outputs.deck, outputs.direction, outputs.launchYear, outputs.location, outputs.mission, outputs.registry, outputs.sensor, outputs.shipClass, outputs.shipName, 

Technobabble: 
outputs.effect, outputs.particle, outputs.technobabbleAdjective, outputs.hazard, outputs.tool, outputs.radiation

Holodeck: 
outputs.holodeckCharacter, outputs.holodeckInteraction, outputs.holodeckMishap


phonetic



shipClass
shipName
speciality

statusQuo

tube
warp
yearEnlisted
*/

import { getVerb, getArticle, capitalize, removeThe, getRandomElement } from './tbgHelperFunctions.js';
import { initializeOutputs } from './tbgOutputVariables.js';

function generateAndDisplayTreknobabble() {
    const outputs = initializeOutputs();
    const finalOutput = [
        `The ${outputs.component} ${getVerb(outputs.component)} ${outputs.malfunctionPresentContinuous}, we need ${getArticle(outputs.technobabbleAdjective)} ${outputs.technobabbleAdjective} ${outputs.tool} to ${outputs.repairInfinitive} the ${outputs.component2}.`,
        `${capitalize(outputs.location)} reports that the ${outputs.component} ${getVerb(outputs.component)} ${outputs.malfunctionPresentContinuous}. Recommend we ${outputs.repairInfinitive} the ${outputs.component2}.`,
        `We're ${outputs.sensor} ${getArticle(outputs.technobabbleAdjective2)} ${outputs.technobabbleAdjective2} ${outputs.environmentalHazard} ${outputs.direction}. It's generating ${getArticle(outputs.technobabbleAdjective)} ${outputs.technobabbleAdjective} ${outputs.effect} in the ${outputs.component}.`,
        `The ${outputs.component} ${getVerb(outputs.component)} emitting unusual levels of ${outputs.radiation} radiation. We should ${outputs.repairInfinitive} the ${outputs.component2} immediately.`,
        `${capitalize(outputs.location)} is reporting ${getArticle(outputs.malfunction)} ${outputs.malfunction} in the ${outputs.component}. Suggest we proceed by ${outputs.repairPresentContinuous} the ${outputs.component2} to compensate.`,
        `The ${outputs.component} ${getVerb(outputs.component)} ${outputs.malfunctionPresentContinuous}. Without ${outputs.repairPresentContinuous} the ${outputs.component2}, we will be unable to maintain ${outputs.statusQuo}.`,
        `${capitalize(getArticle(outputs.technobabbleAdjective, true))} ${outputs.technobabbleAdjective} field is causing a dangerous buildup of ${outputs.particle} particles in ${outputs.location}. We need to use ${getArticle(outputs.technobabbleAdjective2)} ${outputs.technobabbleAdjective2} ${outputs.tool} to disperse them.`,
        `The ${outputs.component} ${getVerb(outputs.component)} about to ${outputs.malfunctionInfinitive}. Without ${getArticle(outputs.technobabbleAdjective)} ${outputs.technobabbleAdjective} ${outputs.tool}, we will be unable to maintain ${outputs.statusQuo}.`,
        `In order to circumvent the ${outputs.particle} ${outputs.effect} and reach ${outputs.deck}, we will need to go through ${outputs.tube}.`,
        `The ${outputs.technobabbleAdjective} ${outputs.effect} is disrupting ${outputs.statusQuo}! Re-route power from the ${outputs.component} to the ${outputs.component2}.`,
        `We have to avoid the ${outputs.technobabbleAdjective} ${outputs.environmentalHazard}, ${outputs.course} and engage at ${outputs.warp}.`,
        `${capitalize(removeThe(outputs.location))} to ${outputs.location2}, there's ${getArticle(outputs.technobabbleAdjective)} ${outputs.technobabbleAdjective} ${outputs.effect} forming in the ${outputs.component}.`,
        `${capitalize(getArticle(outputs.technobabbleAdjective))} ${outputs.technobabbleAdjective} ${outputs.effect} has caused the holodeck controls to ${outputs.malfunctionInfinitive}. ${outputs.holodeckCharacter} and ${outputs.holodeckCharacter2} ${outputs.holodeckInteraction}, and now they're ${outputs.holodeckMishap}!`
    ];

    // Clear outputs
    document.getElementById('treknobabble-output').textContent = '';
    document.getElementById('crew-output').textContent = '';
    document.getElementById('ship-output').textContent = '';

    // Generate and display new treknobabble
    document.getElementById('treknobabble-output').innerHTML = getRandomElement(finalOutput);
}

function generateAndDisplayCrew() {
    const outputs = initializeOutputs();
    const finalOutput = `
    <strong>${outputs.abbreviatedRank} ${outputs.fullName}</strong><br>
    <span style="font-size:100s%">Rank: ${outputs.rank}<br>
    Species: ${outputs.species}<br>
    Enlisted: ${outputs.yearEnlisted}<br>
    Department: ${capitalize(outputs.department)}<br>
    Specialty: ${outputs.specialty}<br>
    Notable Event: ${outputs.notableEvent}</span>
    `;

    // Clear all outputs
    document.getElementById('treknobabble-output').textContent = '';
    document.getElementById('crew-output').textContent = '';
    document.getElementById('ship-output').textContent = '';

    // Generate and display new ship
    document.getElementById('crew-output').innerHTML = finalOutput;
}

function generateAndDisplayShip() {
    const outputs = initializeOutputs();
    const finalOutput = `
    <strong>USS ${outputs.shipName}</strong><br>
    <span style="font-size:100%">NCC-${outputs.registry}<br>
    ${outputs.shipClass}-Class<br>
    <br>
    Entered Service: ${outputs.launchYear}<br>
    Current Mission: <br>${outputs.mission}<br>
    Commanding Officer: <br>Cpt. ${outputs.fullName}</span>
    `;

    // Clear all outputs
    document.getElementById('treknobabble-output').textContent = '';
    document.getElementById('crew-output').textContent = '';
    document.getElementById('ship-output').textContent = '';

    // Generate and display new ship
    document.getElementById('ship-output').innerHTML = finalOutput;
}

function scaleContent() {
    const frame = document.querySelector('.lcars-frame');
    const content = document.querySelector('.scaling-wrapper');
    const backgroundImage = new Image();
    backgroundImage.src = '/lcars_background.png';

    backgroundImage.onload = function () {
        const imageAspectRatio = this.width / this.height;
        const frameAspectRatio = frame.clientWidth / frame.clientHeight;

        let scale;
        if (frameAspectRatio > imageAspectRatio) {
            // Height is limiting factor
            scale = frame.clientHeight / this.height;
        } else {
            // Width is limiting factor
            scale = frame.clientWidth / this.width;
        }

        content.style.transform = `translate(-50%, -50%) scale(${scale})`;
        document.documentElement.style.setProperty('--scale', scale);
    };
}

function handleBackgroundLoad() {
    const frame = document.getElementById('lcarsFrame');
    const bgImage = document.getElementById('backgroundImage');
    frame.style.backgroundImage = `url(${bgImage.src})`;
    frame.style.backgroundSize = 'contain';
    frame.style.backgroundPosition = 'center';
    frame.style.backgroundRepeat = 'no-repeat';
    scaleContent();
}

function addButtonListeners() {
    document.getElementById('treknobabble-button').addEventListener('click', generateAndDisplayTreknobabble);
    document.getElementById('crew-button').addEventListener('click', generateAndDisplayCrew);
    document.getElementById('ship-button').addEventListener('click', generateAndDisplayShip);
}

window.addEventListener('load', () => {
    initializeOutputs();
    generateAndDisplayTreknobabble();
    scaleContent();
    addButtonListeners();
    document.getElementById('backgroundImage').addEventListener('load', handleBackgroundLoad);
});

window.addEventListener('resize', scaleContent);