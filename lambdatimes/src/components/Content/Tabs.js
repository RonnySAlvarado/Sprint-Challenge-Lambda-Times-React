import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((eachTab, index) => <Tab eachTab={eachTab} key={index} selected={props.selected} changeSelected={props.changeSelected} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  changeSelected: PropTypes.func,
  selected: PropTypes.string
};

export default Tabs;
