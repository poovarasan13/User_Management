import React, { useEffect, useState } from 'react';
import { GooglechartApi } from '../../api';
import Context from './index';
import axios from 'axios';

const GoogleChartProvider = (props) => {
  const [googleChart, setGoogleChart] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      try {
        await axios.get(GooglechartApi).then((resp) => {
          setGoogleChart(resp.data);
        });
      } catch (error) {
        console.log('cancelled', error);
      }
    };
    getChartData();
  }, [setGoogleChart]);

  return (
    <Context.Provider
      value={{
        ...props,
        googleChart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GoogleChartProvider;