import React, { Fragment, useContext, useState } from "react";
import { Row, Container, Table } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import UserContext from "../../../_helper/User";
import UserRow from "./UserRow";
import PageNation from "./Services/PageNation";
import Filter from "./Services/Filter";

const UserPage = () => {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc"); 
  const [page, setPage] = useState(1);
  const [userperPerson, setUserPerPerson] = useState(5);

  const userData = user;

  const filteredUsers = userData.filter(
    (data) =>
      search
        ? data.name.toLowerCase().includes(search.toLowerCase()) ||
          data.email.toLowerCase().includes(search.toLowerCase())
        : true
  );

  const handleSort = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sort === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const totaluser = sortedUsers.length;
  const last = page * userperPerson;
  const first = last - userperPerson;
  const finalData = sortedUsers.slice(first, last);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Users" parent="Pages" title="Users" />
      <Container fluid={true}>
        <Row className="pb-3">
          <Filter data={true} setSearch={setSearch} search={search} />
        </Row>

        <div className="table-responsive">
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
                    index={index + first}
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
          <PageNation
            totaluser={totaluser}
            setPage={setPage}
            userperPerson={userperPerson}
            setUserPerPerson={setUserPerPerson}
            page={page}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default UserPage;
