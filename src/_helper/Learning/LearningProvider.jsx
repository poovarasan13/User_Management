import { LearningApi } from '../../api';
import Context from './index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LearningProvider = (props) => {

    const [learningData, setLearningData] = useState([]);

    useEffect(() => {
        const defaultData = async () => {
            await axios.get(`${LearningApi}`).then((res) => {
                setLearningData(res.data);
            });
        };
        defaultData();
    }, [setLearningData]);

    return (
        <Context.Provider
            value={{
                ...props,
                learningData,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default LearningProvider;