// src/reducers/profileReducer.js
import { ADD_PROFILE } from '../Action/Constants';
import { DELETE_PROFILE } from '../Action/Constants';
import { UPDATE_PROFILE } from '../Action/Constants';
const initialState = {
  profiles: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter((profile, index) => index !== action.payload),
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile, index) =>
          index === action.payload.id ? action.payload : profile
        ),
      };
    default:
      return state;
  }
};

export default profileReducer;


