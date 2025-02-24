/**DESCRIPTION:
Check if given chord is minor or major.

Rules:

Basic minor/major chord have three elements.

Chord is minor when interval between first and second element equals 3 and between second and third -> 4.

Chord is major when interval between first and second element equals 4 and between second and third -> 3.

In minor/major chord interval between first and third element equals... 7.

There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost) all allowed note' s names in music.

notes = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']

Note that e. g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

Input: String of notes separated by whitespace, e. g. 'A C# E'

Output: String message: 'Minor', 'Major' or 'Not a chord'. */
function minorOrMajor(chord){
    if(chord.split(' ').length>3)
      return 'Not a chord';
  
    const [first, second, third] = chord.split(' ');
    const sharpNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const flatNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    let notes = [];
    
    const firstNote = (/#/.test(first)) ? sharpNotes.indexOf(first) : flatNotes.indexOf(first);
    const secondNote = (/#/.test(second)) ? sharpNotes.indexOf(second) : flatNotes.indexOf(second);
    const thirdNote = (/#/.test(third)) ? sharpNotes.indexOf(third) : flatNotes.indexOf(third) ;
    
    if((thirdNote + 12 - firstNote) %12 === 7){
      if ((secondNote + 12 - firstNote) %12 === 3)
        return 'Minor';
      else if ((secondNote + 12 - firstNote) %12 === 4)
        return 'Major';
    }
    return 'Not a chord';  
  }