import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Button from "@material-ui/core/Button";

const Email = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <>
      <div className="mb-5">Enter a valid email:</div>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          variant="outlined"
        />
        <div className="text-center mt-2">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="next"
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
})(Email);
