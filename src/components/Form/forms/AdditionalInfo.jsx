import React from "react";
import {
  Select,
  NumberInput,
  NumberInputField,
  Stack,
  HStack,
  Radio,
  RadioGroup,
  Input,
} from "@chakra-ui/react";
import FormikField from "./FormikField";
import { requiredValue } from "../helpers/validators";
import { disability } from "../../../constants/formData";

const AdditionalInfo = () => {
  return (
    <Stack spacing={6}>
      <FormikField
        name="additional_info.internet_access"
        label="Posiadasz dostęp do internetu?"
        isRequired
        validate={requiredValue("Odpowiedź na to pytanie jest wymagana")}
        errorPath={(errors) => errors?.additional_info?.internet_access}
        renderChildren={({ field }) => (
          <RadioGroup {...field}>
            <HStack spacing="24px">
              <Radio {...field} value={true}>
                Tak
              </Radio>
              <Radio {...field} value={false}>
                Nie
              </Radio>
            </HStack>
          </RadioGroup>
        )}
      />
      <FormikField
        name="additional_info.family_income"
        label="Łączny dochód rodziny:"
        isRequired
        validate={requiredValue("Dochód rodziny jest wymagany")}
        errorPath={(errors) => errors?.additional_info?.family_income}
      >
        <Input type="number" />
      </FormikField>
      <FormikField
        name="additional_info.num_of_cars_in_family"
        label="Liczba pojazdów w rodzinie:"
        isRequired
        validate={requiredValue("Odpowiedź na to pytanie jest wymagana")}
        errorPath={(errors) => errors?.additional_info?.num_of_cars_in_family}
      >
        <Input type="number" />
      </FormikField>
      <FormikField
        name="additional_info.disability"
        label="Niepełnosprawność:"
        isRequired
        validate={requiredValue("Odpowiedź na to pytanie jest wymagana")}
        errorPath={(errors) => errors?.additional_info?.disability}
      >
        <Select placeholder="Wybierz stopień niepełnosprawności">
          {disability.map((disabilityType) => (
            <option value={disabilityType}>{disabilityType}</option>
          ))}
        </Select>
      </FormikField>
    </Stack>
  );
};
export default AdditionalInfo;
