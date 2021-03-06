import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getAllRecords } from '../helpers/apiCalls';
import { useUser } from './userContext';
import { FETCH_RECORDS } from './constants';

const recordsReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_RECORDS:
      return payload;
    default:
      return state;
  }
};

const recordContext = createContext();
export const useRecords = () => useContext(recordContext);

export const RecordsProvider = ({ children }) => {
  const [records, dispatchRecords] = useReducer(recordsReducer, []);
  const { user } = useUser();

  useEffect(() => {
    const source = axios.CancelToken.source();
    getAllRecords({ dispatchRecords });
    return () => {
      source?.cancel();
    };
  }, [user]);

  return (
    <recordContext.Provider value={{ records, dispatchRecords }}>
      {children}
    </recordContext.Provider>
  );
};

RecordsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
