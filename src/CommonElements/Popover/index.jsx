import React from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const Popovers = (props) =>(
  <Popover
        placement={props.placement}
        isOpen={props.isOpen}
        target={props.target}
        toggle={props.toggle}
        trigger={props.trigger}
        >
    {props.title ? <PopoverHeader>{props.title}</PopoverHeader> :''}
    <PopoverBody>
      {props.children}
    </PopoverBody>
  </Popover>
);


export default Popovers;