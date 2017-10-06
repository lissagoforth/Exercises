// Create an array that contains the words in the sentence
let sentence = ["You", "can't", "sit", "with", "us", "Becky,", "you", "bitch.", "It's", "not", "sweatpant", "day."];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    let stringBuilder = ""
    
    for (i = 0; i < theWordArray.length; i++) {
        const punctuationPosition = i + 1
        const  word = theWordArray[i]

        if (punctuationPosition % 3 === 0) {
            const addBang = punctuationPosition / 3
            stringBuilder += word + "!".repeat(addBang) + " "
        } else {
            stringBuilder += word + " "
        }
        console.log( stringBuilder );
    
    }
    
}

// Invoke the function and pass in the array
addExcitement(sentence);    