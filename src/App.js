import React, { Component } from 'react';
import './App.css';
import CardForm from './CardForm.js';
import Prompt from './Prompt.js';
import Answer from './Answer.js';

class App extends Component {
  state = { cards: [], hideAnswer: true };

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({ cards: [card, ...cards] });
  };

  toggleAnswer() {
    this.setState({
      hideAnswer: !this.state.hideAnswer,
    });
  }

  // shuffleCards = (cards) => {
  //   let randomCard = Math.floor(Math.random() * cards.length);
  //   return cards[randomCard];
  // };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <CardForm addCard={this.addCard} />
        {this.state.hideAnswer && <Prompt cards={cards} />}
        {!this.state.hideAnswer && <Answer cards={cards} />}
        <button className="btn" onClick={this.toggleAnswer.bind(this)}>
          Flip Card
        </button>
      </div>
    );
  }
}

export default App;
