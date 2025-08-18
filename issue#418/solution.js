function createLaundryItem() {
  const cycles = ["soak", "wash", "rinse", "spin", "dry"];
  let index = 0;

  return {
    nextCycle() {
      if (index < cycles.length) {
        return cycles[index++];
      } else {
        return "done";
      }
    }
  };
}

let towel = createLaundryItem();

console.log(towel.nextCycle()); // "soak"
console.log(towel.nextCycle()); // "wash"
console.log(towel.nextCycle()); // "rinse"
console.log(towel.nextCycle()); // "spin"
console.log(towel.nextCycle()); // "dry"
console.log(towel.nextCycle()); // "done"
console.log(towel.nextCycle()); // "done"
