import React from 'react';

const SkillList = (props: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <ul role="list" className="skill-list">
      {props.children}
    </ul>
  );
};

export default SkillList;
