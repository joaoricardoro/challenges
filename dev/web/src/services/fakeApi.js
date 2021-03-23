import axios from 'axios';

import { url } from '../config/constants';

const fakeApi = axios.create({url});

export default fakeApi;