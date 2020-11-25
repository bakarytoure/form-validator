import React from "react";
import { Button } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderDatePicker from "./renderDatePicker";
import moment from "moment";
const BirthDay = (props) => {
  const { handleSubmit, invalid } = props;

  return (
    <>
      <div className="mb-5">Enter your birthday:</div>
      <form onSubmit={handleSubmit}>
        <Field
          name="birthday"
          inputValueFormat="DD-MM-YYYY"
          dateFormatCalendar="dddd"
          fixedHeight
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          normalize={(value) =>
            value ? moment(value).format("DD-MM-YYYY") : null
          }
          component={renderDatePicker}
        />
        <div className="d-flex justify-content-between">
          <div></div>
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
})(BirthDay);
