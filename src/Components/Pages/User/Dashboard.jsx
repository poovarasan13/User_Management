import React, { Fragment, useContext } from 'react';
import UserContext from '../../../_helper/User';
import { Breadcrumbs } from '../../../AbstractElements'
import { Container ,Row,Col, Button} from 'reactstrap'
import {DashboardData} from '../../../Data/User/Dashboard.jsx'
const Dashboard = () => {
  const {user}=useContext(UserContext);
  const totalCount=user.length;
  const activeCount=user.filter((data)=>data.status==='active').length;
  const maleCount=user.filter((data)=>data.gender==='male').length;

  const femaleCount=user.filter((data)=>data.gender==='female').length;

  

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dashboard" parent="Pages" title="Dashboard" />
      <Container fluid={true} className="">
        
        <Row className="g-3 ">
          {DashboardData.map((data, index) => (
            <Col key={index} className={`${data.color} text-dark text-center  mx-1 py-2 shadow rounded`}>
              <h2>{
              (data.label==="Total User" &&  <>{totalCount}</>)
                || (data.label==="Total Active" &&  <>{activeCount}</> )
                || (data.label==="Total Men" &&  <>{maleCount}</>)
                || (data.label==="Total Women" &&  <>{femaleCount}</> )
                }
                </h2>
              <p className="mb-0">{data.label}</p>
              <hr />
              <Button color="light">Visit</Button>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Dashboard
