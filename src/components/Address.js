import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Button from "@material-ui/core/Button";
//import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";
const WizardFormSixPage = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <>
      <div className="mb-5">Enter your address:</div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="address"
            type="text"
            component={renderField}
            label="Address 1"
            variant="outlined"
          />
        </div>

        <div className="text-center mt-2">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={invalid}
          >
            Send <SendIcon />
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
})(WizardFormSixPage);
