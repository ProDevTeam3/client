import { checkIfPeselIsCorrect, getSexFromPesel } from "./pesel";

export const requiredValue = (text) => (value) => {
  if (!value) return text;
  return undefined;
};

export const sexMatchesPESEL = (text) => (sex, pesel) => {
  if (!sex || !pesel) return undefined;
  return sex === getSexFromPesel(pesel) ? undefined : text;
};

export const dateOfBirthMatchesPESEL = (text) => (dateOfBirth, pesel) => {
  if (!dateOfBirth || !pesel) return undefined;
  const [year, month, day] = dateOfBirth.split("-");
  const century = year.split("").slice(0, 2).join("");
  const yearEnd = year.split("").slice(2, 4).join("");

  const monthWithCentury = (century === "20" ? 20 : 0) + +month;
  const correctMonthLength =
    `${monthWithCentury}`.length === 1
      ? `0${monthWithCentury}`
      : `${monthWithCentury}`;

  const peselArray = `${pesel}`.split("");
  const peselYear = peselArray.slice(0, 2).join("");
  const peselMonth = peselArray.slice(2, 4).join("");
  const peselDay = peselArray.slice(4, 6).join("");

  const yearCheck = yearEnd === peselYear;
  const monthCheck = correctMonthLength === peselMonth;
  const dayCheck = day === peselDay;

  return yearCheck && monthCheck && dayCheck ? undefined : text;
};

export const PESELIsCorrect = (text) => (pesel) => {
  if (!pesel) return text;
  if (`${pesel}`.length !== 11) return text;
  return checkIfPeselIsCorrect(pesel) ? undefined : text;
};

export const NIPIsCorrect = (text) => (nip) => {
  if (!nip) return text;
  if (`${nip}`.length !== 10) return text;
  const checkMultipliers = [6, 5, 7, 2, 3, 4, 5, 6, 7];

  const nipString = `${nip}`.split("");
  const controlNumber = nipString[nipString.length - 1];
  const valuesToCheck = nipString.slice(0, 9);

  const controlSum = valuesToCheck.reduce(
    (acc, digit, index) => acc + +digit * checkMultipliers[index],
    0
  );

  const controlSumArray = `${controlSum}`.split("");
  const lastFromControlSum = controlSumArray[controlSumArray.length - 1];

  return +controlNumber === +lastFromControlSum % 11 ? undefined : text;
};

export const correctPostalCode = (text) => (postalCode) => {
  return /^\d{2}-\d{3}$/g.test(postalCode) ? undefined : text;
};

export const combineValidators = (...validators) => (value) => {
  return validators.reduce((error, validator) => {
    if (error !== undefined) return error;
    return validator(value);
  }, undefined);
};
