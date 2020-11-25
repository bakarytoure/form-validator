import { Button } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import renderField from "./renderField";
import validate from "./validate";
const Country = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <>
      <div className="mb-5">Enter your country name:</div>
      <form onSubmit={handleSubmit}>
        <Field
          name="country"
          type="text"
          component={renderField}
          label="county"
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
})(Country);
