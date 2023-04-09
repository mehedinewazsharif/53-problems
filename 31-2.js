// Solution 2

function countWords(text) {
    var words = 0;

    if (text.length > 0 && !isSeparator(text[0]))
        words++;

    for (var i = 1; i < text.length; i++) {
        var currChr = text[i];
        var prevChr = text[i - 1];

        if (!isSeparator(currChr) && isSeparator(prevChr)) {
            words++;
        }
    }

    return words;
}

function isSeparator(c) {
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with Lead Educare"));
