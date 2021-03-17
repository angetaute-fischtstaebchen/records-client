import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const userContext = createContext();
export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
