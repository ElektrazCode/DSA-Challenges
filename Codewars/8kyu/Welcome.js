/**Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied */
function greet(language) {
    let output;
    switch(language){
        case "english": output = 'Welcome'; break;
        case "czech": output = 'Vitejte'; break;
        case "danish": output = 'Velkomst'; break;
        case "dutch": output = 'Welkom'; break;
        case "estonian": output = 'Tere tulemast'; break;
        case "finnish": output = 'Tervetuloa'; break;
        case "flemish": output = 'Welgekomen'; break;
        case "french": output = 'Bienvenue'; break;
        case "german": output = 'Willkommen'; break;
        case "irish": output = 'Failte'; break;
        case "italian": output = 'Benvenuto'; break;
        case "latvian": output = 'Gaidits'; break;
        case "lithuanian": output = 'Laukiamas'; break;
        case "polish": output = 'Witamy'; break;
        case "spanish": output = 'Bienvenido'; break;
        case "swedish": output = 'Valkommen'; break;
        case "welsh": output = 'Croeso'; break;
        default : output = "Welcome";
    }
    return output;
  }
 //Better Solution
 function greet(lang) {
    return langs[lang]||langs['english'];
  }
  
  var langs = {
  'english': 'Welcome',
  'czech': 'Vitejte',
  'danish': 'Velkomst',
  'dutch': 'Welkom',
  'estonian': 'Tere tulemast',
  'finnish': 'Tervetuloa',
  'flemish': 'Welgekomen',
  'french': 'Bienvenue',
  'german': 'Willkommen',
  'irish': 'Failte',
  'italian': 'Benvenuto',
  'latvian': 'Gaidits',
  'lithuanian': 'Laukiamas',
  'polish': 'Witamy',
  'spanish': 'Bienvenido',
  'swedish': 'Valkommen',
  'welsh': 'Croeso'
  };