import {
  ERROR,
  FETCH_RECORDS,
  LOGIN_USER,
  SIGNUP_USER,
  UPDATE_PROFILE,
} from '../context/constants';
import { axiosInstance as axios } from './axiosConfig';

export const loginUser = async ({ email, password, dispatchUser }) => {
  try {
    const { data } = await axios.post('/login', { email, password });

    dispatchUser({ type: LOGIN_USER, payload: data });
  } catch (err) {
    dispatchUser({ type: ERROR, payload: err.message });
  }
};

export const signUpUser = async ({
  firstName,
  lastName,
  email,
  nickname,
  password,
  dispatchUser,
}) => {
  try {
    const { data } = await axios.post('/signup', {
      firstName,
      lastName,
      email,
      nickname,
      password,
    });
    dispatchUser({ type: SIGNUP_USER, payload: data });
  } catch (err) {
    dispatchUser({ type: ERROR, payload: err.message });
  }
};

export const getAllRecords = async ({ dispatchRecords, source }) => {
  try {
    const { data } = await axios.get('/dashboard', {
      cancelToken: source?.token,
    });

    dispatchRecords({ type: FETCH_RECORDS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async ({
  profileUpdated: { firstName, lastName, nickname, avatar },
  id,
  dispatchUser,
}) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, {
      firstName,
      lastName,
      nickname,
      avatar,
    });

    dispatchUser({ type: UPDATE_PROFILE, payload: data });
  } catch (err) {
    dispatchUser({ type: ERROR, payload: err.message });
  }
};
