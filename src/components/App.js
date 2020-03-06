import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "../style.css";

import Continents from "./Continents";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

class App extends React.Component {
  state = {
    continent: {},
    country: {}
  };

  getCountries = continent => {
    this.setState({ continent, country: {} });
  };

  getDetails = country => {
    this.setState({ country });
    console.log(this.state);
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <div className="row">
            <Continents onClick={this.getCountries} />
            <CountryList state={this.state} onClick={this.getDetails} />
          </div>
          <CountryDetails state={this.state} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
