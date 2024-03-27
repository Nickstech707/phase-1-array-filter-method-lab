// Code your solution here
// This function searches for all matches in an array based on a search string.
function findMatching(source, sought) {
    // Returns an array of items that match the search string exactly, ignoring case.
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }
  
  // This function performs a fuzzy match on an array based on a test string.
  function fuzzyMatch(source, testString) {
    // Returns an array of items that start with the test string, ignoring case.
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  // This function searches for objects in an array where the 'name' property matches the 'soughtName'.
  function matchName(source, soughtName) {
    // Returns an array of objects where the 'name' property is exactly equal to 'soughtName'.
    return source.filter((record) => record.name === soughtName);
  }
