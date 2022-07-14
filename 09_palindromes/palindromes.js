const palindromes = function (word) {
    const regex = /[^a-z]/g;
    let wordReversed = word.toLowerCase().replace(regex, "").split('').reverse().join("");
    console.log(wordReversed)
    console.log(word.toLowerCase().replace(regex, ""))
    return word.toLowerCase().replace(regex, "") === wordReversed;

};


// Do not edit below this line
module.exports = palindromes;
