import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Field } from "formik";
import PropTypes from "prop-types";

const FormikField = ({
  name,
  isRequired,
  label,
  children,
  renderChildren,
  validate,
  helperText,
  isDisabled = false,
  // (form.errors) => errors.family[0].PESEL
  errorPath = () => undefined,
}) => {
  const displayError = errorPath ? errorPath : (errors) => errors[name];
  return (
    <Field name={name} validate={validate}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[name] || displayError?.(form.errors)}
          isRequired={isRequired}
          isDisabled={isDisabled}
        >
          <FormLabel htmlFor={name}>{label}</FormLabel>
          {children
            ? React.cloneElement(children, { ...field, id: name })
            : renderChildren?.({ field, form })}
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          <FormHelperText style={{ color: "red" }}>
            {displayError(form.errors)}
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};
FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  renderChildren: PropTypes.func,
  validate: PropTypes.func,
  helperText: PropTypes.string,
  isDisabled: PropTypes.bool,
  errorPath: PropTypes.func,
};
export default FormikField;
