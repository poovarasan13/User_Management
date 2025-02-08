import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchAllTabsApi } from '../../api';
import Context from './index';

const SearchResultProvider = (props) => {
    const [tabsData, setTabsData] = useState('');

    useEffect(() => {
        axios.get(SearchAllTabsApi).then((resp) => {
            setTabsData(resp.data);
        });
    }, [setTabsData]);

    return (
        <Context.Provider
            value={{
                ...props,
                tabsData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default SearchResultProvider;
