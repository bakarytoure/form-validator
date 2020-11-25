

## Feature
* Form input validation;
## Used libraries: 
* material-ui
* bootstrap
* Redux, React-redux, Redux-Form
## Required System
* Javascript
## Brief description
the Task constisted of making a form input validation with the help of react: 
 the

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start

```
```
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.birthday) {
    errors.birthday = "Required";
  } else if (
    !/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/i.test(
      values.birthday
    )
  ) {
    errors.birthday = "Invalid date";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password =
      "At least 8 characters:( min.one number and one special character)";
  }
  if (!values.zip) {
    errors.zip = "Required";
  } else if (!/^[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}$/i.test(values.zip)) {
    errors.zip = "Invalid zip code(XX-XXX)";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default validate;
```
