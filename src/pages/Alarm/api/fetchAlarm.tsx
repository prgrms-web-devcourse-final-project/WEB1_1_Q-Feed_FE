import axios from 'axios';

export const fetchNotifications = async () => {
  const response = await axios.get('/api/notifications', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};