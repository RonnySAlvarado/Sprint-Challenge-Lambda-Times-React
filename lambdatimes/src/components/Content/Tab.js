import React from 'react';

const Tab = props => {
  
  let active = 'tab';

  if (props.selected === props.eachTab) {
    active = 'tab active-tab';
  }
  else {
    active = 'tab';
  }

  return (
    <div className={active} onClick={() => props.changeSelected(props.eachTab)}>
      {props.eachTab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
