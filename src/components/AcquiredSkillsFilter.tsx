import React from 'react';

const AcquiredSkillsFilter = (props: { isChecked: boolean; handleChange: React.ChangeEventHandler }) => {
  const { handleChange, isChecked } = props;
  return (
    <div className="acquired-skills-filter">
      <input id="acquired-skills-filter-input" type="checkbox" onChange={handleChange} checked={isChecked}></input>
      <label htmlFor="acquired-skills-filter-input">Only show acquired skills</label>
    </div>
  );
};

export default AcquiredSkillsFilter;
