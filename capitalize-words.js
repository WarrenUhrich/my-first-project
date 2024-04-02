// Write a function that takes in a string and capitalizes the beginning of each word.
// Let's assume they are always passing string. (don't worry about non-string or empty)

function capitalizeWords(text) {
    let capitalizedString;
    let separatedWords = text.split(' ');
    for(let i = 0; i < separatedWords.length; i++) {
        let word = separatedWords[i];
        let firstLetter = word[0];
        word = firstLetter.toUpperCase() + word.slice(1);
        separatedWords[i] = word;
    }
    capitalizedString = separatedWords.join(' ');
    return String(capitalizedString);
}

let result = capitalizeWords('Hi there, how are you?');
console.log('Hi there, how are you? =>', result); // Hi There, How Are You?
