import React, { useState, useEffect } from 'react';
const useShowClass = (anmClass, duration = 200) => {
  const [show, setShow] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(anmClass);
    }, duration);

    return () => clearTimeout(timeout);
  }, [show, anmClass]);

  return [show, setShow];
};
export default useShowClass;
