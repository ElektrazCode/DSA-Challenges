/**Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n. */

function filterLongWords(sentence, n) {
    const words = sentence.split(' ');
    return words.filter(word => word.length > n);
}