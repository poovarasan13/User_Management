import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EmailApi } from '../../api';
import Context from './index';

const EmailProvider = (props) => {
    const [allEmails, setAllEmails] = useState(null);
    const [singleMailRecord, setSingleMailRecord] = useState({});
    const [types, setTypes] = useState([]);
    const [type, setType] = useState('Inbox');
    const [compose, setCompose] = useState(true);

    const fetchAllEmailAsyn = async () => {
        try {
            await axios.get(`${EmailApi}`).then((resp) => {
                setAllEmails(resp.data);
            });

        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        fetchAllEmailAsyn();
    }, [setAllEmails, setTypes]);


    const groupBy = (array, f) => {
        var groups = {};
        array.forEach(function (o) {
            var group = f(o)[0];
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return groups;
    };

    const getAllTypes = (result) => {
        setTypes(result);
    };

    const getAllEmailsAsyn = (emails) => {
        setAllEmails(emails);
    };

    const updateType = (id) => {
        const record = allEmails.filter((rec) => rec.id === id);
        const index = allEmails.indexOf(record[0]);
        record[0].favourite = !record[0].favourite;
        setAllEmails((currEmail) => [...currEmail, (currEmail[index] = record[0])]);
        axios.put(`${EmailApi}/${id}`, record[0]);
    };

    return (
        <Context.Provider
            value={{
                ...props,
                allEmails,
                types,
                type,
                singleMailRecord,
                compose,
                setCompose: setCompose,
                setSingleMailRecord: setSingleMailRecord,
                setType: setType,
                groupBy: groupBy,
                getAllType: getAllTypes,
                updateType: updateType,
                getAllEmailsAsyn: getAllEmailsAsyn,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default EmailProvider;
