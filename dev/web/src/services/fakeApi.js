import axios from 'axios';

import { url } from '../config/connections';

const fakeApi = axios.create({url});

export default fakeApi;