import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs, P } from '../../../AbstractElements';
import { SampleCard } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const Sample = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Sample Page" parent="Pages" title="Sample Page" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={SampleCard} span1="lorem ipsum dolor sit amet, consectetur adipisicing elit" />
              <CardBody>
                <P>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sample;