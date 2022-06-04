import { CityBox, MainBox, StyledSpan, TextBlock } from './CityBox.styled';
import { useState, useEffect } from 'react';
import { FiSunset, FiSunrise } from 'react-icons/fi';

export const CityBoxTamplate = ({ cityData, location }) => {
  const [clock, setClock] = useState();

  const sunsetDate = new Date(cityData.sys.sunset * 1000).toLocaleTimeString();
  const sunriseDate = new Date(
    cityData.sys.sunrise * 1000
  ).toLocaleTimeString();

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleString());
    }, 1000);

    // return () => {
    //   second;
    // };
  }, [cityData.timeZone]);

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
              <img src={cityData.weather[0].icon} alt="Weather Icon" />
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
        </>
      )}
    </CityBox>
  );
};
