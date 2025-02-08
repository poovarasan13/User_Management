import React from 'react';

const BlockQuotes = (props) =>{
    return(
      <blockquote {...props.attrBlockQuote}>
        {props.children}
      </blockquote>
    );
}; 

export default BlockQuotes;