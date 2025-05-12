import React, { Fragment, useContext, useState } from 'react';
import UserContext from '../../../_helper/User';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Button, Modal,ModalHeader,ModalBody,Label ,Input} from 'reactstrap';

// import { set } from 'react-hook-form';

const UserRow = ({ index, id, name, mobile, email, gender, role, status }) => {
    const { deleteUser , editUser} = useContext(UserContext);
    //    const data=user.find((data)=> data.id===id)
    //    console.log(data);
    //    console.log(data[0].name);
    // const random = () => Math.floor(Math.random() * 1000000);
    const [userDetails, setUserDetails] = useState({
        id: id,
        name: name,
        mobile: mobile,
        email: email,
        gender: gender,
        role: role,
        status: status
    });

        
    const [showModal, setShowModal] = useState(false);
    const[editModal,setEditModal]=useState(false);
    const handleEdit = () => {
        setEditModal(true);
    };
    const handleInput=(e)=>{
        const{name,value}=e.target;
        setUserDetails(prev =>({...prev,[name]:value}));
    }
   const toggleDelete=()=>{
           setShowModal(!showModal);
   }
   const toggleEdit=()=>{
          setEditModal(!editModal);
   }
    const handleDelete = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        deleteUser(id);
        setShowModal(false);
    };
    const confirmEdit=()=>{
          editUser(userDetails);
          setEditModal(false);
    }

    return (
        <Fragment>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{role}</td>
            {status === 'active' && <td className='text-success'><span>{status}</span></td>}
            {status === 'inactive' && <td className='text-danger'><span>{status}</span></td>}
            <td>
                <div>
                    <FaEdit onClick={handleEdit} className="me-3 fw-light" style={{ cursor: "pointer" }} />
                    <FaTrashAlt onClick={handleDelete} className="fw-light" style={{ cursor: "pointer" }} />
                </div>
            </td>

            <Modal isOpen={showModal} toggle={toggleDelete} size="sm" centered>
           <ModalHeader closeButton className="border-0">
         Confirm Delete
    </ModalHeader>
    
    <ModalBody className="text-center">
        <p className="text-muted">Are you sure you want to delete this user?</p>
        <div className="d-flex justify-content-center gap-3">
            <Button variant="secondary" size="sm" onClick={() => setShowModal(false)}>No</Button>
            <Button variant="danger" size="sm" onClick={confirmDelete}>Yes</Button>
        </div>
    </ModalBody>
</Modal>
         

         <Modal isOpen={editModal} toggle={toggleEdit} >
            <ModalHeader toggle={toggleEdit} >Edit User</ModalHeader>
            <ModalBody>
                        <Label>Name:</Label>
                        <Input type="text" name="name" value={userDetails.name} onChange={handleInput}/>
                        <Label>Mobile No.:</Label>
                        <Input type="text" name="mobile" value={userDetails.mobile} onChange={handleInput}/>
                        <Label>Email:</Label>
                        <Input type="text" name="email" value={userDetails.email} onChange={handleInput}/>
                        <Label>Gender:</Label>
                        <Input type="select" name="gender" value={userDetails.gender} onChange={handleInput}>
                                  <option value='Male'>Male</option>
                                  <option value='Female'>Female</option>
                        </Input>
                        <Label>Role:</Label>
                        <Input type="select" name="role" value={userDetails.role} onChange={handleInput}>
                                <option value='Developer'>Developer</option>
                                <option value='Designer'>Designer</option>
                                <option value='Manager'>Manager</option>
                                <option value='Tester'>Tester</option>
                                <option value='HR'>HR</option>
                        </Input>
                        <div className="d-flex justify-content-center gap-3">
            <Button variant="secondary" size="sm" onClick={() => setEditModal(false)}>No</Button>
            <Button variant="danger" size="sm" onClick={confirmEdit}>Update</Button>
        </div>

                      </ModalBody> 
         </Modal>

        </Fragment>
    );
};

export default UserRow;
