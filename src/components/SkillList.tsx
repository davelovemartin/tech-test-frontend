import React from 'react';

const SkillList = (props: { children: (JSX.Element | undefined)[] }) => {
  return (
    <ul role="list" className="skill-list">
      {props.children}
    </ul>
  );
};

export default SkillList;
