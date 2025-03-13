import React, { Fragment, useContext, useState } from "react";
// import { Form } from "react-bootstrap";
import { Col, Container, Row, Table } from "reactstrap";
import UserContext from "../../../_helper/User";
import UserRow from "./UserRow";
import Filter from "./Services/Filter";
import PageNation from "./Services/PageNation";
const Category = () => {
  const [getRole, setGetRole] = useState("");
  const [getStatus, setGetStatus] = useState("");
  const [getGender, setGetGender] = useState("");
  const { user } = useContext(UserContext);
  const [search,setSearch]=useState("");
  const [sort, setSort] = useState("asc"); 
  // console.lgo(search);
  // const handleInput = (e) => {
  //   setGetRole(e.target.value);
  // };
      const userData=user;
      const filteredUsers = userData.filter(
        (data) =>
          (getRole ? data.role === getRole : true) &&
          (getStatus ? data.status === getStatus : true) &&
          (getGender ? data.gender === getGender : true) &&
          (search ? 
            data.name.toLowerCase().includes(search.toLowerCase()) || 
            data.email.toLowerCase().includes(search.toLowerCase()): true) 
      );
      
      const handleSort = () => {
        setSort(sort === "asc" ? "desc" : "asc");
      };
    
      const sortedUsers = [...filteredUsers].sort((a, b) => {
        return sort === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
    const totaluser=sortedUsers.length;
    const[page,setPage]=useState(1);
    const[userperPerson,setUserPerPerson]=useState(5);
    const last=page*userperPerson;
    const first=last-userperPerson;
    const finalData=sortedUsers.slice(first,last);
  
  return (
    <Fragment>
      <Container>
        <div className="page-title">
          <Row>
            {/* <Col xs="7"></Col> */}
            <Col>
            {/* <Filter */}
            <Filter
               getRole={getRole}
               getStatus={getStatus}
               getGender={getGender}
               setGetGender={setGetGender}
               setGetRole={setGetRole}
               setGetStatus={setGetStatus}
               setSearch={setSearch}
               search={search}
               data={false}
            />
            </Col>
          </Row>
        </div>
        {filteredUsers.length === 0 && (
          <Row>
            <Col>No data Found</Col>
          </Row>
        )}
        <div className="table-responsive">
          {finalData.length > 0 && (
            <Fragment>
            <Table bordered className="align-middle">
              <thead>
                <tr className="table-active">
                  <td>S No.</td>
                  <th style={{ cursor: "pointer" }} onClick={handleSort}>
                  Name {sort === "asc" ? "▲" : "▼"}
                </th>
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
            </Fragment>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default Category;
