import React, { Component } from "react";
import Username from "./components/Username";
import Password from "./components/Password";
import ZipCode from "./components/Zipcode";
import Email from "./components/Email";
import Address from "./components/Address";
import City from "./components/City";
import Country from "./components/Country";
import BirthDay from "./components/BirthDay";

class App extends Component {
  state = {
    page: 1,
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: 1 });
  };
  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    const { page } = this.state;
    return (
      <div className="container ui segment text-center mt-5 w-50">
        <div className="row text-center mb-5">
          <div className="col">Form input validation</div>
        </div>
        {page === 1 && <Username onSubmit={this.nextPage} />}
        {page === 2 && (
          <Password previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}

        {page === 3 && (
          <ZipCode previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 4 && (
          <BirthDay previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 5 && (
          <Email previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 6 && (
          <City previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 7 && (
          <Country previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 8 && (
          <Address previousPage={this.previousPage} onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

export default App;
