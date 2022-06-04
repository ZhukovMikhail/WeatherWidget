import { Container } from './CitiesList.styled';
import { CitiesItem } from 'components/CitiesItem/CitiesItem';

export const CitiesList = ({ cities, onDelete }) => {
  const hendleDelete = id => {
    onDelete(id);
  };
  return (
    <Container>
      {cities.map(city => (
        <li key={city.id}>
          <CitiesItem city={city} onDelete={hendleDelete} />
        </li>
      ))}
    </Container>
  );
};
