import React from 'react';
import { Alert } from 'reactstrap';
import Btn from '../Button';

const Alerts = (props) => {
  return (
    <Alert {...props.attrAlert} >
      {props.children}
      {props.closeBtn ? <Btn attrBtn={props.attrBtn} >
        <div className={props.divCls} dangerouslySetInnerHTML={{ __html: props.btnContent }} /></Btn> : ''}
    </Alert>
  );
};

export default Alerts;