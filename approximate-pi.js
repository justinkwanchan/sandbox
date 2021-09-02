// Area = (pi * r^2) / 4

const numArr = [];
const dataSize = 10000;

for (let i = 0; i < dataSize; i++) {
  numArr.push(Math.random());
}

let circleCount = 0;
let sampleSize = 0;

for (let i = 0; i < dataSize; i++) {
  for (let j = i + 1; j < dataSize; j++) {
    if (numArr[i] ** 2 + numArr[j] ** 2 < 1) {
      circleCount++;
    }

    sampleSize++;
  }
}

console.log((circleCount / sampleSize) * 4);
