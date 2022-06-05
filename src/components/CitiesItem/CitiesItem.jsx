import { ListItem, StyledButton } from './CitiesItem.styled';
// import { Button } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { getDefaultCity } from 'api.js';

export const CitiesItem = ({
  city: { value: cityName, lon, lat, id, country },
  onDelete,
  onSelect,
  selectedCityId,
}) => {
  const [data, setData] = useState(null); //set weather response
  useEffect(() => {
    getDefaultCity(lon, lat)
      .then(r => {
        setData(r);
      })
      .catch(e => {
        console.log(e);
      });
  }, [lon, lat]);

  const handleDeleteItem = e => {
    onDelete({ id });
  };
  const handleSelect = e => {
    onSelect({ id });
  };

  return (
    <ListItem
      onClick={handleSelect}
      id={id}
      className={selectedCityId === id && 'active'}
    >
      <div>
        <span>{cityName}</span>
        <span>{country}</span>
      </div>
      {data && (
        <>
          <div>
            <img src={data.weather[0].icon} alt="Weather Icon" />
          </div>
          <div>
            <span>{'Temperature: '}</span>
            <span>{data.main.temp_max}</span>
            <span>{'...'}</span>
            <span>{data.main.temp_max}</span>
            <span>&#8451;</span>
          </div>
        </>
      )}
      <StyledButton
        variant={selectedCityId === id ? 'contained' : 'outlined'}
        endIcon={<MdDeleteForever size={'1.5vw'} />}
        onClick={handleDeleteItem}
        id={id}
        disabled={selectedCityId !== id}
      >
        Delete
      </StyledButton>
    </ListItem>
  );
};
