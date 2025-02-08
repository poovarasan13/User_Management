import React, { Fragment } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationClass = (props) => {
    return (
        <Fragment>
            <Pagination {...props.attrPagination}>
                <PaginationItem>
                    <PaginationLink href="#javascript">{props.children}</PaginationLink>
                </PaginationItem>
            </Pagination>
        </Fragment>
    );
};

export default PaginationClass;