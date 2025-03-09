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

     const editUser=(userDetails)=>{
           const updateUser=user.map((data)=>
            data.id===userDetails.id?userDetails :data
           );
           setUser(updateUser)

     }
     const deleteUser=(id)=>{
      const deleteUser=user.filter((data)=> data.id!==id);
      setUser(deleteUser);
     }

     const addUser=(userDetails)=>{
      setUser([...user,userDetails])
     }
  return (
    <Context.Provider 
    value={{
      user,
      deleteUser,
      addUser,
      editUser
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default UserListProvider
