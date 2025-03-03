/**String Rotation: Assume you have a method isSuvstring which checs if one word is a substing of another.
 * Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
 * (e.g. "waterbottle" is a rotation of "erbottlewat").
 */

function isSubstring(str1, str2) {
    if (str1.length === str2.length && str1.length > 0) {
        let str1str1 = str1 + str1;
        return str1str1.includes(str2);
    }
    return false;
}