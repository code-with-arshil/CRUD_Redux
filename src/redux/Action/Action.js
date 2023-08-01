import { ADD_PROFILE } from './Constants';
import { DELETE_PROFILE } from './Constants';
import { UPDATE_PROFILE } from './Constants';
export const addProfile = (profileData) => {
  return {
    type: ADD_PROFILE,
    payload: profileData,
  };
};
export const deleteProfile = (profileId) => {
  return {
    type: DELETE_PROFILE,
    payload: profileId,
  };
};
export const updateProfile = (data) => ({
  type: UPDATE_PROFILE,
  payload: data,
});


