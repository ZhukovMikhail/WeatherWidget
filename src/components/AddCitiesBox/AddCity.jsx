import { Container, BgContainer, Selection, ButtonAdd } from './AddCity.styled';
// import { Button } from '@mui/material';
// import { Button } from '@mui/material';
import { MdNoteAdd } from 'react-icons/md';
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
    setFilteredCountry(null);
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

    cityArrData({ value, lon, lat, id, country });
    toggleOpenAdd();
  };

  return (
    <BgContainer>
      <Container>
        {!isOpen && (
          <>
            <h2>Selected cities</h2>

            <ButtonAdd
              variant="contained"
              endIcon={<MdNoteAdd size={'1.5vw'} />}
              onClick={toggleOpenAdd}
              style={{
                marginLeft: '30vw',
              }}
            >
              Add
            </ButtonAdd>
          </>
        )}

        {isOpen && (
          <Selection>
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
            <ButtonAdd
              variant="outlined"
              onClick={toggleOpenAdd}
              style={{
                marginLeft: '30vw',
              }}
            >
              Cancel
            </ButtonAdd>
          </Selection>
        )}
      </Container>
    </BgContainer>
  );
};
