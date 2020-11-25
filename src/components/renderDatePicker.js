import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class renderDatePicker extends React.Component {
  static defaultProps = {
    inputValueFormat: null,
  };

  state = {
    selectedDate: null,
  };

  componentWillMount() {
    if (this.props.input.value) {
      this.setState({
        selectedDate: moment(
          this.props.input.value,
          this.props.inputValueFormat
        ),
      });
    }
  }

  handleChange = (date) => {
    this.setState({
      selectedDate: date,
    });

    this.props.input.onChange(date);
  };

  render() {
    const {
      meta: { touched, error, invalid },
      ...input
    } = this.props;
    const { selectedDate } = this.state;
    return (
      <div>
        <DatePicker
          {...input}
          selected={selectedDate}
          onChange={this.handleChange}
          error={touched && invalid}
          helperText={touched && error}
        />
      </div>
    );
  }
}
export default renderDatePicker;
