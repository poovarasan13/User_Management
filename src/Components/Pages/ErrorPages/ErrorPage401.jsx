import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Media } from "reactstrap";
import { H2, P } from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE } from "../../../Constant";
import CustomizerContext from '../../../_helper/Customizer';
import sad from '../../../assets/images/other-images/sad.png';

const Error401 = () => {
    const { layoutURL } = useContext(CustomizerContext);
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="error-wrapper">
                    <Container>
                        <Media body className="img-100" src={sad} alt="" />
                        <div className="error-heading">
                            <H2 attrH2={{ className: "headline font-warning" }} >{"401"}</H2>
                        </div>
                        <Col md="8 offset-md-2">
                            <P attrPara={{ className: "sub-content" }} >{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</P>
                        </Col>
                        <Link to={`${process.env.PUBLIC_URL}//${layoutURL}`}><Button color="warning-gradien" size='lg'>{BACK_TO_HOME_PAGE}</Button></Link>
                    </Container>
                </div>
            </div>
        </Fragment>
    );
};

export default Error401;