import fetchDataApi from './fetchApi';

const MISSIONS_END_POINT = 'missions';

const fetchMissions = () => fetchDataApi(MISSIONS_END_POINT);

export default fetchMissions;
