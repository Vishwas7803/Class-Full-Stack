function processParagraph(paragraph) {
    const words = paragraph.split(' ');
    const filteredWords = words.filter(word => word.length >= 5);
    const capitalizedWords = filteredWords.map(word => word.toUpperCase());
    const result = capitalizedWords.join('');
    return result;
}
const paragraph = "This is an example paragraph with various word lengths.";
const output = processParagraph(paragraph);
console.log(output);
