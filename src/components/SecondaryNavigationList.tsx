import React from 'react';

const SecondaryNavigationList = (props: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <ul role="list" className="secondary-navigation-list">
      {props.children}
    </ul>
  );
};

export default SecondaryNavigationList;
