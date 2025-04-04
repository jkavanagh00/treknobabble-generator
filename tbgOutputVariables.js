import { data } from './tbgArrays.js';
import { getRandomElement, getLaunchYearByClass } from './tbgHelperFunctions.js';
import { buildMarkovChain, generateWord } from './tbgMarkovChain.js';

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
        const outputs = {};

        outputs.species = getRandomElement(data.species);
        outputs.species2 = getRandomElement(data.species, outputs.species);
        outputs.species3 = getRandomElement(data.species, outputs.species, outputs.species2);

        outputs.firstName = getRandomElement(data.firstNames[outputs.species]);
        outputs.firstName2 = getRandomElement(data.firstNames[outputs.species2], outputs.firstName);
        outputs.firstName3 = getRandomElement(data.firstNames[outputs.species3], outputs.firstName, outputs.firstName2);

        outputs.lastName = getRandomElement(data.lastNames[outputs.species]);
        outputs.lastName2 = getRandomElement(data.lastNames[outputs.species2], outputs.lastName);
        outputs.lastName3 = getRandomElement(data.lastNames[outputs.species3], outputs.lastName, outputs.lastName2);

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

        outputs.component = getRandomElement(data.starshipComponents);
        outputs.component2 = getRandomElement(data.starshipComponents, outputs.component);
        outputs.component3 = getRandomElement(data.starshipComponents, outputs.component, outputs.component2);
        
        outputs.fullName = generateFullName(outputs.species, outputs.firstName, outputs.lastName);
        outputs.fullName2 = generateFullName(outputs.species2, outputs.firstName2, outputs.lastName2);
        outputs.fullName3 = generateFullName(outputs.species3, outputs.firstName3, outputs.lastName3);

        outputs.shipName = getRandomElement(data.names);
        outputs.shipName2 = getRandomElement(data.names, outputs.shipName);
        outputs.shipName3 = getRandomElement(data.names, outputs.shipName, outputs.shipName2);

        outputs.shipClass = getRandomElement(data.starshipClasses);
        outputs.shipClass2 = getRandomElement(data.starshipClasses, outputs.shipClass);
        outputs.shipClass3 = getRandomElement(data.starshipClasses, outputs.shipClass, outputs.shipClass2);

        outputs.holodeckCharacter = getRandomElement(data.holodeckCharacters);
        outputs.holodeckCharacter2 = getRandomElement(data.holodeckCharacters, outputs.holodeckCharacter);
        outputs.holodeckCharacter3 = getRandomElement(data.holodeckCharacters, outputs.holodeckCharacter, outputs.holodeckCharacter2);

        outputs.famousCaptain = getRandomElement(data.famousCaptains);
        outputs.famousCaptain2 = getRandomElement(data.famousCaptains, outputs.famousCaptain);
        outputs.famousCaptain3 = getRandomElement(data.famousCaptains, outputs.famousCaptain, outputs.famousCaptain2);

        outputs.effect = getRandomElement(data.technobabbleEffects);
        outputs.effect2 = getRandomElement(data.technobabbleEffects, outputs.effect);
        outputs.effect3 = getRandomElement(data.technobabbleEffects, outputs.effect, outputs.effect2);
        
        const markovChain = buildMarkovChain([...data.technobabbleAdjectives, ...data.technobabbleEffects, ...data.technobabbleTools, ...data.technobabbleMarkovFuel]);
        outputs.markov = generateWord(markovChain, 8, 14);

        outputs.hazard = getRandomElement(data.environmentalHazards); 
        outputs.hazard2 = getRandomElement(data.environmentalHazards, outputs.hazard);
        outputs.hazard3 = getRandomElement(data.environmentalHazards, outputs.hazard, outputs.hazard2);

        outputs.location = getRandomElement(data.starshipLocations);
        outputs.location2 = getRandomElement(data.starshipLocations, outputs.location);
        outputs.location3 = getRandomElement(data.starshipLocations, outputs.location, outputs.location2);

        outputs.malfunction = getRandomElement(data.malfunctions);
        outputs.malfunction2 = getRandomElement(data.malfunctions, outputs.malfunction);
        outputs.malfunction3 = getRandomElement(data.malfunctions, outputs.malfunction, outputs.malfunction2);

        outputs.particle = getRandomElement(data.particles);
        outputs.particle2 = getRandomElement(data.particles, outputs.particle);
        outputs.particle3 = getRandomElement(data.particles, outputs.particle, outputs.particle2);

        outputs.radiation = getRandomElement(data.radiations);
        outputs.radiation2 = getRandomElement(data.radiations, outputs.radiation);
        outputs.radiation3 = getRandomElement(data.radiations, outputs.radiation, outputs.radiation2);

        outputs.statusQuo = getRandomElement(data.statusQuoStates);
        outputs.statusQuo2 = getRandomElement(data.statusQuoStates, outputs.statusQuo);
        outputs.statusQuo3 = getRandomElement(data.statusQuoStates, outputs.statusQuo, outputs.statusQuo2);

        outputs.tool = getRandomElement(data.technobabbleTools);
        outputs.tool2 = getRandomElement(data.technobabbleTools, outputs.tool);
        outputs.tool3 = getRandomElement(data.technobabbleTools, outputs.tool, outputs.tool2);

        outputs.technobabbleAdjective = getRandomElement(data.technobabbleAdjectives);
        outputs.technobabbleAdjective2 = getRandomElement(data.technobabbleAdjectives, outputs.technobabbleAdjective);
        outputs.technobabbleAdjective3 = getRandomElement(data.technobabbleAdjectives, outputs.technobabbleAdjective, outputs.technobabbleAdjective2);

        outputs.repairPresentContinuous = getRandomElement(data.repairPresentContinuousVerbs);
        outputs.repairPresentContinuous2 = getRandomElement(data.repairPresentContinuousVerbs, outputs.repairPresentContinuous);
        outputs.repairPresentContinuous3 = getRandomElement(data.repairPresentContinuousVerbs, outputs.repairPresentContinuous, outputs.repairPresentContinuous2);

        outputs.repairInfinitive = getRandomElement(data.repairInfinitiveVerbs);
        outputs.repairInfinitive2 = getRandomElement(data.repairInfinitiveVerbs, outputs.repairInfinitive);
        outputs.repairInfinitive3 = getRandomElement(data.repairInfinitiveVerbs, outputs.repairInfinitive, outputs.repairInfinitive2);

        outputs.malfunctionPresentContinuous = getRandomElement(data.malfunctionPresentContinuousVerbs);
        outputs.malfunctionPresentContinuous2 = getRandomElement(data.malfunctionPresentContinuousVerbs, outputs.malfunctionPresentContinuous);
        outputs.malfunctionPresentContinuous3 = getRandomElement(data.malfunctionPresentContinuousVerbs, outputs.malfunctionPresentContinuous, outputs.malfunctionPresentContinuous2);

        outputs.malfunctionInfinitive = getRandomElement(data.malfunctionInfinitiveVerbs);
        outputs.malfunctionInfinitive2 = getRandomElement(data.malfunctionInfinitiveVerbs, outputs.malfunctionInfinitive);
        outputs.malfunctionInfinitive3 = getRandomElement(data.malfunctionInfinitiveVerbs, outputs.malfunctionInfinitive, outputs.malfunctionInfinitive2);

        outputs.direction = getRandomElement(data.starshipDirections);
        outputs.direction2 = getRandomElement(data.starshipDirections, outputs.direction);
        outputs.direction3 = getRandomElement(data.starshipDirections, outputs.direction, outputs.direction2);

        outputs.phonetic = getRandomElement(data.starfleetPhoneticAlphabet);
        outputs.phonetic2 = getRandomElement(data.starfleetPhoneticAlphabet, outputs.phonetic);
        outputs.phonetic3 = getRandomElement(data.starfleetPhoneticAlphabet, outputs.phonetic, outputs.phonetic2);

        outputs.deckNumber = getRandomElement(data.starshipDecks); 
        outputs.deckNumber2 = getRandomElement(data.starshipDecks, outputs.deckNumber); 
        outputs.deckNumber3 = getRandomElement(data.starshipDecks, outputs.deckNumber, outputs.deckNumber2);

        outputs.deck = `Deck ${outputs.deckNumber}`; 
        outputs.deck2 = `Deck ${outputs.deckNumber2}`; 
        outputs.deck3 = `Deck ${outputs.deckNumber3}`;

        outputs.tube = `Jeffries Tube ${Math.floor(Math.random() * 99) + 2}- ${outputs.phonetic}`;
        outputs.tube2 = `Jeffries Tube ${Math.floor(Math.random() * 99) + 2}- ${outputs.phonetic2}`; 
        outputs.tube3 = `Jeffries Tube ${Math.floor(Math.random() * 99) + 2}- ${outputs.phonetic3}`;
        
        outputs.warpFactor = Math.floor(Math.random() * 8) + 2;
        outputs.warpFactor2 = Math.floor(Math.random() * 8) + 2;
        outputs.warpFactor3 = Math.floor(Math.random() * 8) + 2;

        outputs.warp = `Warp ${outputs.warpFactor}`;
        outputs.warp2 = `Warp ${outputs.warpFactor2}`;
        outputs.warp3 = `Warp ${outputs.warpFactor3}`;
        
        outputs.sensor = getRandomElement(data.sensorSynonyms);
        outputs.sensor2 = getRandomElement(data.sensorSynonyms, outputs.sensor);
        outputs.sensor3 = getRandomElement(data.sensorSynonyms, outputs.sensor, outputs.sensor2);

        outputs.course = `set course ${String(Math.floor(Math.random() * 361)).padStart(3, '0')}-mark-${String(Math.floor(Math.random() * 361)).padStart(3, '0')}`;
        outputs.course2 = `set course ${String(Math.floor(Math.random() * 361)).padStart(3, '0')}-mark-${String(Math.floor(Math.random() * 361)).padStart(3, '0')}`;
        outputs.course3 = `set course ${String(Math.floor(Math.random() * 361)).padStart(3, '0')}-mark-${String(Math.floor(Math.random() * 361)).padStart(3, '0')}`;

        outputs.holodeckMishap = getRandomElement(data.holodeckMishaps);
        outputs.holodeckMishap2 = getRandomElement(data.holodeckMishaps, outputs.holodeckMishap);
        outputs.holodeckMishap3 = getRandomElement(data.holodeckMishaps, outputs.holodeckMishap, outputs.holodeckMishap2);

        outputs.holodeckInteraction = getRandomElement(data.holodeckInteractions);
        outputs.holodeckInteraction2 = getRandomElement(data.holodeckInteractions, outputs.holodeckInteraction);
        outputs.holodeckInteraction3 = getRandomElement(data.holodeckInteractions, outputs.holodeckInteraction, outputs.holodeckInteraction2);

        outputs.mission = getRandomElement(data.starshipClasses[outputs.shipClass]);
        outputs.mission2 = getRandomElement(data.starshipClasses[outputs.shipClass2], outputs.mission); 
        outputs.mission3 = getRandomElement(data.starshipClasses[outputs.shipClass3], outputs.mission, outputs.mission2);

        outputs.yearEnlisted = 2300 + Math.floor(Math.random() * 100);
        outputs.yearEnlisted2 = 2300 + Math.floor(Math.random() * 100);
        outputs.yearEnlisted3 = 2300 + Math.floor(Math.random() * 100);
        /*
        starshipClasses: {
        Constitution: ['Deep space exploration', 'First contact', 'Border patrol'],
        Galaxy: ['Deep space exploration', 'First contact', 'Humanitarian aid', 'Ambassadorial transport', 'Diplomatic outreach'],
        Intrepid: ['Search and Rescue'],
        Defiant: ['Border patrol', 'Tactical operations'],
        Stargazer: ['Deep-space exploration', 'Long-range patrol'],
        Miranda: ['Astrophysical research', 'Starbase supply', 'Xeno-biological research', 'Border patrol', 'Tactical operations'],
        Nova: ['Geological research', 'Scouting', 'Planetary survey', 'Xeno-biological research']
        */
        outputs.launchYear = getLaunchYearByClass(outputs.shipClass)
        outputs.launchYear2 = getLaunchYearByClass(outputs.shipClass2);
        outputs.launchYear3 = getLaunchYearByClass(outputs.shipClass3);

        outputs.notableEvent = getRandomElement(data.notableEvents);
        outputs.notableEvent2 = getRandomElement(data.notableEvents, outputs.notableEvent);
        outputs.notableEvent3 = getRandomElement(data.notableEvents, outputs.notableEvent, outputs.notableEvent2);

        outputs.registry = Math.floor(1000 + Math.random() * 9000);
        outputs.registry2 = Math.floor(1000 + Math.random() * 9000);
        outputs.registry3 = Math.floor(1000 + Math.random() * 9000);

        outputs.rank = getRandomElement(data.ranks);
        outputs.rank2 = getRandomElement(data.ranks, outputs.rank);
        outputs.rank3 = getRandomElement(data.ranks, outputs.rank, outputs.rank2);
        
        outputs.abbreviatedRank = abbreviateRank(outputs.rank);
        outputs.abbreviatedRank2 = abbreviateRank(outputs.rank2);
        outputs.abbreviatedRank3 = abbreviateRank(outputs.rank3);

        outputs.department = outputs.rank === 'Captain' ? 'command' : getRandomElement(data.departments);
        outputs.department2 = outputs.rank2 === 'Captain' ? 'command' : getRandomElement(data.departments);
        outputs.department3 = outputs.rank3 === 'Captain' ? 'command' : getRandomElement(data.departments);

        outputs.speciality = getRandomElement(data.departments[outputs.department]);
        outputs.speciality2 = getRandomElement(data.departments[outputs.department2]);
        outputs.speciality3 = getRandomElement(data.departments[outputs.department3]);
        console.log(outputs);

        return outputs;
    }

