import { data } from './tbgArrays.js';

function getRandomElement(array, ...exclude) {
    if (!Array.isArray(array) || array.length === 0) {
        console.error('Invalid or empty array passed to getRandomElement:', array);
        return null;
    }
    const filteredArray = array.filter(item => !exclude.includes(item));
    return filteredArray[Math.floor(Math.random() * filteredArray.length)];
}

function abbreviateRank (rank) {
    const lowerRank = rank.toLowerCase();
    if (lowerRank === 'ensign') {
        return 'Ens.';
    } else if (lowerRank.includes('lieutenant')) {
        return 'Lt.';
    } else if (lowerRank.includes('commander')) {
        return 'Cmdr.';
    } else if (lowerRank === 'captain') {
        return 'Capt.';
    } else {
        return '';
    }
};

export function initializeOutputs() {
    try {
        const outputs = {};

        // Names

        outputs.species = getRandomElement(data.species);outputs.species2 = getRandomElement(data.species, outputs.species);outputs.species3 = getRandomElement(data.species, outputs.species, outputs.species2);

        outputs.firstName = getRandomElement(data.firstNames[outputs.species]);outputs.firstName2 = getRandomElement(data.firstNames[outputs.species2], outputs.firstName);outputs.firstName3 = getRandomElement(data.firstNames[outputs.species], outputs.firstName, outputs.firstName2);

        outputs.lastName = getRandomElement(data.lastNames[outputs.species]);outputs.lastName2 = getRandomElement(data.lastNames[outputs.species], outputs.lastName);outputs.lastName3 = getRandomElement(data.lastNames[outputs.species], outputs.lastName, outputs.lastName2);

        function generateFullName(species, firstName, lastName) {
            if (data.lastNames[species] && data.lastNames[species].length > 0) {
                if (species === 'bajoran') {
                    return `${lastName} ${firstName}`;
                } else {
                    return `${firstName} ${lastName}`;
                }
            }
            return firstName;
        }

        outputs.fullName = generateFullName(outputs.species, outputs.firstName, outputs.lastName);outputs.fullName2 = generateFullName(outputs.species2, outputs.firstName2, outputs.lastName2);outputs.fullName3 = generateFullName(outputs.species3, outputs.firstName3, outputs.lastName3);

        outputs.shipName = getRandomElement(data.names);outputs.shipName2 = getRandomElement(data.names, outputs.shipName);outputs.shipName3 = getRandomElement(data.names, outputs.shipName, outputs.shipName2);

        outputs.shipClass = getRandomElement(data.classes);outputs.shipClass2 = getRandomElement(data.classes, outputs.shipClass);outputs.shipClass3 = getRandomElement(data.classes, outputs.shipClass, outputs.shipClass2);

        outputs.holodeckCharacter = getRandomElement(data.holodeckCharacters);outputs.holodeckCharacter2 = getRandomElement(data.holodeckCharacters, outputs.holodeckCharacter);outputs.holodeckCharacter3 = getRandomElement(data.holodeckCharacters, outputs.holodeckCharacter, outputs.holodeckCharacter2);

        outputs.famousCaptain = getRandomElement(data.famousCaptains);outputs.famousCaptain2 = getRandomElement(data.famousCaptains, outputs.famousCaptain);outputs.famousCaptain3 = getRandomElement(data.famousCaptains, outputs.famousCaptain, outputs.famousCaptain2);

        outputs.component = getRandomElement(data.starshipComponents);outputs.component2 = getRandomElement(data.starshipComponents, outputs.component);outputs.component3 = getRandomElement(data.starshipComponents, outputs.component, outputs.component2);

        outputs.effect = getRandomElement(data.technobabbleEffects);outputs.effect2 = getRandomElement(data.technobabbleEffects, outputs.effect);outputs.effect3 = getRandomElement(data.technobabbleEffects, outputs.effect, outputs.effect2);

        outputs.hazard = getRandomElement(data.hazards); outputs.hazard2 = getRandomElement(data.hazards, outputs.hazard);outputs.hazard3 = getRandomElement(data.hazards, outputs.hazard, outputs.hazard2);

        outputs.location = getRandomElement(data.starshipLocations);outputs.location2 = getRandomElement(data.starshipLocations, outputs.location);outputs.location3 = getRandomElement(data.starshipLocations, outputs.location, outputs.location2);

        outputs.malfunction = getRandomElement(data.malfunctions);outputs.malfunction2 = getRandomElement(data.malfunctions, outputs.malfunction);outputs.malfunction3 = getRandomElement(data.malfunctions, outputs.malfunction, outputs.malfunction2);

        outputs.particle = getRandomElement(data.particles);outputs.particle2 = getRandomElement(data.particles, outputs.particle);outputs.particle3 = getRandomElement(data.particles, outputs.particle, outputs.particle2);

        outputs.radiation = getRandomElement(data.radiations);outputs.radiation2 = getRandomElement(data.radiations, outputs.radiation);outputs.radiation3 = getRandomElement(data.radiations, outputs.radiation, outputs.radiation2);

        outputs.statusQuo = getRandomElement(data.statusQuoStates);outputs.statusQuo2 = getRandomElement(data.statusQuoStates, outputs.statusQuo);outputs.statusQuo3 = getRandomElement(data.statusQuoStates, outputs.statusQuo, outputs.statusQuo2);

        outputs.tool = getRandomElement(data.technobabbleTools);outputs.tool2 = getRandomElement(data.technobabbleTools, outputs.tool);outputs.tool3 = getRandomElement(data.technobabbleTools, outputs.tool, outputs.tool2);

        outputs.technobabbleAdjective = getRandomElement(data.technobabbleAdjectives);outputs.technobabbleAdjective2 = getRandomElement(data.technobabbleAdjectives, outputs.technobabbleAdjective);outputs.technobabbleAdjective3 = getRandomElement(data.technobabbleAdjectives, outputs.technobabbleAdjective, outputs.technobabbleAdjective2);

        outputs.repairPresentContinuous = getRandomElement(data.repairPresentContinuousVerbs);outputs.repairPresentContinuous2 = getRandomElement(data.repairPresentContinuousVerbs, outputs.repairPresentContinuous);outputs.repairPresentContinuous3 = getRandomElement(data.repairPresentContinuousVerbs, outputs.repairPresentContinuous, outputs.repairPresentContinuous2);

        outputs.repairInfinitive = getRandomElement(data.repairInfinitiveVerbs);outputs.repairInfinitive2 = getRandomElement(data.repairInfinitiveVerbs, outputs.repairInfinitive);outputs.repairInfinitive3 = getRandomElement(data.repairInfinitiveVerbs, outputs.repairInfinitive, outputs.repairInfinitive2);

        outputs.malfunctionPresentContinuous = getRandomElement(data.malfunctionPresentContinuousVerbs);outputs.malfunctionPresentContinuous2 = getRandomElement(data.malfunctionPresentContinuousVerbs, outputs.malfunctionPresentContinuous);outputs.malfunctionPresentContinuous3 = getRandomElement(data.malfunctionPresentContinuousVerbs, outputs.malfunctionPresentContinuous, outputs.malfunctionPresentContinuous2);

        outputs.malfunctionInfinitive = getRandomElement(data.malfunctionInfinitiveVerbs);outputs.malfunctionInfinitive2 = getRandomElement(data.malfunctionInfinitiveVerbs, outputs.malfunctionInfinitive);outputs.malfunctionInfinitive3 = getRandomElement(data.malfunctionInfinitiveVerbs, outputs.malfunctionInfinitive, outputs.malfunctionInfinitive2);

        outputs.direction = getRandomElement(data.starshipDirections);outputs.direction2 = getRandomElement(data.starshipDirections, outputs.direction);outputs.direction3 = getRandomElement(data.starshipDirections, outputs.direction, outputs.direction2);

        outputs.phonetic = getRandomElement(data.starfleetPhoneticAlphabet);outputs.phonetic2 = getRandomElement(data.starfleetPhoneticAlphabet, outputs.phonetic);outputs.phonetic3 = getRandomElement(data.starfleetPhoneticAlphabet, outputs.phonetic, outputs.phonetic2);

        outputs.deck = `Deck ${getRandomElement(data.starshipDecks)}`; outputs.deck2 = `Deck ${getRandomElement(data.starshipDecks, outputs.deck)}`; outputs.deck3 = `Deck ${getRandomElement(data.starshipDecks, outputs.deck, outputs.deck2)}`;

        outputs.tube = `Jeffries Tube ${Math.floor(Math.random() * 99) + 2}- ${outputs.phonetic}`;outputs.tube2 = `Jeffries Tube ${Math.floor(Math.random() * 99) + 2}- ${outputs.phonetic2}`; outputs.tube3 = `Jeffries Tube ${Math.floor(Math.random() * 99) + 2}- ${outputs.phonetic3}`;
        
        outputs.warp = `Warp ${Math.floor(Math.random() * 8) + 2}`;
        
        outputs.sensor = getRandomElement(data.sensorSynonyms);
        outputs.course = `set course ${String(Math.floor(Math.random() * 361)).padStart(3, '0')}-mark-${String(Math.floor(Math.random() * 361)).padStart(3, '0')}`;
        outputs.holodeckMishap = getRandomElement(data.holodeckMishaps);
        outputs.holodeckInteraction = getRandomElement(data.holodeckInteractions);
        outputs.mission = getRandomElement(data.missions);
        outputs.yearEnlisted = 2300 + Math.floor(Math.random() * 100);
        outputs.launchYear = 2300 + Math.floor(Math.random() * 100);
        outputs.notableEvent = getRandomElement(data.notableEvents);
        outputs.registry = Math.floor(1000 + Math.random() * 9000);
        outputs.rank = getRandomElement(data.ranks);
        outputs.abbreviatedRank = abbreviateRank(outputs.rank);
        outputs.department = getRandomElement(Object.keys(data.departments));
        if (outputs.department && Array.isArray(data.departments[outputs.department])) {
            outputs.specialty = getRandomElement(data.departments[outputs.department]);
        } else {
            outputs.specialty = 'Unknown Specialty';
        }

        return outputs;
    } catch (error) {
        console.error('Error in initializeOutputs:', error);
        return {};
    }
}