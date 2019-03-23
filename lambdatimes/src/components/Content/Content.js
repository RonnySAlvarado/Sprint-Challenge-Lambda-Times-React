import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState ({ tabs: tabData, cards: cardData })
  }

  changeSelected = tab => {
    this.setState ({ selected: tab })
  };

  filterCards = () => {
    let filteredCards = this.state.cards.filter(eachCard => eachCard.tab === this.state.selected);

    if (this.state.selected === 'all') {
      return this.state.cards;
    }
    else {
      return filteredCards;
    }
  }

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selected={this.selected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
