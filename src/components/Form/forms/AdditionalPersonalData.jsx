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
import {
  education,
  maritalFemale,
  maritalMale,
} from "../../../constants/formData";
import { countries } from "../../../constants/countries";

const AdditionalPersonalData = ({ ref }) => {
  const selectedSex = ref?.current?.values.sex;
  const isMale = selectedSex === "M";
  const isFemale = selectedSex === "K";

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
        isRequired
        validate={requiredValue("Płeć jest wymagana")}
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
      <FormikField
        name="nationality"
        label="Narodowść:"
        isRequired
        validate={requiredValue("Stan cywilny jest wymagany")}
      >
        <Select placeholder="Wybierz narodowość">
          {countries.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </Select>
      </FormikField>
      <FormikField
        name="marital_status"
        label="Stan cywilny:"
        isRequired
        validate={requiredValue("Stan cywilny jest wymagany")}
      >
        <Select placeholder="Wybierz stan cywilny">
          {(isMale ? maritalMale : isFemale ? maritalFemale : []).map(
            (maritalStatus) => (
              <option value={maritalStatus}>{maritalStatus}</option>
            )
          )}
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
