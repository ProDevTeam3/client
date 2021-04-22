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
import { voivodeship } from "../../../constants/voivodeship";
import HomeAddress from "./Address";

const RegisteredAddress = ({ formikRef }) => {
  const [isUsingHomeAddress, setIsUsingHomeAddress] = useState(false);

  const currentVoivodeship =
  formikRef?.current?.values?.registered_address?.voivodeship;
  const currentDistrict = formikRef?.current?.values?.registered_address?.district;
  const currentCommune = formikRef?.current?.values?.registered_address?.commune;

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
            <Select placeholder="Wybierz kraj">
              <option value="Polska">Polska</option>
            </Select>
          </FormikField>
          <FormikField
            name="registered_address.voivodeship"
            label="Województwo:"
            isRequired
            validate={requiredValue("Województwo jest wymagane")}
            errorPath={(errors) => errors?.registered_address?.voivodeship}
          >
            <Select placeholder="Wybierz województwo">
              {Object.keys(voivodeship).map((voivodeshipName) => (
                <option value={voivodeshipName}>{voivodeshipName}</option>
              ))}
            </Select>
          </FormikField>
          <FormikField
            name="registered_address.district"
            label="Powiat:"
            isRequired
            validate={requiredValue("Powiat jest wymagany")}
            errorPath={(errors) => errors?.registered_address?.district}
          >
            <Select placeholder="Wybierz powiat">
              {Object.keys(voivodeship[currentVoivodeship] ?? {}).map(
                (districtName) => (
                  <option value={districtName}>{districtName}</option>
                )
              )}
            </Select>
          </FormikField>
          <FormikField
            name="registered_address.commune"
            label="Gmina:"
            isRequired
            validate={requiredValue("Gmina jest wymagana")}
            errorPath={(errors) => errors?.registered_address?.commune}
          >
            <Select placeholder="Wybierz gminę">
              {Object.keys(
                voivodeship[currentVoivodeship]?.[currentDistrict] ?? {}
              ).map((communeName) => (
                <option value={communeName}>{communeName}</option>
              ))}
            </Select>
          </FormikField>
          <FormikField
            name="registered_address.city"
            label="Miasto:"
            isRequired
            validate={requiredValue("Miasto jest wymagane")}
            errorPath={(errors) => errors?.registered_address?.city}
          >
            <Select placeholder="Wybierz miasto">
              {(
                voivodeship[currentVoivodeship]?.[currentDistrict]?.[
                  currentCommune
                ] ?? []
              ).map((city) => (
                <option value={city}>{city}</option>
              ))}
            </Select>
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
