import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Grid, Typography } from "@material-ui/core";
import validate from "../components/validate";
import renderField from "../components/renderField";

const UserNameAndPassword = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Enter your Username and Password
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            name="username"
            type="text"
            component={renderField}
            label="Username*"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password*"
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
            Next&gt;&gt;
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
})(UserNameAndPassword);
