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
            name="registered_address.country"
            label="Kraj:"
            isRequired
            validate={requiredValue("Kraj jest wymagany")}
            errorPath={(errors) => errors?.registered_address?.country}
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address.voivodeship"
            label="Województwo:"
            isRequired
            validate={requiredValue("Województwo jest wymagane")}
            errorPath={(errors) => errors?.registered_address?.voivodeship}
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
            name="registered_address.commune"
            label="Gmina:"
            isRequired
            validate={requiredValue("Gmina jest wymagana")}
            errorPath={(errors) => errors?.registered_address?.commune}
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address.district"
            label="Powiat:"
            isRequired
            validate={requiredValue("Powiat jest wymagany")}
            errorPath={(errors) => errors?.registered_address?.district}
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address.city"
            label="Miasto:"
            isRequired
            validate={requiredValue("Miasto jest wymagane")}
            errorPath={(errors) => errors?.registered_address?.city}
          >
            <Input />
          </FormikField>
          <FormikField
            name="registered_address.postal_code"
            label="Kod pocztowy:"
            isRequired
            errorPath={(errors) => errors?.registered_address?.postal_code}
            validate={combineValidators(
              requiredValue("Kod pocztowy jest wymagany"),
              correctPostalCode("Kod pocztowy jest niepoprawny")
            )}
          >
            <Input type="text" />
          </FormikField>
          <FormikField
            name="registered_address.street"
            label="Ulica:"
            isRequired
            validate={requiredValue("Ulica jest wymagana")}
            errorPath={(errors) => errors?.registered_address?.street}
          >
            <Input type="text" />
          </FormikField>
        </>
      )}
    </Stack>
  );
};
export default RegisteredAddress;
