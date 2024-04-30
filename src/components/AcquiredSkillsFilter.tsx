import React from 'react';

const AcquiredSkillsFilter = (props: { handleChange: React.ChangeEventHandler }) => (
  <div className="acquired-skills-filter">
    <input id="acquired-skills-filter-input" type="checkbox" onChange={props.handleChange}></input>
    <label htmlFor="acquired-skills-filter-input">Only show acquired skills</label>
  </div>
);

export default AcquiredSkillsFilter;
