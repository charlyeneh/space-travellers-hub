const url = 'https://api.spacexdata.com/v3/dragons';

const FETCH_DRAGONS = 'react_group_task/dragons/FETCH_DRAGONS';
const TOGGLE_RESERVED = 'react_group_task/dragons/TOGGLE_RESERVED';

export default function dragonReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.data.map((dragon) => {
        const {
          id, name, type, flickr_images: images, description,
        } = dragon;
        return {
          id, name, type, images, description, reserved: false,
        };
      });
    case TOGGLE_RESERVED:
      return state.map((dragon) => {
        if (dragon.id === action.id) {
          return { ...dragon, reserved: !dragon.reserved };
        } return dragon;
      });
    default:
      return state;
  }
}

export function toggleReserved(id) {
  return { type: TOGGLE_RESERVED, id };
}

export function getDragonList() {
  return async (dispatch) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_DRAGONS, data });
      });
  };
}
