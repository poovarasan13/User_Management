import React, { Fragment } from 'react';

const Ribbon = (props) => {
    return (
        <Fragment>
            <div {...props.attrRibbons} >{props.children}</div>
        </Fragment>
    );
};

export default Ribbon;