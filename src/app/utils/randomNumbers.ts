const generateRandomNumbers = (lowerBound, upperBound, numberCount) => {
  let randoms = [];

  for (let i = 0; i < numberCount; i++) {
    let n = Math.floor(Math.random() * upperBound) + lowerBound;

    while(randoms.includes(n)) {
      n = Math.floor(Math.random() * upperBound) + lowerBound;
    }

    randoms.push(n);
  }

  return randoms;
}

export { generateRandomNumbers };
