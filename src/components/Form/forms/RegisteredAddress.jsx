import React, { useState } from "react";
import {
  Input,
  Stack,
  Select,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import FormikField from "./FormikField";
import {
  combineValidators,
  correctPostalCode,
  requiredValue,
} from "../helpers/validators";
import { voivodeships } from "../../../constants/formData";
import HomeAddress from "./Address";

const RegisteredAddress = () => {
  const [isUsingHomeAddress, setIsUsingHomeAddress] = useState(false);

  return (
    <Stack spacing={6}>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="useHomeAddress" mb="0">
          Wykorzystaj adres zamieszkania jako adres zameldowania
        </FormLabel>
        <Switch
          id="useHomeAddress"
          value={isUsingHomeAddress}
          onChange={(event) => setIsUsingHomeAddress(event.target.checked)}
        />
      </FormControl>
      {isUsingHomeAddress ? (
        <HomeAddress isDisabled />
      ) : (
        <>
          <FormikField
            name="registered_address[][street]"
            label="Ulica:"
            isRequired
            validate={requiredValue("Ulica jest wymagana")}
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address[][city]"
            label="Miasto:"
            isRequired
            validate={requiredValue("Miasto jest wymagane")}
          >
            <Input />
          </FormikField>
          <FormikField
            name="registered_address[][postal_code]"
            label="Kod pocztowy:"
            isRequired
            validate={combineValidators(
              requiredValue("Kod pocztowy jest wymagany"),
              correctPostalCode("Kod pocztowy jest niepoprawny")
            )}
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address[][district]"
            label="Powiat:"
            isRequired
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address[][commune]"
            label="Gmina:"
            isRequired
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address[][voivodeship]"
            label="Województwo:"
            isRequired
          >
            <Select
              name="voivodeship"
              id="voivodeship"
              placeholder="Województwo"
            >
              {voivodeships.map((voivodeship) => (
                <option value={voivodeship}>{voivodeship}</option>
              ))}
            </Select>
          </FormikField>
          <FormikField
            name="registered_address[][country]"
            label="Kraj:"
            isRequired
          >
            <Input type="text" />
          </FormikField>
        </>
      )}
    </Stack>
  );
};
export default RegisteredAddress;
