import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
      countries {
        name
        code
        currency
        emoji
        languages {
          name
        }
      }
    }
  }
`;

const Continents = props => {
  const { loading, error, data } = useQuery(LIST_CONTINENTS);

  const handleClick = continentObject => {
    return () => {
      props.onClick(continentObject);
    };
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="continents col-1-2">
      <h1>Continents</h1>
      {data.continents.map(data => (
        <>
          <h3 key={data.code} onClick={handleClick(data)}>
            {data.name}
          </h3>
        </>
      ))}
    </div>
  );
};

export default Continents;
