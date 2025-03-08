import React, { Fragment, useContext, useState } from 'react';
import UserContext from '../../../_helper/User';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';

const UserRow = ({ index, id, name, mobile, email, gender, role, status }) => {
    const { deleteUser } = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = () => {
        alert("You can edit");
    };

    const handleDelete = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        deleteUser(id);
        setShowModal(false);
    };

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

            <Modal show={showModal} onHide={() => setShowModal(false)} size="sm" centered>
           <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold text-center w-100">Confirm Deletion</Modal.Title>
    </Modal.Header>
    
    <Modal.Body className="text-center">
        <p className="text-muted">Are you sure you want to delete this?</p>
        <div className="d-flex justify-content-center gap-3">
            <Button variant="secondary" size="sm" onClick={() => setShowModal(false)}>No</Button>
            <Button variant="danger" size="sm" onClick={confirmDelete}>Yes</Button>
        </div>
    </Modal.Body>
</Modal>

        </Fragment>
    );
};

export default UserRow;
