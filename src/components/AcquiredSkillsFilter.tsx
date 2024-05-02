import React from 'react';

const AcquiredSkillsFilter = (props: { handleChange: React.ChangeEventHandler }) => {
  const { handleChange } = props;
  return (
    <div className="acquired-skills-filter">
      <input id="acquired-skills-filter-input" type="checkbox" onChange={handleChange}></input>
      <label htmlFor="acquired-skills-filter-input">Only show acquired skills</label>
    </div>
  );
};

export default AcquiredSkillsFilter;
