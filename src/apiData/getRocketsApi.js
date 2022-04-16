import fetchDataApi from './fetchApi';

const ROCKETS_END_POINT = 'rockets';

const fetchRockets = () => fetchDataApi(ROCKETS_END_POINT);

export default fetchRockets;
