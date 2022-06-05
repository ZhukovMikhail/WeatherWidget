import { toast } from 'react-toastify';

export const notify = () =>
  toast.warn('That city already is in your List', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
export const notifyError = message =>
  toast.error(`${message}`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });
