export const getSexFromPesel = (pesel) => {
  const peselString = `${pesel}`;
  const numberCorrespondingToSex = peselString[9];
  return numberCorrespondingToSex % 2 === 0 ? "K" : "M";
};

export const checkIfPeselIsCorrect = (pesel) => {
  const checkMultipliers = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

  const peselString = `${pesel}`.split("");
  const controlNumber = peselString[peselString.length - 1];
  const valuesToCheck = peselString.slice(0, 10);

  const controlSum = valuesToCheck.reduce(
    (acc, digit, index) => acc + +digit * checkMultipliers[index],
    0
  );

  const controlSumArray = `${controlSum}`.split("");
  const lastFromControlSum = controlSumArray[controlSumArray.length - 1];

  return +controlNumber === 10 - +lastFromControlSum;
};
