import { LOGIN_USER, SIGNUP_USER } from '../context/constants';
import { axiosInstance as axios } from './axiosConfig';

export const loginUser = async ({ email, password, dispatchUser }) => {
  try {
    const { data } = await axios.post('/login', { email, password });
    dispatchUser({ type: LOGIN_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const signUpUser = async ({
  firstName,
  lastName,
  email,
  nickName,
  password,
  dispatchUser,
}) => {
  try {
    const { data } = await axios.post('/signup', {
      firstName,
      lastName,
      email,
      nickName,
      password,
    });
    dispatchUser({ type: SIGNUP_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};
