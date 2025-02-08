import React from 'react';
import { Button } from 'reactstrap';

const Btn = (props) =>{
    return <Button {...props.attrBtn}>{props.children}</Button>;
};

export default Btn;