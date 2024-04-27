import React from 'react';

const Container = (props: { children: React.ReactElement }) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
