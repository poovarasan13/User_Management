import React, { useState ,useEffect} from 'react'
import {UserApi} from '../../api';
import Context from './index'
import axios from 'axios';
const UserListProvider = (props) => {
     const [user,setUser]=useState([]);
   
     useEffect(()=>{
        const getUser= async()=>{
            try{
                await axios.get(UserApi).then((res)=>{ setUser(res.data)})
            }
            catch(err)
            {
                console.log(err)
            }
        }
        getUser();
     },[setUser])


     const deleteUser=(id)=>{
      const updatedUser=user.filter((data)=> data.id!==id);
      setUser(updatedUser);
     }
  return (
    <Context.Provider 
    value={{
        user,
        deleteUser,
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default UserListProvider
