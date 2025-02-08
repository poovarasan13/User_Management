import Context from './index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ContactApi } from '../../api';


const ContactProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);

    const getUsers = async () => {
        try {
            await axios.get(`${ContactApi}`).then((resp) => {
                setUsers(resp.data);
            });
        } catch (error) {
            console.log('error', error);
        }
    };
    useEffect(() => {
        getUsers();
    }, [setUsers, setData]);

    const createUser = (data, imgUrl) => {
        const userTemp = {
            id: users.length + 1,
            avatar: imgUrl,
            name: data.name,
            surname: data.surname,
            email: data.email,
            age: data.age,
            mobile: data.mobile
        };
        setUsers([...users, userTemp]);
    };

    const editUser = (data, imgUrl, id) => {
        const userTemp = {
            id: id,
            avatar: imgUrl,
            name: data.name,
            surname: data.surname,
            email: data.email,
            age: data.age,
            mobile: data.mobile
        };
        setUsers(users.map((item) => (item.id === id ? userTemp : item)));
    };

    const deletedUser = (id) => {
        const data = users.filter(item => id !== item.id);
        setUsers(data);
    };

    return (
        <Context.Provider
            value={{
                ...props,
                users,
                data,
                // singleData,
                createUser: createUser,
                editUser: editUser,
                deletedUser: deletedUser,
                // setSingleData: setSingleData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContactProvider;
