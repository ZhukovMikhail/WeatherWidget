import { Container, CityBox } from './Cities.styled';
import { getDefaultCity } from 'api';
import { useEffect, useState } from 'react';
export const Cities = ({ selectedCity }) => {
  const [currentCityData, setCurrentCityData] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState(null);
  console.log('selectedCityObject in Cities', selectedCity);

  useEffect(() => {
    getDefaultCity('14.6', '120.9833')
      .then(r => {
        setCurrentCityData(r);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    console.log('EFFECT Cities before request');

    if (selectedCity === undefined) {
      return;
    }
    console.log('selectedCityObject in Cities sending request');
    getDefaultCity(selectedCity.lon, selectedCity.lat)
      .then(r => {
        setSelectedCityData(r);
        console.log('selectedCityObject in Cities response', r);
      })
      .catch(e => console.log(e));
  }, [selectedCity]);
  // console.log(data.weather[0]);
  return (
    <Container>
      <CityBox>
        {currentCityData && (
          <>
            <h2>Current City</h2>
            <div>
              <img src={currentCityData.weather[0].icon} alt="Weather Icon" />
            </div>
            <div>
              <span>{'Temperature: '}</span>
              <span>{currentCityData.main.temp_max}</span>
              <span>{'...'}</span>
              <span>{currentCityData.main.temp_max}</span>
              <span>&#8451;</span>
            </div>
            {/* <p>
              <span>{'Pressure: '}</span>
              {data.main.pressure}
            </p> */}
            <p>
              <span>{'Humidity: '}</span>
              {currentCityData.main.humidity}
              <span>&#37;</span>
            </p>

            <p>
              <span>{'Weather conditions: '}</span>
              {currentCityData.weather[0].description}
            </p>
          </>
        )}
      </CityBox>
      {/* country: 'Angola';
             id: 1024474012;
             lat: -5.5667;
             lon: 12.2;
             value: 'Cabinda'; */}
      {selectedCity && (
        <CityBox>
          <>
            <h2>{selectedCity.value}</h2>
            <h3>{selectedCity.country}</h3>
            {selectedCityData && (
              <>
                <div>
                  <img
                    src={selectedCityData.weather[0].icon}
                    alt="Weather Icon"
                  />
                </div>
                <div>
                  <span>{'Temperature: '}</span>
                  <span>{selectedCityData.main.temp_max}</span>
                  <span>{'...'}</span>
                  <span>{selectedCityData.main.temp_max}</span>
                  <span>&#8451;</span>
                </div>

                <p>
                  <span>{'Humidity: '}</span>
                  {currentCityData.main.humidity}
                  <span>&#37;</span>
                </p>

                <p>
                  <span>{'Weather conditions: '}</span>
                  {currentCityData.weather[0].description}
                </p>
              </>
            )}
          </>
        </CityBox>
      )}
    </Container>
  );
};
