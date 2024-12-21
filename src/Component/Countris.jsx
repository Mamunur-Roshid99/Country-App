import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

const Countris = (props) => {
  return (
    <section className="countries">
      {props.countries.map((country) => {
        const countryName = { country, id: uuidv4() };
        return (
          <Country
            {...countryName}
            key={countryName.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
}

export default Countris
