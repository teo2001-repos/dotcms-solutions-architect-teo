import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOTCMS_HOST,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DOTCMS_AUTH_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
