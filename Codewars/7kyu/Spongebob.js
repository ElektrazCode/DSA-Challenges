/**DESCRIPTION:
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

"Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!" */

/**
 *P: A setence
 *R: The sentence with a pattern of upper and lower case
 *E: "stop Making spongebob Memes!" -> 'StOp mAkInG SpOnGeBoB MeMeS!'
 *P: Convert into array
     map elements by index: even upper and odd lower
     Convert back into string & return
 */
     function spongeMeme(sentence) {
        return sentence.split('')
                       .map((letter, index) => (index%2===0) ? letter.toUpperCase() : letter.toLowerCase())
                       .join('');
      }