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
    const { cards } = this.state;
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <Card cards={cards} />
      </div>
    );
  }
}

export default App;
