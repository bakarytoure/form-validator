import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Grid, Typography } from "@material-ui/core";
import validate from "./validate";
import renderField from "./renderField";

const MyAddress = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Enter your Addresses
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            name="address1"
            type="text"
            component={renderField}
            label="Address 1*"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="address 2"
            type="text"
            component={renderField}
            label="Address 2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="country"
            type="text"
            component={renderField}
            label="County*"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="city"
            type="text"
            component={renderField}
            label="City*"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Field
            name="zip"
            type="text"
            component={renderField}
            label="Zipcode*"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={invalid}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(MyAddress);
