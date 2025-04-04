const START_TOKEN = '^';
const END_TOKEN = '$';

export function buildMarkovChain(words, order = 3) {
    const chain = {};
    
    words.forEach(word => {
        const paddedWord = START_TOKEN.repeat(order) + word + END_TOKEN;
        for (let i = 0; i < paddedWord.length - order; i++) {
            const key = paddedWord.slice(i, i + order);
            const next = paddedWord[i + order];
            
            if (!chain[key]) {
                chain[key] = {};
            }
            
            if (!chain[key][next]) {
                chain[key][next] = 0;
            }
            
            chain[key][next]++;
        }
    });
    
    return chain;
}

export function generateWord(chain, minLength = 8, maxLength = 12, maxAttempts = 100) {
    const order = Object.keys(chain)[0].length;
    const acceptableEndings = ['mic', 'al', 'ive', 'tant', 'lar', 'onic', 'etic', 'emic', 'atic', 'tronic', 'morphic', 'phasic', 'genic', 'metric', 'kinetic', 'dynamic', 'static', 'ergic', 'tropic'];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const prefixes = ['nano-', 'micro-', 'macro-', 'proto-', 'meta-', 'poly-', 'multi-', 'omni-', 'trans-', 'inter-', 'intra-', 'sub-', 'super-', 'ultra-', 'quasi-'];
    
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        let current = START_TOKEN.repeat(order);
        let result = '';
        let consecutiveVowels = 0;
        let lastChar = '';
        let lastTwoPairs = ['', ''];
        let newPair = '';

        // Randomly decide to add a prefix
        if (Math.random() < 0.3) {  // 30% chance to add a prefix
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            result = prefix;
            maxLength -= prefix.length;
        }
        
        while (result.length < maxLength) {
            const nextChar = findNextChar(chain, current, order);
            if (!nextChar || nextChar === END_TOKEN) break;
            
            // Check for consecutive 'a's
            if (nextChar.toLowerCase() === 'a' && lastChar.toLowerCase() === 'a') {
                continue; // Skip this character
            }
            
            // Check for consecutive vowels
            if (vowels.includes(nextChar.toLowerCase())) {
                consecutiveVowels++;
                if (consecutiveVowels >= 3) continue; // Skip this character
            } else {
                consecutiveVowels = 0;
            }
            
            // Check for repetitive consonant-vowel patterns
            newPair = lastChar + nextChar;
            if (newPair === lastTwoPairs[0] && newPair === lastTwoPairs[1]) {
                continue; // Skip this character to avoid patterns like "ononon"
            }
            
            result += nextChar;
            current = (current + nextChar).slice(-order);
            lastChar = nextChar;
            lastTwoPairs.push(newPair);
            lastTwoPairs.shift();
            
            if (result.length >= maxLength) break;
        }
        
        // Ensure the word ends with an acceptable ending
        let hasAcceptableEnding = acceptableEndings.some(ending => result.endsWith(ending));
        if (!hasAcceptableEnding) {
            const randomEnding = acceptableEndings[Math.floor(Math.random() * acceptableEndings.length)];
            result = result.slice(0, -randomEnding.length) + randomEnding;
        }
        
        // If the word meets the length requirement, return it
        if (result.length >= minLength && result.length <= maxLength + 5) {  // Allow slightly longer words due to prefixes
            return result;
        }
    }
    
    // If we've exhausted all attempts, return the last generated word
    // (ensuring it has an acceptable ending)
    let hasAcceptableEnding = acceptableEndings.some(ending => result.endsWith(ending));
    if (!hasAcceptableEnding) {
        const randomEnding = acceptableEndings[Math.floor(Math.random() * acceptableEndings.length)];
        result = result.slice(0, -randomEnding.length) + randomEnding;
    }
    return result;
}

function weightedRandom(obj) {
    const total = Object.values(obj).reduce((sum, count) => sum + count, 0);
    const threshold = Math.random() * total;
    let sum = 0;
    
    for (const [char, count] of Object.entries(obj)) {
        sum += count;
        if (sum > threshold) return char;
    }
}

// Helper function to implement backoff
function findNextChar(chain, current, order) {
    while (order > 0) {
        const possibilities = chain[current.slice(-order)];
        if (possibilities) {
            return weightedRandom(possibilities);
        }
        order--;
    }
    return null;
}