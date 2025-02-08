import React from 'react';

const OL = (props) =>{
    return(
      <ol {...props.attrOL}>
        {props.children}
      </ol>
    );
};

export default OL;