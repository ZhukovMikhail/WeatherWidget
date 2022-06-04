import { Container } from './AddCity.styled';
import { Button } from '@mui/material';
import { MdNoteAdd } from 'react-icons/md';
// import { getDefaultCity } from 'api';
import { useState } from 'react';
import allcities from '../../db/worldcities.json';

export const AddCity = ({ cityArrData }) => {
  const [filteredCountry, setFilteredCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const allCountries = allcities
    .map(c => c.country)
    .filter((c, index, array) => array.indexOf(c) === index)
    .sort((a, b) => a.localeCompare(b));

  const filteredCountryArray = allcities.filter(
    c => c.country === filteredCountry
  );

  const toggleOpenAdd = e => {
    setIsOpen(!isOpen);
  };

  const hendleCountryClick = e => {
    const { value } = e.currentTarget;
    setFilteredCountry(value);
  };
  const hendleCityClick = e => {
    const { value } = e.currentTarget;
    const lon = filteredCountryArray.find(c => c.city === value).lng;
    const lat = filteredCountryArray.find(c => c.city === value).lat;
    const id = filteredCountryArray.find(c => c.city === value).id;
    const country = filteredCountryArray.find(c => c.city === value).country;
    console.log('coord', { lon, lat });

    cityArrData({ value, lon, lat, id, country });
    toggleOpenAdd();
  };

  return (
    <Container>
      <span>Selected cities</span>
      {!isOpen && (
        <Button
          variant="contained"
          endIcon={<MdNoteAdd />}
          onClick={toggleOpenAdd}
        >
          Add City to Your List
        </Button>
      )}
      {isOpen && (
        <div>
          <select name="" id="" onChange={hendleCountryClick}>
            <option key="none">{'select country'}</option>
            {allCountries.map(country => (
              <option key={country}>{country}</option>
            ))}
          </select>
          {filteredCountry && (
            <select name="" id="" onChange={hendleCityClick}>
              <option key="none">{'select city'}</option>
              {filteredCountryArray.map(c => (
                <option key={c.id} id={c.city}>
                  {c.city}
                </option>
              ))}
            </select>
          )}
          <Button variant="outlined" onClick={toggleOpenAdd}>
            Cancel
          </Button>
        </div>
      )}
    </Container>
  );
};
