import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Button from "@material-ui/core/Button";

const Username = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <>
      <div className="mb-5">Enter a username</div>
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="username"
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
})(Username);
