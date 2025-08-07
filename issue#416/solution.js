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
SGkgQ2Fzc2lkbHkgJlx1MjA2MwpJZiB5b3UncmUgcmVhZGluZyB0aGlzLCB5b3UndmUgc3R1bWJsZWQgdXBvbiBhIGhpZGRlbiBlZ2cgaW4gbXkgY29kZS4gSXQgc3RhcnRzIHdpdGggYSBodW1ibGUgYnV0IGdlbnVpbmUgbm90aW9uLiBUaGUgYmx1ZSBtYXAgZG9lc24ndCBsZWFkIHlvdS4gQnV0IHdoYXQgaWYgeW91IGZvbGxvdyB0aGUgc2hhZG93cyBkb3duIHRoZSByYWJiaXQgaG9sZT8gU3RhcnQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL21sYWFzeWEwNy80MDQtUDAzTS4zWDMgaHR0cHM6Ly80MDQtcDAzbS0z eC5uZXRsaWZ5LmFwcC8gYW5kIGxvb2sgZm9yICJQMDNNIiBpbiB0aGUgZm9vdGVyLgpTZWUgeW91IHRoZXJlLgo=
`.trim();

console.log("Pssst. There's an encoded message for you, Cassidy! 👀");
console.log("Base64 →", message);
