export function capitalize(word: string): string {
  if (word.length === 0) {
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

export function isAlphaNumeric(s: string) {
  let code, i, len;

  for (i = 0, len = s.length; i < len; i++) {
    code = s.charCodeAt(i);
    if (!((isNumeric(code)) || isAlpha(code))) {
      return false;
    }
  }
  return true;
}

export function isAlphabetic(s: string) {
  let code, i, len;

  for (i = 0, len = s.length; i < len; i++) {
    code = s.charCodeAt(i);
    if (!isAlpha(code)) {
      return false;
    }
  }
  return true;
}

function isNumeric(code: number) {
  return (code >= getASCII('0') && code <= getASCII('9'));
}

function isAlpha(code: number) {
  return (code >= getASCII('A') && code <= getASCII('Z')) ||
    (code >= getASCII('a') && code <= getASCII('z'));
}

export function getASCII(ch: string): number {
  return ch.charCodeAt(0);
}

