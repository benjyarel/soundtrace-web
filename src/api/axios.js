import axios from 'axios';

const TMP_BASE_URL = 'http://localhost:3000/api';

const serverFetch = axios.create({
  baseURL: TMP_BASE_URL,
});

export default serverFetch;
