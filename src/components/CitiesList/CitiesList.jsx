import { Container } from './CitiesList.styled';
import { CitiesItem } from 'components/CitiesItem/CitiesItem';

export const CitiesList = ({ cities, onDelete, onSelect, selectedCityId }) => {
  const hendleDelete = id => {
    onDelete(id);
  };

  return (
    <Container>
      {cities.map(city => (
        <li key={city.id}>
          <CitiesItem
            city={city}
            onDelete={hendleDelete}
            selectedCityId={selectedCityId}
            onSelect={onSelect}
          />
        </li>
      ))}
    </Container>
  );
};
