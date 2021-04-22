import React, { useState } from "react";
import {
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Box,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";
import FormikField from "./FormikField";
import {
  combineValidators,
  NIPIsCorrect,
  requiredValue,
} from "../helpers/validators";
import {
  contractType,
  currencies,
  industryType,
} from "../../../constants/formData";

const Work = (values) => {
  const [numOfCompanies, setNumOfCompanies] = useState([]);

  const addNewCompany = () => setNumOfCompanies((oldState) => [...oldState, 0]);
  const removeCompany = () =>
    setNumOfCompanies((oldState) => {
      const newState = [...oldState];
      newState.pop();
      values.company?.pop();
      return newState;
    });
  const addNewContract = (index) =>
    setNumOfCompanies((oldState) => {
      const newState = [...oldState];
      newState[index] += 1;
      return newState;
    });
  const removeContract = (index) =>
    setNumOfCompanies((oldState) => {
      const newState = [...oldState];
      newState[index] -= 1;
      values.company?.[index]?.contract?.pop();
      return newState;
    });

  return (
    <Stack spacing={6}>
      {numOfCompanies.map((contracts, index) => (
        <Box
          border="1px"
          paddingX="5"
          paddingY="2"
          borderRadius="lg"
          borderColor="gray.300"
          bg="whiteAlpha.300"
        >
          <Stack spacing={3}>
            <FormikField
              name={`company.${index}.name`}
              label="Nazwa firmy:"
              isRequired
              validate={requiredValue("Nazwa firmy jest wymagana")}
              errorPath={(errors) => errors?.company?.[index]?.name}
            >
              <Input type="text" />
            </FormikField>
            <FormikField
              name={`company.${index}.NIP`}
              label="NIP:"
              isRequired
              validate={combineValidators(
                requiredValue("NIP jest wymagany"),
                NIPIsCorrect("Numer NIP jest niepoprawny")
              )}
              errorPath={(errors) => errors?.company?.[index]?.NIP}
            >
              <Input type="number" />
            </FormikField>
            <FormikField
              name={`company.${index}.industry`}
              label="Branża:"
              isRequired
              validate={requiredValue("Branża jest wymagana")}
              errorPath={(errors) => errors?.company?.[index]?.industry}
            >
              <Select placeholder="Wybierz branżę">
                {industryType.map((industry) => (
                  <option value={industry.code}>{industry.name}</option>
                ))}
              </Select>
            </FormikField>

            <Box padding="3" borderTop="1px" borderColor="gray.300">
              {new Array(contracts).fill(0).map((_, indexContract) => (
                <Stack spacing={3} marginBottom={6}>
                  <FormikField
                    name={`company.${index}.contract.${indexContract}.type`}
                    label="Typ umowy:"
                    isRequired
                    validate={requiredValue("Typ umowy jest wymagany")}
                    errorPath={(errors) =>
                      errors?.company?.[index]?.contract?.[indexContract]?.type
                    }
                  >
                    <Select placeholder="Wybierz typ umowy">
                      {contractType.map((contract) => (
                        <option value={contract}>{contract}</option>
                      ))}
                    </Select>
                  </FormikField>
                  <FormikField
                    name={`company.${index}.contract.${indexContract}.income`}
                    label="Dochód:"
                    isRequired
                    validate={requiredValue("Typ umowy jest wymagany")}
                    errorPath={(errors) =>
                      errors?.company?.[index]?.contract?.[indexContract]
                        ?.income
                    }
                  >
                    <Input type="number" />
                  </FormikField>

                  <FormikField
                    name={`company.${index}.contract.${indexContract}.currency`}
                    label="Waluta:"
                    isRequired
                    validate={requiredValue("Waluta jest wymagana")}
                    errorPath={(errors) =>
                      errors?.company?.[index]?.contract?.[indexContract]
                        ?.currency
                    }
                  >
                    <Select placeholder="Wybierz walutę">
                      {currencies.map((currency) => (
                        <option value={currency}>{currency}</option>
                      ))}
                    </Select>
                  </FormikField>
                </Stack>
              ))}
              <HStack spacing={6}>
                <Button onClick={() => addNewContract(index)}>
                  Dodaj kontrakt
                </Button>
                {contracts > 0 && (
                  <Button
                    type="outline"
                    colorScheme="red"
                    onClick={() => removeContract(index)}
                  >
                    Usuń ostatni kontrakt
                  </Button>
                )}
              </HStack>
            </Box>
          </Stack>
        </Box>
      ))}
      <HStack spacing={6}>
        <Button onClick={addNewCompany}>Dodaj firmę</Button>
        {numOfCompanies.length > 0 && (
          <Button type="outline" colorScheme="red" onClick={removeCompany}>
            Usuń ostatnią firmę
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
export default Work;
