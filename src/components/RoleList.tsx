import React from 'react';

const RoleList = (props: { children: React.ReactElement | React.ReactElement[] }) => (
  <ul role="list" className="role-list">
    {props.children}
  </ul>
);

export default RoleList;
