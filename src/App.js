import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import CardForm from './CardForm.js';

class App extends Component {
  state = {
    cards: [
      { front: 'Rails', back: 'Framework' },
      { front: 'React', back: 'Library' },
      { front: 'Jquery', back: 'Library' },
    ],
  };

  render() {
    const { cards } = this.state;

    return <List cards={cards} />;
  }
}

export default App;
