//PREP
//Parameters: string containing multiple words.
//Return: the string in reverse, each word on a line, displayed in a frame of stars.
//Example: 'Hello World' => '*********\n* olleH *\n* dlroW *\n*********'
//Pseudo-code: convert the string into an array splitting at the spaces.
//             get length of longest word and save in variable
//             print a line of stars followed by new line character
//             Loop through each word in the array
//                print a * and a space then the word in reverse then another space and * followed by the new line character.
//             after loop print another line of stars.
function mirror(text){
    const words = text.split(' ');
    const frameSize = words.reduce((l, word) => Math.max(l, word.length), 0);
    const stars = '*'.repeat(frameSize+4);
    let output = stars;
    words.forEach(word=> output+= '\n* ' + word.split('').reverse().join('') + ' '.repeat(frameSize - word.length) + ' *');
    output += '\n' + stars;
    return output;
  }