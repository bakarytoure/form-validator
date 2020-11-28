import React, { Component } from "react";
import MaterialLayout from "./components/Layout";
import AddressContainer from "./components/Address";
import UserNameAndPassword from "./components/UserNameAndPassword";
import EmailAndBirthDay from "./components/EmailAndBirthDay";

class App extends Component {
  state = {
    page: 1,
  };
  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  previousPage = () => {
    this.setState({ page: 1 });
  };
  onSubmit = (formValues) => {
    console.log(formValues);
    alert(JSON.stringify(formValues, null, 2));
  };
  render() {
    const { page } = this.state;
    return (
      <MaterialLayout>
        {page === 1 && <UserNameAndPassword onSubmit={this.nextPage} />}

        {page === 2 && <EmailAndBirthDay onSubmit={this.nextPage} />}

        {page === 3 && <AddressContainer onSubmit={this.onSubmit} />}
      </MaterialLayout>
    );
  }
}

export default App;
