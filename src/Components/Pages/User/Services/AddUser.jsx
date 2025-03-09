import {Fragment, useContext, useState} from 'react';
import { Button, Modal,ModalFooter,ModalHeader, ModalBody,Label ,Input} from 'reactstrap';
import UserContext from '../../../../_helper/User';

const AddUser=()=>{
    const {addUser}=useContext(UserContext);
    const random = () => Math.floor(Math.random() * 1000000);
    const[openModal,setOpenModal]=useState(false);
    const [userDetails,setUserDetails]=useState({
        id:random(),
        name:'',
        mobile:'',
        email:'',
        gender:'Male',
        role:'Developer',
        status:'inactive'
    })
    const handleAddTask = () => {
    console.log(userDetails);
    addUser(userDetails);
    // const r = () => Math.floor(Math.random() * 1000000);
    setUserDetails({id:random(),name:'',mobile:'',email:'',gender:'Male',role:'Developer',status:'inactive'})
    setOpenModal(false)
    }
    const handleInput=(e)=>{
        const{name,value}=e.target;
        setUserDetails(prev =>({...prev,[name]:value}));
    }
    const toggleModal=()=>{
          setOpenModal(!openModal);
    }      
    return(
        <Fragment>
             <Button onClick={toggleModal} className=' ms-auto btn btn-sm btn-success'>
                    Add User
                </Button>
                <Modal isOpen={openModal} toggle={toggleModal}>
                      <ModalHeader toggle={toggleModal}>
                             Add New User
                      </ModalHeader>
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
                        {/* <Label>Status:</Label>
                        <Input type="text" name="status" value={userDetails.status} onChange={handleInput}/> */}
                      </ModalBody>

        <ModalFooter>
          <Button color='primary' onClick={handleAddTask}>Add</Button>{' '}
          <Button color='secondary' onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
                </Modal>
        </Fragment>
    )
}

export default AddUser;