import React from "react";
import { Input, Stack, Select } from "@chakra-ui/react";
import FormikField from "./FormikField";
import {
  combineValidators,
  correctPostalCode,
  requiredValue,
} from "../helpers/validators";
import { voivodeships } from "../../../constants/formData";
import PropTypes from "prop-types";

const HomeAddress = (props) => {
  const { isDisabled } = props ?? { isDisabled: false };
  return (
    <Stack spacing={6}>
      <FormikField
        name="home_address[][country]"
        label="Kraj:"
        isRequired
        isDisabled={isDisabled}
      >
        <Input type="text" />
      </FormikField>

      <FormikField
        name="home_address[][voivodeship]"
        label="Województwo:"
        isRequired
        isDisabled={isDisabled}
      >
        <Select placeholder="Województwo">
          {voivodeships.map((voivodeship) => (
            <option value={voivodeship}>{voivodeship}</option>
          ))}
        </Select>
      </FormikField>

      <FormikField
        name="home_address[][commune]"
        label="Gmina:"
        isRequired
        isDisabled={isDisabled}
      >
        <Input type="text" />
      </FormikField>

      <FormikField
        name="home_address[][district]"
        label="Powiat:"
        isRequired
        isDisabled={isDisabled}
      >
        <Input type="text" />
      </FormikField>

      <FormikField
        name="home_address[][city]"
        label="Miasto:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Miasto jest wymagane")}
      >
        <Input />
      </FormikField>

      <FormikField
        name="home_address[][street]"
        label="Ulica:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Ulica jest wymagana")}
      >
        <Input type="text" />
      </FormikField>

      <FormikField
        name="home_address[][postal_code]"
        label="Kod pocztowy:"
        isRequired
        isDisabled={isDisabled}
        validate={combineValidators(
          requiredValue("Kod pocztowy jest wymagany"),
          correctPostalCode("Kod pocztowy jest niepoprawny")
        )}
      >
        <Input type="text" />
      </FormikField>


    </Stack>
  );
};
HomeAddress.propTypes = {
  isDisabled: PropTypes.bool,
};
export default HomeAddress;
