import { useState } from 'react';
import { ERROR } from '../context/constants';
import { useUser } from '../context/userContext';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const { dispatchUser } = useUser();
  return [
    {
      value,
      onChange: (e) => {
        setValue(e.target.value);
        dispatchUser({ type: ERROR, payload: null });
      },
    },
    () => setValue(initialValue),
  ];
};
