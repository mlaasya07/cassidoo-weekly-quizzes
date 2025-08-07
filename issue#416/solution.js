function minMonsterDistance(arr, d) {
  arr.sort((a, b) => a - b);
  let minDist = Infinity;

  for (let i = 1; i < arr.length; i++) {
    const dist = arr[i] - arr[i - 1];
    if (dist < d) {
      minDist = Math.min(minDist, dist);
    }
  }

  return minDist === Infinity ? -1 : minDist;
}

// Example 1
let monsters = [3, 8, 10, 15];
let distance = 6;
console.log(minMonsterDistance(monsters, distance)); // > 2

// Example 2
console.log(minMonsterDistance([5, 9, 14, 18], 4)); // > -1

// Easter Egg for Cassidy (Base64 encoded)
const message = `
SGkgQ2Fzc2lkeSEKSWYgeW91J3JlIHJlYWRpbmcgdGhpcywgeW91J3ZlIHN0dW1ibGVkIHVwb24gYSBoaWRkZW4gZWdnIGluIG15IGNvZGUuIEl0IHN0YXJ0cyB3aXRoIGEgaHVtYmxlIGJ1dCBnZW51aW5lIG5vdGlvbi4gVGhlIGJsdWUgbWFwIGRvZXNuJ3QgbGVhZCB5b3UuIEJ1dCB3aGF0IGlmIHlvdSBmb2xsb3cgdGhlIHNoYWRvd3MgZG93biB0aGUgcmFiYml0IGhvbGU/IFN0YXJ0IGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tbGFhc3lhMDcvY2Fzc2lkby13ZWVrbHktcXVpenplcy9pc3N1ZSM0MTYvZWFzdGVyLWVnZy5tZA==
`.trim();

console.log("Pssst. There's an encoded message for you, Cassidy! 👀");
console.log("Base64 →", message);
