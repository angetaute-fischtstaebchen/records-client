import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { LOGIN_USER, SIGNUP_USER, UPDATE_PROFILE } from './constants';

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return payload;
    case SIGNUP_USER:
      return payload;
    case UPDATE_PROFILE:
      return payload;
    default:
      return state;
  }
};

const userContext = createContext();
export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, undefined);

  return (
    <userContext.Provider value={{ user, dispatchUser }}>
      {children}
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
