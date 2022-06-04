import axios from 'axios';

axios.defaults.baseURL = 'https://fcc-weather-api.glitch.me/';

// GET /default city weather
export const getDefaultCity = async (lon, lat) => {
  const { data } = await axios.get(`/api/current?lon=${lon}&lat=${lat}`);

  return data;
};
