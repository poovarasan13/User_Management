import React, { Fragment } from 'react';
import { LI, UL } from '../../../../AbstractElements';

const CommenUL = () => {
    return (
        <Fragment>
            <UL attrUL={{ className: 'flex-row' }}>
                <LI></LI>
                <LI></LI>
                <LI></LI>
            </UL>
        </Fragment>
    );
};
export default CommenUL;