import React from "react";
import { Input, Stack, Select } from "@chakra-ui/react";
import FormikField from "./FormikField";
import {
  combineValidators,
  correctPostalCode,
  requiredValue,
} from "../helpers/validators";
import { voivodeship } from "../../../constants/voivodeship";
import PropTypes from "prop-types";

const HomeAddress = (props) => {
  const { isDisabled, ref } = props ?? { isDisabled: false, ref: undefined };

  const currentVoivodeship = ref?.current?.values?.home_address?.voivodeship;
  const currentDistrict = ref?.current?.values?.home_address?.district;
  const currentCommune = ref?.current?.values?.home_address?.commune;

  return (
    <Stack spacing={6}>
      <FormikField
        name="home_address.country"
        label="Kraj:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Kraj jest wymagany")}
        errorPath={(errors) => errors?.home_address?.country}
      >
        <Select placeholder="Wybierz kraj">
          <option value="Polska">Polska</option>
        </Select>
      </FormikField>
      <FormikField
        name="home_address.voivodeship"
        label="Województwo:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Województwo jest wymagane")}
        errorPath={(errors) => errors?.home_address?.voivodeship}
      >
        <Select placeholder="Wybierz województwo">
          {Object.keys(voivodeship).map((voivodeshipName) => (
            <option value={voivodeshipName}>{voivodeshipName}</option>
          ))}
        </Select>
      </FormikField>
      <FormikField
        name="home_address.district"
        label="Powiat:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Powiat jest wymagany")}
        errorPath={(errors) => errors?.home_address?.district}
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
        name="home_address.commune"
        label="Gmina:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Gmina jest wymagana")}
        errorPath={(errors) => errors?.home_address?.commune}
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
        name="home_address.city"
        label="Miasto:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Miasto jest wymagane")}
        errorPath={(errors) => errors?.home_address?.city}
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
        name="home_address.postal_code"
        label="Kod pocztowy:"
        isRequired
        isDisabled={isDisabled}
        errorPath={(errors) => errors?.home_address?.postal_code}
        validate={combineValidators(
          requiredValue("Kod pocztowy jest wymagany"),
          correctPostalCode("Kod pocztowy jest niepoprawny")
        )}
      >
        <Input type="text" />
      </FormikField>
      <FormikField
        name="home_address.street"
        label="Ulica:"
        isRequired
        isDisabled={isDisabled}
        validate={requiredValue("Ulica jest wymagana")}
        errorPath={(errors) => errors?.home_address?.street}
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
