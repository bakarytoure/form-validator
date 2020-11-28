import React from "react";
import TextField from "@material-ui/core/TextField";
const renderField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    error={touched && invalid}
    label={label}
    placeholder={label}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
export default renderField;
