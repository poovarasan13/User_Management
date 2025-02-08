import React from 'react';
import { Badge } from 'reactstrap';

const Badges = (props) =>(
  <Badge {...props.attrBadge}>{props.children}</Badge>
);

export default Badges;