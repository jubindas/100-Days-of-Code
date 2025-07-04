let numbers = [3, 5, 7, 2, 8, 10, 1];
let maxNum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
}
console.log("The maximum number is " + maxNum);
