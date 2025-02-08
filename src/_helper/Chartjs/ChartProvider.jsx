import React, { useEffect, useState } from 'react';
import ChartjsContext from './index';
import axios from 'axios';
import { ChartjsApi } from '../../api';

const ChartjsProvider = (props) => {
  const [chartjs, setChartjs] = useState([]);

  useEffect(() => {
    const getchartjs = async () => {
      try {
        await axios.get(ChartjsApi).then((resp) => {
          setChartjs(resp.data);
        });
      } catch (error) {
        console.log('cancelled', error);
      }
    };
    getchartjs();
  }, [setChartjs]);

  return (
    <ChartjsContext.Provider
      value={{
        ...props,
        chartjs,
      }}
    >
      {props.children}
    </ChartjsContext.Provider>
  );
};

export default ChartjsProvider;