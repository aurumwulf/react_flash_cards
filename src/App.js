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

  render() {
    const { cards } = this.state;
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <Prompt cards={cards} />
        <button class="btn" onClick={this.toggleAnswer.bind(this)}>
          Show Answer
        </button>
        {!this.state.hideAnswer && <Answer cards={cards} />}
      </div>
    );
  }
}

export default App;
