import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Button from "@material-ui/core/Button";

const Password = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <>
      <div className="mb-5">
        <p>Enter your password:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          variant="outlined"
        />
        <div className="text-center mt-2">
          <Button
            type="submit"
            className="next"
            variant="contained"
            color="primary"
            disabled={invalid}
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);
