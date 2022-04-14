import fetchMissions from '../../apiData/getMissionsApi';

const MISSIONS = 'redux/actions/get_missions';

const getMissionsAction = (missions) => ({
  type: MISSIONS,
  payload: missions,
});

export const getMissionsData = () => (dispach) => {
  fetchMissions().then((data) => {
    const missions = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      urlWiki: mission.wikipedia,
      urlOwn: mission.website,
      reserved: false,
    }));
    dispach(getMissionsAction(missions));
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
