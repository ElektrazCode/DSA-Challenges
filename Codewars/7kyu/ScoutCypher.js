/**DESCRIPTION:
Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.
The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD */
function encode(str) 
{
    return str.split('').map(letter=>{
      switch(letter){
          case 'G': return 'A';
          case 'g': return 'a';
          case 'a': return 'g';
          case 'A': return 'G';
          case 'D': return 'E';
          case 'E': return 'D';
          case 'd': return 'e';
          case 'e': return 'd';
          case 'R': return 'Y';
          case 'Y': return 'R';
          case 'r': return 'y';
          case 'y': return 'r';
          case 'P': return 'O';
          case 'O': return 'P';
          case 'p': return 'o';
          case 'o': return 'p';
          case 'L': return 'U';
          case 'U': return 'L';
          case 'l': return 'u';
          case 'u': return 'l';
          case 'K': return 'I';
          case 'I': return 'K';
          case 'k': return 'i';
          case 'i': return 'k';
          default: return letter;
      }
    }).join('');
}

function decode(str) 
{
   return encode(str);
}