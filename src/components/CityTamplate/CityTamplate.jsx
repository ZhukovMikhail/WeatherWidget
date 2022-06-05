import {
  CityBox,
  MainBox,
  StyledSpan,
  TextBlock,
  CloseIcon,
  IMG,
} from './CityBox.styled';
import { useState, useEffect, useRef } from 'react';
import { FiSunset, FiSunrise } from 'react-icons/fi';

export const CityBoxTamplate = ({ cityData, location, handleCloseIcon }) => {
  const [clock, setClock] = useState();

  const sunsetDate = new Date(
    Date.now() - cityData.sys.sunset * 1000
  ).toLocaleTimeString();
  const sunriseDate = new Date(
    cityData.sys.sunrise * 1000
  ).toLocaleTimeString();

  const timer = useRef(
    setInterval(() => {
      const loalTime =
        location === 'Current Location'
          ? new Date().toLocaleTimeString()
          : new Date(
              Date.now() - cityData.timezone * 1000
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
      {cityData && (
        <>
          <p>{location}</p>
          <MainBox>
            <h2>{cityData.name}</h2>
            <h3>{cityData.sys.country}</h3>

            <h3>{clock}</h3>
            <div>
              <IMG src={cityData.weather[0].icon} alt="Weather Icon" />
            </div>
          </MainBox>
          <TextBlock>
            <span>{'Conditions: '}</span>
            <StyledSpan>{cityData.weather[0].description}</StyledSpan>
          </TextBlock>
          <TextBlock>
            <span>{'Temperature: '}</span>
            <StyledSpan>
              {cityData.main.temp_max}
              <span>{' ... '}</span>
              <span>{cityData.main.temp_max}</span>
              <span>&#8451;</span>
            </StyledSpan>
          </TextBlock>
          <TextBlock>
            <span>{'Wind: '}</span>
            <StyledSpan>
              {cityData.wind.speed}
              <span>{' m/h'}</span>
            </StyledSpan>
          </TextBlock>
          <TextBlock>
            <span>{'Humidity: '}</span>
            <StyledSpan>
              {cityData.main.humidity}
              <span>&#37;</span>
            </StyledSpan>
          </TextBlock>
          <TextBlock>
            <span>{'Sunrise: '} </span>
            <FiSunrise />
            <StyledSpan>{sunriseDate}</StyledSpan>
          </TextBlock>
          <TextBlock>
            <span>{'Sunset: '}</span> <FiSunset />
            <StyledSpan>{sunsetDate}</StyledSpan>
          </TextBlock>
          {location === 'Selected city info' && (
            <CloseIcon onClick={handleCloseIcon} />
          )}
        </>
      )}
    </CityBox>
  );
};
