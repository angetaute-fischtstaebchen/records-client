import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { LOGIN_USER, SIGNUP_USER, UPDATE_PROFILE, ERROR } from './constants';

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, user: payload };
    case SIGNUP_USER:
      return { ...state, user: payload };
    case UPDATE_PROFILE:
      return { ...state, user: payload };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
const initialState = { error: null, user: undefined };
const userContext = createContext();
export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [auth, dispatchUser] = useReducer(userReducer, initialState);

  return (
    <userContext.Provider value={{ auth, dispatchUser }}>
      {children}
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
