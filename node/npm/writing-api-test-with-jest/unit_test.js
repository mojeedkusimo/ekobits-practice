function letterCount(str, char) {
  if (typeof(str) !== "string") {
      return "Invalid input"
  }
    let count = 0;
    for (let letter of str) {
      if (letter.toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
    return count;
}

module.exports = letterCount;