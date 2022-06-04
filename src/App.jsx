import './App.styled.jsx';
import { Container } from 'App.styled';
import { Cities } from 'components/Cities/Cities.jsx';
import { AddCity } from 'components/AddCitiesBox/AddCity.jsx';
import { CitiesList } from 'components/CitiesList/CitiesList.jsx';
import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

function App() {
  const [lsValue, setLSValue] = useLocalStorage('my-cities', []);
  const [cities, setCities] = useState(() => lsValue);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedCityId, setSelectedCityId] = useState(null);
  useEffect(() => {
    setLSValue(cities);
  }, [cities, setLSValue]);

  const cityArrData = ({ value, lon, lat, id, country }) => {
    setCities(state => [...state, { value, lon, lat, id, country }]);
  };
  const onDelete = ({ id, nodeName }) => {
    console.log('NodeName', nodeName);
    if (nodeName === 'DIV') {
      setSelectedCityId(id);
      return;
    }
    setDeleteId(id);
  };
  if (deleteId) {
    setCities(state => {
      return state.filter(s => s.id !== deleteId);
    });
    setDeleteId(null);
  }

  const selectedCityObject = cities.find(c => c.id === selectedCityId);
  console.log('cities', cities);
  console.log('selectedCity', selectedCityId);
  console.log('selectedCityObject', selectedCityObject);

  return (
    <Container>
      <h1> Weather Widget</h1>
      <Cities selectedCity={selectedCityObject} />
      <AddCity cityArrData={cityArrData} />
      <CitiesList cities={cities} onDelete={onDelete} />
    </Container>
  );
}

export default App;
