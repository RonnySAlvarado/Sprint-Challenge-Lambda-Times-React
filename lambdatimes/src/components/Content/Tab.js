import React from 'react';
import PropTypes from 'prop-types';

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

Tab.propTypes = {
  tabs: PropTypes.array,
  changeSelected: PropTypes.func,
  selected: PropTypes.string
};

export default Tab;
