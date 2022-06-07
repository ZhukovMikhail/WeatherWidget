import {
  CityBox,
  MainBox,
  StyledSpan,
  TextBlock,
  CloseIcon,
  IMG,
  CityBoxLayout,
  Title,
} from './CityBox.styled';
import { MdLocationOff } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import { FiSunset, FiSunrise } from 'react-icons/fi';
import { Button } from '@mui/material';

export const CityBoxTamplate = ({
  cityData,
  location,
  handleCloseIcon,
  onClick,
  when,
}) => {
  const [clock, setClock] = useState();

  const sunriseDate =
    cityData &&
    cityData.timezone &&
    new Date(
      cityData.sys.sunrise * 1000 -
        cityData.timezone * 1000 -
        new Date().getTimezoneOffset() * 60000
    ).toLocaleTimeString();
  const sunsetDate =
    cityData &&
    cityData.timezone &&
    new Date(
      cityData.sys.sunset * 1000 -
        cityData.timezone * 1000 -
        new Date().getTimezoneOffset() * 60000
    ).toLocaleTimeString();

  const timer = useRef(
    setInterval(() => {
      const loalTime =
        location === 'Current Location'
          ? new Date().toLocaleTimeString()
          : new Date(
              Date.now() -
                cityData.timezone * 1000 -
                new Date().getTimezoneOffset() * 60000
            ).toLocaleTimeString();
      setClock(loalTime);
    }, 1000)
  );

  useEffect(() => {
    clearInterval(timer.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(timer.current);
    };
  }, [cityData]);

  return (
    <CityBox>
      <>
        <p>{location}</p>
        <MainBox>
          <h2>{cityData?.name}</h2>
          <h3>{cityData?.sys.country}</h3>

          {when === true ? (
            <h3>{clock}</h3>
          ) : (
            location === 'Selected city info' && <h3>{clock}</h3>
          )}

          {when === true ? (
            <div>
              <IMG src={cityData?.weather[0].icon} alt="Weather Icon" />
            </div>
          ) : (
            location === 'Selected city info' && (
              <div>
                <IMG src={cityData?.weather[0].icon} alt="Weather Icon" />
              </div>
            )
          )}
        </MainBox>
        <TextBlock>
          <span>{'Conditions: '}</span>
          <StyledSpan>{cityData?.weather[0].description}</StyledSpan>
        </TextBlock>
        <TextBlock>
          <span>{'Temperature: '}</span>
          <StyledSpan>
            {cityData?.main.temp_max}
            <span>{' ... '}</span>
            <span>{cityData?.main.temp_max}</span>
            <span>&#8451;</span>
          </StyledSpan>
        </TextBlock>
        <TextBlock>
          <span>{'Wind: '}</span>
          <StyledSpan>
            {cityData?.wind.speed}
            <span>{' m/h'}</span>
          </StyledSpan>
        </TextBlock>
        <TextBlock>
          <span>{'Humidity: '}</span>
          <StyledSpan>
            {cityData?.main.humidity}
            <span>&#37;</span>
          </StyledSpan>
        </TextBlock>

        <TextBlock>
          <span>{'Sunrise: '} </span>
          <FiSunrise />
          <StyledSpan>
            {when === true
              ? // ? sunriseDate.current
                sunriseDate
              : location === 'Selected city info' && sunriseDate}
          </StyledSpan>
        </TextBlock>
        <TextBlock>
          <span>{'Sunset: '}</span> <FiSunset />
          <StyledSpan>
            {when === true
              ? // ? sunriseDate.current
                sunsetDate
              : location === 'Selected city info' && sunsetDate}
          </StyledSpan>
        </TextBlock>

        {location === 'Selected city info' && (
          <CloseIcon onClick={handleCloseIcon} />
        )}
        {location === 'Current Location' && when === false && (
          <CityBoxLayout>
            <MdLocationOff size={100} fill={'white'} />

            <Title>Press 'Ok' when your goelocation is 'ON'</Title>
            <Button variant="contained" onClick={onClick}>
              <span>Ok</span>
            </Button>
          </CityBoxLayout>
        )}
      </>
    </CityBox>
  );
};
