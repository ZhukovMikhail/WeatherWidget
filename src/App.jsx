import './App.styled.jsx';
import { Container } from 'App.styled';
import { Cities } from 'components/Cities/Cities.jsx';
import { AddCity } from 'components/AddCitiesBox/AddCity.jsx';
import { CitiesList } from 'components/CitiesList/CitiesList.jsx';
import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { Pagination } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from 'services/utils.js';

function App() {
  const [lsValue, setLSValue] = useLocalStorage('my-cities', []);
  const [cities, setCities] = useState(() => lsValue);
  const [deleteId, setDeleteId] = useState(null);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 5;
  const totalPage = Math.ceil(cities.length / perPage);
  const clicedCities = cities.slice((page - 1) * perPage, perPage * page);

  useEffect(() => {
    setLSValue(cities);
  }, [cities, setLSValue]);

  const cityArrData = ({ value, lon, lat, id, country }) => {
    if (cities.find(c => c.id === id)) {
      notify();
      return;
    }
    setCities(state => [...state, { value, lon, lat, id, country }]);
  };

  const onDelete = ({ id }) => {
    setDeleteId(id);
  };
  const onSelect = ({ id }) => {
    setSelectedCityId(id);
  };
  if (deleteId) {
    setCities(state => {
      return state.filter(s => s.id !== deleteId);
    });
    setDeleteId(null);
    (cities.length - 1) % perPage === 0 && setPage(p => p - 1);
  }

  const selectedCityObject = cities.find(c => c.id === selectedCityId);

  return (
    <Container>
      <ToastContainer />
      <h1> Weather Widget</h1>
      <Cities selectedCity={selectedCityObject} />
      <AddCity cityArrData={cityArrData} />
      <CitiesList
        cities={clicedCities}
        onDelete={onDelete}
        onSelect={onSelect}
        selectedCityId={selectedCityId}
      />

      <Pagination
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#d3d3d37f',
        }}
        count={totalPage}
        shape="rounded"
        color="primary"
        onChange={(_, num) => setPage(num)}
      />
    </Container>
  );
}

export default App;
