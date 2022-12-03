import axios from 'axios';

const balancesAPI = axios.create({
  baseURL: 'https://api.covalenthq.com/v1/',
  headers: {
    Authorization: 'Basic Y2tleV81NGVhODJlMzdmMTQ0ZGZiYjJhN2ViMDk1Nzc6Og==',
  },
});
axios.defaults.headers.common['Authorization'] = 'Basic Y2tleV81NGVhODJlMzdmMTQ0ZGZiYjJhN2ViMDk1Nzc6Og==';

export { balancesAPI };
