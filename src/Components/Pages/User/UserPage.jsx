import React, { Fragment, useContext } from "react";
import { Container, Table } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import UserContext from "../../../_helper/User";

// import AddUser from './Services/AddUser';
import UserRow from "./UserRow";
const UserPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  //   const handleEdit=()=>{
  //   alert("you can edit");
  //   }
  //   const handleDelete=()=>{
  //     deleteUser()
  //  alert("you can delete")
  //   }
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Users" parent="Pages" title="Users" />
      <Container fluid={true}>
        {/* <Row>
                <Col md="2" className="ms-auto ">
                <AddUser/>
                </Col>
          </Row> */}
        <div className="table-responsive">
          <Table bordered className="align-middle">
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
              {user.map((data, index) => (
                <tr key={index}>
                  <UserRow
                    index={index}
                    id={data.id}
                    name={data.name}
                    mobile={data.mobile}
                    email={data.email}
                    gender={data.gender}
                    role={data.role}
                    status={data.status}
                  />
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Fragment>
  );
};
export default UserPage;
