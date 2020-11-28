import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Grid, Typography } from "@material-ui/core";
import validate from "../components/validate";
import renderField from "../components/renderField";
import renderDatePicker from "../components/renderDatePicker";
import moment from "moment";
const EmailAndBirthDay = (props) => {
  const { handleSubmit, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Enter your E-mail and Birthday
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            name="email"
            type="text"
            component={renderField}
            label="E-Mail*"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="birthday"
            inputValueFormat="DD-MM-YYYY"
            dateFormatCalendar="dddd"
            fixedHeight
            showMonthDropdown
            showYearDropdown
            label="Birthday"
            dropdownMode="select"
            normalize={(value) =>
              value ? moment(value).format("DD-MM-YYYY") : null
            }
            component={renderDatePicker}
          />
        </Grid>

        <Grid item xs={12} spacing={3}>
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
})(EmailAndBirthDay);
