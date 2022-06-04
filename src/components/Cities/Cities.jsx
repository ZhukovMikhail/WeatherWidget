import { Container } from './Cities.styled';
import { getDefaultCity } from 'api';
import { useEffect, useState } from 'react';
import { useGeolocation } from 'rooks';
import { CityBoxTamplate } from 'components/CityTamplate/CityTamplate';

export const Cities = ({ selectedCity }) => {
  const geoObj = useGeolocation();
  const [currentCityData, setCurrentCityData] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState(null);

  currentCityData && console.log('currentCityData', currentCityData);

  selectedCityData && console.log('selectedCityData', selectedCityData);

  useEffect(() => {
    geoObj &&
      getDefaultCity(geoObj.lng, geoObj.lat)
        .then(r => {
          setCurrentCityData(r);
        })
        .catch(e => console.log(e));
  }, [geoObj]);

  useEffect(() => {
    if (selectedCity === undefined) {
      return;
    }
    getDefaultCity(selectedCity.lon, selectedCity.lat)
      .then(r => {
        setSelectedCityData(r);
      })
      .catch(e => console.log(e));
  }, [selectedCity]);

  return (
    <Container>
      {currentCityData && (
        <CityBoxTamplate
          cityData={currentCityData}
          location={'Current Location'}
        />
      )}

      {selectedCityData && (
        <CityBoxTamplate
          cityData={selectedCityData}
          location={'Selected city info'}
        />
      )}
    </Container>
  );
};
