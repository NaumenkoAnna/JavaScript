

function getWordStructure(word){
let numbersOfVowels = 0
let numbersOfConsonants = 0
const vowels = "eyuoai".split("")
const consonants = "qwrtpsdfghjklzxcvbnm".split("")
  for (letter of word.toLowerCase()){
      if (vowels.includes(letter)) numbersOfVowels++
      if (consonants.includes(letter)) numbersOfConsonants++
  } 
  console.log(`Word ${word} includes of ${numbersOfVowels} vowels, and ${numbersOfConsonants} of consonants letters`)
}

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
getWordStructure("Anna Naumenko")