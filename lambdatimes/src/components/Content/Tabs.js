import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsStyle = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopicsStyle = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  .tab {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
`;

const TitleStyle = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsStyle>
      <TopicsStyle>
        <TitleStyle>TRENDING TOPICS:</TitleStyle>
        {props.tabs.map((eachTab, index) => <Tab eachTab={eachTab} key={index} selected={props.selected} changeSelected={props.changeSelected} />)}
      </TopicsStyle>
    </TabsStyle>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  changeSelected: PropTypes.func,
  selected: PropTypes.string
};

export default Tabs;
