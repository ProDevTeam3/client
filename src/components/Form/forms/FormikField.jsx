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
}) => {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          isRequired={isRequired}
          isDisabled={isDisabled}
        >
          <FormLabel htmlFor={name}>{label}</FormLabel>
          {children
            ? React.cloneElement(children, { ...field, id: name })
            : renderChildren?.({ field, form })}
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
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
};
export default FormikField;
