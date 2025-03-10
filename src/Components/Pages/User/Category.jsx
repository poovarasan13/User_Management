import React, { Fragment, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Row, Table } from "reactstrap";
import UserContext from "../../../_helper/User";
import UserRow from "./UserRow";
const Category = () => {
  const [getRole, setGetRole] = useState("");
  const [getStatus, setGetStatus] = useState("");
  const [getGender, setGetGender] = useState("");
  const { user } = useContext(UserContext);
  const userData = user;
  // const handleInput = (e) => {
  //   setGetRole(e.target.value);
  // };
  const filteredUsers = getRole
  ? userData.filter((data) => 
    (getRole ? data.role === getRole :true) &&
  (getStatus ? data.status === getStatus : true) &&
  (getGender ? data.gender===getGender:true)
) :userData;
  return (
    <Fragment>
      <Container>
        <div className="page-title">
          <Row>
            {/* <Col xs="7"></Col> */}
            <Col>
  <Form.Group className="d-flex align-items-center gap-3">
  
    <div className="d-flex align-items-center gap-2">
      <Form.Label className="mb-0">Select Role:</Form.Label>
      <Form.Select
        name="role"
        value={getRole}
        onChange={(e) => setGetRole(e.target.value)}
        className="form-select form-select-sm w-auto"
      >
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
        <option value="Tester">Tester</option>
        <option value="HR">HR</option>
      </Form.Select>
    </div>

    <div className="d-flex align-items-center gap-2">
      <Form.Label className="mb-0">Status:</Form.Label>
      <Form.Select
        name="status"
        value={getStatus}
        onChange={(e) => setGetStatus(e.target.value)}
        className="form-select form-select-sm w-auto"
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </Form.Select>
    </div><div className="d-flex align-items-center gap-2">
      <Form.Label className="mb-0">Gender:</Form.Label>
      <Form.Select
        name="gender"
        value={getGender}
        onChange={(e) => setGetGender(e.target.value)}
        className="form-select form-select-sm w-auto"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Form.Select>
    </div>

  </Form.Group>
</Col>

          </Row>
        </div>
        {filteredUsers.length===0 &&
          <Row>
            <Col>
            No data Found
            </Col></Row>}
        <div className="table-responsive">
          
      {  filteredUsers.length> 0 &&  <Table bordered className="align-middle">
            <thead>
              <tr className="table-active">
                <td>S No.</td>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {  filteredUsers.map((data, index) => (
                <tr key={index}>
                  <UserRow
                    index={index}
                    id={data.id}
                    name={data.name}
                    mobile={data.mobile}
                    email={data.email}
                    gender={data.gender}
                    role={data.role}
                    javascript
                    status={data.status}
                  />
                </tr>
              ))}
            </tbody>
          </Table>}
        </div>
      </Container>
    </Fragment>
  );
};

export default Category;
