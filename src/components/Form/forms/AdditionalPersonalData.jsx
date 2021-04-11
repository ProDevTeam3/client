import React from "react";
import {
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Stack,
} from "@chakra-ui/react";
import FormikField from "./FormikField";
import { requiredValue } from "../helpers/validators";
import { education, marital } from "../../../constants/formData";

const AdditionalPersonalData = () => {
  return (
    <Stack spacing={6}>
      <FormikField
        name="date_of_birth"
        label="Data urodzenia:"
        isRequired
        validate={requiredValue("Data urodzenia jest wymagana")}
      >
        <Input type="date" />
      </FormikField>
      <FormikField
        name="sex"
        label="Płeć:"
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
      ></FormikField>
      <FormikField
        name="marital_status"
        label="Stan cywilny:"
        isRequired
        validate={requiredValue("Stan cywilny jest wymagany")}
      >
        <Select placeholder="Wybierz stan cywilny">
          {marital.map((maritalStatus) => (
            <option value={maritalStatus}>{maritalStatus}</option>
          ))}
        </Select>
      </FormikField>
      <FormikField
        name="education"
        label="Wykształcenie:"
        isRequired
        validate={requiredValue("Wykształcenie jest wymagane")}
      >
        <Select placeholder="Wybierz wykształcenie">
          {education.map((educationLevel) => (
            <option value={educationLevel}>{educationLevel}</option>
          ))}
        </Select>
      </FormikField>
    </Stack>
  );
};
export default AdditionalPersonalData;
