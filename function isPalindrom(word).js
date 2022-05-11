


function isPalindrom(word){
    word = word.toLowerCase().replace(/\s+/g, "")

if (word == word.split("").reverse().join("")){
    console.log("It is a palindrome")
}  else {
    console.log("It is not a palindrome")
}
}
isPalindrom("А роза упала на лапу Азора")







