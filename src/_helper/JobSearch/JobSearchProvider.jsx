import { JobSearchApi, KnowledgebaseApi } from '../../api';
import Context from './index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobSearchProvider = (props) => {
    const [jobData, setJobData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const getJobData = async () => {
            try {
                await axios.get(JobSearchApi).then((resp) => {
                    setJobData(resp.data);
                });
                await axios.get(KnowledgebaseApi).then((resp) => {
                    setSearchData(resp.data);
                });
            } catch (error) {
                console.log('cancelled', error);
            }
        };
        getJobData();
    }, [setJobData, setSearchData]);

    return (
        <Context.Provider
            value={{
                ...props,
                jobData,
                searchData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default JobSearchProvider;