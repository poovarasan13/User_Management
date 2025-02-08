import React, { useEffect, useState } from 'react';
import Context from './index';
import axios from 'axios';
import { ChartistApi } from '../../api';

const ChartistProvider = (props) => {
  const [chartistData, setChartistData] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      try {
        await axios.get(ChartistApi).then((resp) => {
          setChartistData(resp.data);
        });
      } catch (error) {
        console.log('cancelled', error);
      }
    };
    getChartData();
  }, [setChartistData]);

  return (
    <Context.Provider
      value={{
        ...props,
        chartistData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ChartistProvider;