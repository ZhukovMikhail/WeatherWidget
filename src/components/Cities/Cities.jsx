import { Container } from './Cities.styled';
import { getDefaultCity } from 'api';
import { useEffect, useState } from 'react';
import { useGeolocation } from 'rooks';
import { CityBoxTamplate } from 'components/CityTamplate/CityTamplate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyError } from '../../services/utils';

export const Cities = ({ selectedCity }) => {
  const [currentCityData, setCurrentCityData] = useState();
  const [selectedCityData, setSelectedCityData] = useState(null);
  const [when, setWhen] = useState(true);

  const geoObj = useGeolocation({ when });

  const onClick = () => {
    setWhen(true);
  };

  useEffect(() => {
    setWhen(true);
    if (geoObj?.isError === true) {
      setWhen(false);
      return;
    }

    geoObj?.isError === false &&
      getDefaultCity(geoObj.lng, geoObj.lat)
        .then(r => {
          setCurrentCityData(r);
        })
        .catch(e => {
          console.log(e);
          notifyError(e.message);
        });
  }, [geoObj?.isError, geoObj?.lat, geoObj?.lng, geoObj]);

  useEffect(() => {
    if (selectedCity === undefined) {
      return;
    }
    // for reload timer in component
    setSelectedCityData(null);
    getDefaultCity(selectedCity.lon, selectedCity.lat)
      .then(r => {
        setSelectedCityData(r);
      })
      .catch(e => console.log(e));
  }, [selectedCity]);
  // console.log('geoObj', geoObj);

  return (
    <>
      <ToastContainer />
      <Container>
        <CityBoxTamplate
          cityData={currentCityData}
          location={'Current Location'}
          onClick={onClick}
          when={when}
        />

        {selectedCityData && (
          <CityBoxTamplate
            cityData={selectedCityData}
            location={'Selected city info'}
            handleCloseIcon={() => setSelectedCityData(null)}
          />
        )}
      </Container>
    </>
  );
};
