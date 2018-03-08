import React, { Component } from 'react';
import './App.css';
import CardForm from './CardForm.js';
import Card from './Card.js';

class App extends Component {
  state = { cards: [] };

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({ cards: [card, ...cards] });
  };

  // shuffleCards = (cards) => {
  //   let randomCard = Math.floor(Math.random() * cards.length);
  //   return cards[randomCard];
  // };

  render() {
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <Card cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
