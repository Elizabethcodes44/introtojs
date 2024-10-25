let size = 8;
let hash = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    // If the sum of row and column indexes is even, place a space, otherwise place a '#'
    if ((row + col) % 2 == 0) {
      hash += " ";
    } else {
      hash += "#";
    }
  }
  hash += "\n"; // Add newline character at the end of each row
}

console.log(hash);

let labels = [];
labels.forEach(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]