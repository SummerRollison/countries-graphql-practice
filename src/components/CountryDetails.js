import React from "react";

const CountryDetails = props => {
  const showDetails = country => {
    return (
      <div className="details">
        <h3>
          {country.emoji} {country.name}
        </h3>
        <p>Currency: {country.currency}</p>
        <p>Language: {country.language}</p>
        <p>Country Code: {country.code}</p>
      </div>
    );
  };

  if (props.state.country.name) {
    return showDetails(props.state.country);
  } else {
    return null;
  }
};

export default CountryDetails;
