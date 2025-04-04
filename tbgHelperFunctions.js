        // Fisher-Yates shuffle algorithm
        export function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        export function getRandomElement(input, ...excludeItems) {
            if (Array.isArray(input)) {
                const availableItems = input.filter(item => !excludeItems.includes(item));
                if (availableItems.length === 0) return undefined;
                return availableItems[Math.floor(Math.random() * availableItems.length)];
            } else if (typeof input === 'object' && input !== null) {
                const keys = Object.keys(input).filter(key => !excludeItems.includes(key));
                if (keys.length === 0) return undefined;
                return keys[Math.floor(Math.random() * keys.length)];
            }
            return undefined;
        }

        // Helper function to determine if a word starts with a vowel sound
        export function startsWithVowelSound(word) {
            return /^[aeiou]/i.test(word);
        }

        // Helper function to capitalise the first letter of an element
        export function capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }

        // Helper function to get the correct article (a/an) or no article
        export function getArticle(word, isStartOfSentence = false) {

            let article = startsWithVowelSound(word) ? 'an' : 'a';

            // Capitalize if it's the start of a sentence
            return isStartOfSentence ? article.charAt(0).toUpperCase() + article.slice(1) : article;
        }

        // Helper function to get the correct verb form (is/are)
        export function getVerb(subject) {
            if (subject.endsWith('s')) {
            return 'are'
        } else {
            return 'is';
        }
    }
        // Helper function to pluralize a word (very basic implementation)
        export function pluralize(word) {
            if (word.endsWith('s')) return word;
            return word + 's';
        }

        // Helper function to remove 'the' from start of string if present
        export function removeThe(word) {
            return word.replace(/^the /i, '');
        }

        //Get launch year by ship class
        export function getLaunchYearByClass(shipClass)  {
                    if (shipClass === 'Constitution') {
                        return 2244 + Math.floor(Math.random() * 60);
                    } else if (shipClass === 'Galaxy') {
                        return 2352 + Math.floor(Math.random() * 50);
                    } else if (shipClass === 'Intrepid') {
                        return 2369 + Math.floor(Math.random() * 60);
                    } else if (shipClass === 'Defiant') {
                        return 2373 + Math.floor(Math.random() * 20);
                    } else if (shipClass ==='Constellation') {
                        return 2279 + Math.floor(Math.random() * 80);
                    } else if (shipClass ==='Miranda') {
                        return 2241 + Math.floor(Math.random() * 50);
                    } else if (shipClass === 'Nova') {
                        return 2367 + Math.floor(Math.random() * 30);
                    };
                }

        
        