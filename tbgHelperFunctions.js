        // Fisher-Yates shuffle algorithm
        export function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        export function getRandomElement(array, ...exclude) {
            if (!Array.isArray(array) || array.length === 0) {
                console.error('Invalid or empty array passed to getRandomElement:', array);
                return null;
            }
            const filteredArray = array.filter(item => !exclude.includes(item));
            return filteredArray[Math.floor(Math.random() * filteredArray.length)];
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
            if (subject === undefined) {
                console.error('Undefined subject passed to getVerb')
            }
            return subject.endsWith('s') ? 'are' : 'is';
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
        