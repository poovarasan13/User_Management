import React, { Fragment, useContext, useState } from "react";
import {Row, Container, Table } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import UserContext from "../../../_helper/User";

// import AddUser from './Services/AddUser';
import UserRow from "./UserRow";
import PageNation from "./Services/PageNation";
import Filter from "./Services/Filter";
const UserPage = () => {
  // const [getRole, setGetRole] = useState("");
  // const [getStatus, setGetStatus] = useState("");
  // const [getGender, setGetGender] = useState("");
  const { user } = useContext(UserContext);
  const [search,setSearch]=useState("");
  const userData=user;
      const filteredUsers = userData.filter(
        (data) =>
          // (getRole ? data.role === getRole : true) &&
          // (getStatus ? data.status === getStatus : true) &&
          // (getGender ? data.gender === getGender : true) &&
          (search ? 
            data.name.toLowerCase().includes(search.toLowerCase()) || 
            data.email.toLowerCase().includes(search.toLowerCase()): true) 
      );
  // console.log(user);
  const totaluser=filteredUsers.length;
  const[page,setPage]=useState(1);
  const[userperPerson,setUserPerPerson]=useState(5);
  const last=page*userperPerson;
  const first=last-userperPerson;
  const finalData=filteredUsers.slice(first,last);
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
        <Row className="pb-3">           <Filter
                  data={true}
                  setSearch={setSearch}
                  search={search}
                  
            />
            </Row>
 
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
              {finalData.map((data, index) => (
                <tr key={index}>
                  <UserRow
                    index={index+first}
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
          <PageNation totaluser={totaluser} setPage={setPage} userperPerson={userperPerson} setUserPerPerson={setUserPerPerson} page={page}/>
        </div>
      </Container>
    </Fragment>
  );
};
export default UserPage;
