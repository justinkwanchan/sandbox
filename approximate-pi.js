// Area = (pi * r^2) / 4

const size = process.argv[2];

const approximatePi = dataSize => {
  let circleCount = 0;
  let squareCount = 0;

  for (let i = 0; i < dataSize; i++) {
    const x = Math.random();
    const y = Math.random();

    if (x ** 2 + y ** 2 < 1) {
      circleCount++;
    }

    squareCount++;
  }

  return (circleCount / squareCount) * 4;
};

console.log(approximatePi(size));
