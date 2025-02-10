function getNumberOfDays(year, month) {
  return new Date(year, month, 0).getDate();
}

// Example usage
let year = 1000;
let month = 2; // October (0-based index, so 9 = October)
let numberOfDays = getNumberOfDays(year, month);

console.log(`Number of days in ${year}-${month}: ${numberOfDays}`);
let column = numberOfDays % 7;
