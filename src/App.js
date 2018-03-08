import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import CardForm from './CardForm.js';

class App extends Component {
  state = { cards: [] };

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({ cards: [card, ...cards] });
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <List cards={cards} />
      </div>
    );
  }
}

export default App;
