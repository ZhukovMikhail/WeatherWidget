import { toast } from 'react-toastify';

// const errorId = 'error-id';
// const warnId = 'warn-id';
// const notifyId = 'notify-id';

export const notify = () =>
  toast.warn('That city already is in your List', {
    toastId: 'notifyid',
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
export const notifyError = message =>
  toast.error(`${message}`, {
    toastId: 'errorid',
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });

export const notifySwitchOnLocation = toastId =>
  toast.warn(`Switch ON location on your device `, {
    toastId: 'warnid',
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });

export const defaultCityData = {
  weather: [
    {
      id: '',
      main: '',
      description: '',
    },
  ],

  main: {
    humidity: '',
    temp_min: '',
    temp_max: '',
  },
  wind: {
    speed: '',
  },
  timezone: 0,
  sys: {
    country: '',
    sunrise: 0,
    sunset: 0,
  },
  id: '',
  name: '',
};
