import React from 'react';

const Footer = (props) =>{
    return(
      <footer {...props.attrFooter}> {props.children}</footer>
    );
};

export default Footer;