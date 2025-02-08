import React from 'react';
import { CardHeader } from 'reactstrap';
import { H5 } from '../../../../AbstractElements';

const CommonHeader2 = (props) => {
  return (
    <CardHeader className="card-no-border">
      <H5>{props.heading}</H5>
      {/* <div className="card-header-right">
          <UL attrUL={{ className:'list-unstyled card-option simple-list' }} >
            <LI><i className="fa fa-spin fa-cog"></i></LI>
            <LI><i className="view-html fa fa-code"></i></LI>
            <LI><i className="icofont icofont-maximize full-card"></i></LI>
            <LI><i className="icofont icofont-minus minimize-card"></i></LI>
            <LI><i className="icofont icofont-refresh reload-card"></i></LI>
            <LI><i className="icofont icofont-error close-card"></i></LI>
          </UL>
        </div> */}
    </CardHeader>
  );
};

export default CommonHeader2;
