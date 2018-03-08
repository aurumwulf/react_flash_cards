import React from 'react';

class Card extends Component {
  state = { hideAnswer: true };

  toggleAnswer() {
    this.setState({
      hideAnswer: !this.state.hideAnswer,
    });
  }

  render() {
    if (this.hideAnswer) {
      return (
        <div>
          <ul>
            {cards.map((card) => (
              <div className="card">
                {card.front}
                <button className="btn" onClick={this.toggleAnswer.bind(this)}>
                  Flip
                </button>
              </div>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {cards.map((card) => (
              <div className="card">
                {card.back}{' '}
                <button className="btn" onClick={this.toggleAnswer.bind(this)}>
                  Flip
                </button>
              </div>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Card;
