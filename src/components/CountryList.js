import React from "react";

const CountryList = props => {
  const handleClick = country => {
    return () => {
      props.onClick(country);
    };
  };

  const countries = countryList => {
    return countryList.map(country => (
      <li key={country.code} onClick={handleClick(country)}>
        {country.name}
      </li>
    ));
  };

  if (props.state.continent.name) {
    return (
      <div className="countries col-1-2">
        <h2>Countries in {props.state.continent.name}</h2>
        <ul>{countries(props.state.continent.countries)}</ul>
      </div>
    );
  } else {
    return null;
  }
};

export default CountryList;
