// var uniqueMorseRepresentations = function (words) {
//   // asign key-value pairs to morse code
//   const MORSE_CODE = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//   };

//   const morseSet = new Set();
//   for (let i = 0; i < words.length; i++) {
//     let morseCode = "";
//     for (let j = 0; j < words[i].length; j++) {
//       morseCode += MORSE_CODE[words[i][j]];
//     }
//     morseSet.add(morseCode);
//   }
//   return morseSet.size;
// };
var uniqueMorseRepresentations = function (words) {
  const MORSE_CODES = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const morseSet = new Set();
  for (let i = 0; i < words.length; i++) {
    let morseCode = "";
    for (let j = 0; j < words[i].length; j++) {
      morseCode += MORSE_CODES[words[i].charCodeAt(j) - 97];
    }
    morseSet.add(morseCode);
  }
  return morseSet.size;
};
