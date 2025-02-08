import React from 'react';
import CountUp from 'react-countup';
import { CardHeader } from 'reactstrap';
import { LI, UL, P, H4 } from '../../../../../AbstractElements';

const CommonHeader = (props) => {
    return (
      <CardHeader className="card-no-border">
        <div className="card-header-right">
          <UL attrUL={{ className:'list-unstyled card-option simple-list' }} >
            <LI><i className="fa fa-spin fa-cog"></i></LI>
            <LI><i className="view-html fa fa-code"></i></LI>
            <LI><i className="icofont icofont-maximize full-card"></i></LI>
            <LI><i className="icofont icofont-minus minimize-card"></i></LI>
            <LI><i className="icofont icofont-refresh reload-card"></i></LI>
            <LI><i className="icofont icofont-error close-card"></i></LI>
          </UL>
        </div>
        <div className="media">
          <div className="media-body">
            <P><span className="f-w-500 font-roboto">{props.heading}</span><span className="f-w-700 font-primary ms-2">{props.val}</span></P>
            <H4 className="f-w-500 mb-0 f-26">{props.unit}<span className="counter"><CountUp  end={props.rate} /></span></H4>
          </div>
        </div>
      </CardHeader>
    );
};

export default CommonHeader;
