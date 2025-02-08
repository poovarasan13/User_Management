import React from 'react';
import { Fragment } from 'react';
import { ListGroupItem } from 'reactstrap';

const LI = (props) =>{
   return (
     <Fragment>
       <ListGroupItem {...props.attrLI}>{props.val? <div dangerouslySetInnerHTML={{ __html:props.val }}/> :''} {props.children}</ListGroupItem>
     </Fragment>
      );
};

export default LI;