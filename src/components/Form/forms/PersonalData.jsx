import React from "react";
import { Input, NumberInput, NumberInputField, Stack } from "@chakra-ui/react";
import FormikField from "./FormikField";
import {
  combineValidators,
  PESELIsCorrect,
  requiredValue,
} from "../helpers/validators";

const PersonalData = () => {
  return (
    <Stack spacing={6}>
      <FormikField
        name="first_name"
        label="Imię:"
        isRequired
        validate={requiredValue("Imię jest wymagane")}
      >
        <Input type="text" />
      </FormikField>
      <FormikField name="middle_name" label="Drugie imię:">
        <Input />
      </FormikField>
      <FormikField
        name="surname"
        label="Nazwisko:"
        isRequired
        validate={requiredValue("Nazwisko jest wymagane")}
      >
        <Input />
      </FormikField>
      <FormikField
        name="PESEL"
        label="PESEL:"
        isRequired
        validate={combineValidators(
          requiredValue("PESEL jest wymagany"),
          PESELIsCorrect("PESEL jest nieprawidłowy")
        )}
      >
        <Input type="number" />
      </FormikField>
    </Stack>
  );
};
export default PersonalData;
