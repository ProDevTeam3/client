import React from "react";
import {
  Select,
  NumberInput,
  NumberInputField,
  Stack,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import FormikField from "./FormikField";
import { requiredValue } from "../helpers/validators";
import { accomodationType } from "../../../constants/formData";

const Accomodation = () => {
  return (
    <Stack spacing={6}>
      <FormikField
        name="accomodation[][with_parents]"
        label="Mieszkasz z rodzicami?"
        validate={requiredValue("Odpowiedź na to pytanie jest wymagana")}
        renderChildren={({ field }) => (
          <RadioGroup {...field}>
            <HStack spacing="24px">
              <Radio {...field} value="true">
                Tak
              </Radio>
              <Radio {...field} value="false">
                Nie
              </Radio>
            </HStack>
          </RadioGroup>
        )}
      />
      <FormikField
        name="accomodation[][num_of_residents]"
        label="Liczba domowników:"
        isRequired
        validate={requiredValue("Odpowiedź na to pytanie jest wymagana")}
        renderChildren={({ field }) => (
          <NumberInput>
            <NumberInputField {...field} id="num_of_residents" />
          </NumberInput>
        )}
      />
      <FormikField
        name="accomodation[][house_type]"
        label="Typ zakwaterowania:"
        isRequired
        validate={requiredValue("Odpowiedź na to pytanie jest wymagana")}
      >
        <Select placeholder="Wybierz rodzaj zakwaterowania">
          {accomodationType.map((accomodation) => (
            <option value={accomodation}>{accomodation}</option>
          ))}
        </Select>
      </FormikField>
    </Stack>
  );
};
export default Accomodation;
