export function capitalize(word: string): string{
  if (word.length === 0){
    return word;
  }
  const lowerCasedWord = word.toLowerCase()
  return lowerCasedWord.charAt(0).toUpperCase() + lowerCasedWord.slice(1);
}

// capitalize("") === ""
// capitalize("w") === "W"
// capitalize("W") === "W"
// capitalize("word") === "Word"
// capitalize("wOWOW") === "Wowow"
// capitalize("WORD") === "Word"
