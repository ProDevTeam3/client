import faker from "faker";
import { voivodeship as voivodeships } from "../constants/voivodeship";
import {
  contractType,
  currencies,
  familyType,
  sex,
  accomodationType,
  marital,
  education,
  disability,
} from "../constants/formData";
import { countries } from "../constants/countries";
import { defaultAxios } from "../config/axios";
import { createStandaloneToast } from "@chakra-ui/toast";

faker.locale = "pl";

const MAX_DIVERSITY = 20;

const voivodeshipNames = Object.keys(voivodeships);
const districtNames = Object.values(voivodeships)
  .map(Object.keys)
  .reduce((acc, values) => [...acc, ...values], [])
  .slice(0, MAX_DIVERSITY);
const communeNames = Object.values(voivodeships)
  .map(Object.values)
  .map(Object.values)
  .reduce((acc, values) => [...acc, ...values], [])
  .map(Object.values)
  .reduce((acc, values) => [...acc, ...values], [])
  .reduce((acc, values) => [...acc, ...values], [])
  .slice(0, MAX_DIVERSITY);
const cityNames = Object.values(voivodeships)
  .map(Object.values)
  .map(Object.values)
  .map(Object.values)
  .reduce((acc, values) => [...acc, ...values], [])
  .map(Object.values)
  .reduce((acc, values) => [...acc, ...values], [])
  .reduce((acc, values) => [...acc, ...values], [])
  .slice(0, MAX_DIVERSITY);
const countryNames = countries.slice(0, MAX_DIVERSITY);

const generateAddress = () => ({
  street: faker.address.streetName(),
  postal_code: faker.address.zipCode("##-###"),
  city: faker.random.arrayElement(cityNames),
  district: faker.random.arrayElement(districtNames),
  commune: faker.random.arrayElement(communeNames),
  voivodeship: faker.random.arrayElement(voivodeshipNames),
  country: "Polska",
});

const generateContract = () => ({
  type: faker.random.arrayElement(contractType),
  income: faker.datatype.number({ min: 1000, max: 30000 }),
  currency: faker.random.arrayElement(currencies),
});

const generateCompany = () => ({
  name: faker.company.companyName(),
  NIP: faker.datatype.number({ min: 1000000000, max: 9999999999 }),
  industry: faker.random.arrayElement([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
  ]),
  contract: [generateContract()],
});

const generateCompanyArray = () => {
  const randomCompaniesNumber = faker.datatype.number(3);
  return new Array(randomCompaniesNumber).fill(0).map(generateCompany);
};

const generateFamilyMember = () => ({
  name: faker.name.firstName(),
  surname: faker.name.lastName(),
  type: faker.random.arrayElement(familyType),
  PESEL: faker.datatype.number({ min: 10000000000, max: 99999999999 }),
  date_of_birth: faker.date.past(60).toISOString().split("T")[0],
  sex: faker.random.arrayElement(sex),
});

const generateFamily = () => {
  const randomFamilyMembers = faker.datatype.number(3);
  return new Array(randomFamilyMembers).fill(0).map(generateFamilyMember);
};

const generateAccomodation = () => ({
  with_parents: faker.datatype.boolean(),
  num_of_residents: faker.datatype.number(5),
  house_type: faker.random.arrayElement(accomodationType),
});

const generateAdditionalInfo = () => ({
  internet_access: faker.datatype.boolean(),
  family_income: faker.datatype.number(1500000),
  num_of_cars_in_family: faker.datatype.number(5),
  disability: faker.random.arrayElement(disability),
});

const generatePersonalInfo = () => ({
  first_name: faker.name.firstName(),
  surname: faker.name.lastName(),
  nationality: faker.random.arrayElement(countryNames),
  PESEL: faker.datatype.number({ min: 10000000000, max: 99999999999 }),
  date_of_birth: faker.date.past(60).toISOString().split("T")[0],
  sex: faker.random.arrayElement(sex),
  education: faker.random.arrayElement(education),
  marital_status: faker.random.arrayElement(marital),
});

const generateCitizen = () => ({
  ...generatePersonalInfo(),
  home_address: generateAddress(),
  registered_address: generateAddress(),
  company: generateCompanyArray(),
  family: generateFamily(),
  accomodation: generateAccomodation(),
  additional_info: generateAdditionalInfo(),
});

const addOneToDatabase = () => {
  return defaultAxios.post("/citizen/addCitizen", generateCitizen());
};

export const addCitizenToDatabase = async (num) => {
  console.log("Started adding records");
  const toast = createStandaloneToast();
  const toastId = `toast_add_${Date.now()}`;
  toast({
    id: toastId,
    title: "Trwa dodawanie do bazy danych",
    status: "info",
    duration: null,
    isClosable: false,
  });
  let counter = 0;
  const arrayOfPromises = new Array(num).fill(0).map(() =>
    addOneToDatabase().then(() => {
      counter += 1;
      toast.update(toastId, {
        description: `Dodano: ${counter}/${num} rekordów`,
        duration: null,
      });
      return Promise.resolve(counter);
    })
  );
  return Promise.allSettled(arrayOfPromises)
    .then((results) => {
      const successNum = results.filter(
        (result) => result.status === "fulfilled"
      );
      toast({
        title: `Dodano ${successNum.length} rekordów do bazy`,
        status: "success",
        isClosable: true,
      });
    })
    .catch((error) => {
      toast({
        title: `Podczas dodawania wystąpił błąd`,
        status: "error",
        isClosable: true,
      });
    })
    .finally(() => {
      toast.update(toastId, { description: "", duration: 0 });
    });
};
