import React from 'react';
import { ListGroup } from 'reactstrap';
import ListItems from './ListItem';

const UL = (props) => {
  return <ListGroup {...props.attrUL}>{props.listItem ? props.listItem.map((item, i) => <ListItems val={item} attrLI={props.attrLI} key={i} />) : props.children}</ListGroup>;
};

export default UL;
