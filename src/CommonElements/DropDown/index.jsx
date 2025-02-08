import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import Btn from '../Button';

const Dropdowns = (props) =>(
  <Dropdown {...props.attrDropDown}>
    <Btn attrBtn={props.attrDropBtn} ><div dangerouslySetInnerHTML={{ __html:props.dropBtnContent }} /></Btn>
    <DropdownMenu {...props.attrDropMenu}>
      {props.dropItem.map((item,i) => 
        <DropdownItem {...props.attrDropItem} key={i}>{item.item}</DropdownItem>
      )}
    </DropdownMenu>
  </Dropdown>
);

export default Dropdowns;