/**
 * Checks if all monsters are at least `d` units apart.
 * If not, returns the smallest distance found between any two.
 * If all monsters are safely spaced, returns -1.
 *
 * @param {number[]} arr - Array of monster positions
 * @param {number} d - Minimum safe distance
 * @returns {number} - Smallest unsafe distance, or -1 if all are safe
 */
function minMonsterDistance(arr, d) {
  if (arr.length < 2) return -1;

  // Sort the positions so we can compare neighbors
  arr.sort((a, b) => a - b);

  let minDist = Infinity;

  for (let i = 1; i < arr.length; i++) {
    let dist = arr[i] - arr[i - 1];
    if (dist < d) {
      minDist = Math.min(minDist, dist);
    }
  }

  return minDist === Infinity ? -1 : minDist;
}

// --- Examples ---
console.log(minMonsterDistance([3, 8, 10, 15], 6)); // Output: 2
console.log(minMonsterDistance([5, 9, 14, 18], 4)); // Output: -1

// 🥚 P.S. Dear Cassidoo, this function is monster-approved 👾
