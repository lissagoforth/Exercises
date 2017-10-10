// Create an array that contains the words in the sentence
let sentence = ["You", "can't", "sit", "with", "us", "Becky,", "you", "bitch.", "It's", "not", "sweatpant", "day."];
let nextSentence = ["I", "love", "the", "movie", "'Mean", "Girls.'"]
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, specialCharacter) => {
    let stringBuilder = ""
    let punctuation = specialCharacter
    
    for (i = 0; i < theWordArray.length; i++) {
        const punctuationPosition = i + 1
        const  word = theWordArray[i]

        if (punctuationPosition % 3 === 0) {
            const addPunctuation = punctuationPosition / 3
            stringBuilder += word + punctuation.repeat(addPunctuation) + " "
        } else {
            stringBuilder += word + " "
        }
        console.log( stringBuilder );
    
    }
    
}

// Invoke the function and pass in the array
// let addExcitement = () => {nextSentence, "$"};
//  console.log(addExcitement(nextSentence, "$"))   