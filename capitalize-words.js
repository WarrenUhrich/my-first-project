// Write a function that takes in a string and capitalizes the beginning of each word.
// Let's assume they are always passing string. (don't worry about non-string or empty)

// Goal: Function
function capitalizeWords(text) { // INPUT: text{string}
    let capitalizedString;

    // PROCESSING:
    // * Find where each new word begins
    // * For each word... capitalize first letter in word

    // Break string apart by space!
    let separatedWords = text.split(' ');
    // console.log('separatedWords', separatedWords);

    // Loop through words!
    for(let i = 0; i < separatedWords.length; i++) {
        let word = separatedWords[i];
        // console.log('word', word);
        let firstLetter = word[0];
        // console.log('firstLetter', firstLetter);
        word = firstLetter.toUpperCase() + word.slice(1);
        // console.log('updated word', word);

        // Store new word where old word was.
        separatedWords[i] = word;
    }

    capitalizedString = separatedWords.join(' ');

    // OUTPUT: {string}
    return String(capitalizedString);
}

let result = capitalizeWords('Hi there, how are you?');
console.log('Hi there, how are you? =>', result); // Hi There, How Are You?
