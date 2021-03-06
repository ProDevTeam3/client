import React, { useState } from "react";
import {
  Input,
  Stack,
  Radio,
  RadioGroup,
  Button,
  HStack,
  Text,
  Select,
  Box,
} from "@chakra-ui/react";
import FormikField from "./FormikField";
import { familyType } from "../../../constants/formData";
import {
  combineValidators,
  PESELIsCorrect,
  requiredValue,
} from "../helpers/validators";

const Family = ({ values }) => {
  const [numOfFamilyMembers, setNumOfFamilyMembers] = useState(
    values?.family?.length ?? 0
  );

  const addNewFamilyMember = () =>
    setNumOfFamilyMembers((oldState) => oldState + 1);
  const removeLastFamilyMember = () =>
    setNumOfFamilyMembers((oldState) => {
      values.family?.pop();
      return oldState - 1;
    });

  return (
    <Stack spacing={6}>
      <Text>
        Proszę uzupełnić dane osób z rodziny, które znajdowały się 31 Marca 2021
        o godzinie 23:59 pod tym samym adresem co osoba spisująca.
      </Text>
      {new Array(numOfFamilyMembers).fill(0).map((_, index) => (
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
              name={`family.${index}.type`}
              label="Pokrewieństwo:"
              isRequired
              validate={requiredValue("Pokrewieństwo jest wymagane")}
              errorPath={(errors) => errors?.family?.[index]?.type}
            >
              <Select placeholder="Wybierz pokrewieństwo">
                {familyType.map((type) => (
                  <option value={type}>{type}</option>
                ))}
              </Select>
            </FormikField>
            <FormikField
              name={`family.${index}.first_name`}
              label="Imię:"
              isRequired
              validate={requiredValue("Imię jest wymagane")}
              errorPath={(errors) => errors?.family?.[index]?.first_name}
            >
              <Input type="text" />
            </FormikField>
            <FormikField
              name={`family.${index}.surname`}
              label="Nazwisko:"
              isRequired
              validate={requiredValue("Nazwisko jest wymagane")}
              errorPath={(errors) => errors?.family?.[index]?.surname}
            >
              <Input type="text" />
            </FormikField>
            <FormikField
              name={`family.${index}.PESEL`}
              label="PESEL:"
              isRequired
              validate={combineValidators(
                requiredValue("PESEL jest wymagany"),
                PESELIsCorrect("PESEL jest nieprawidłowy")
              )}
              errorPath={(errors) => errors?.family?.[index]?.PESEL}
            >
              <Input type="text" />
            </FormikField>
            <FormikField
              name={`family.${index}.date_of_birth`}
              label="Data urodzenia:"
              validate={requiredValue("Data urodzenia jest wymagana")}
              errorPath={(errors) => errors?.family?.[index]?.date_of_birth}
            >
              <Input type="date" />
            </FormikField>
            <FormikField
              name={`family.${index}.sex`}
              label="Płeć:"
              isRequired
              validate={requiredValue("Płeć jest wymagana")}
              errorPath={(errors) => errors?.family?.[index]?.sex}
              renderChildren={({ field }) => (
                <RadioGroup {...field}>
                  <HStack spacing="24px">
                    <Radio {...field} value="M">
                      Mężczyzna
                    </Radio>
                    <Radio {...field} value="K">
                      Kobieta
                    </Radio>
                  </HStack>
                </RadioGroup>
              )}
            />
          </Stack>
        </Box>
      ))}
      <HStack spacing={6}>
        <Button onClick={addNewFamilyMember}>Dodaj członka rodziny</Button>
        {numOfFamilyMembers > 0 && (
          <Button
            type="outline"
            colorScheme="red"
            onClick={removeLastFamilyMember}
          >
            Usuń ostatniego członka rodziny
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
export default Family;
