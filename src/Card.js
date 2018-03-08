import React from 'react';

class Card extends React.Component {
  state = { hideAnswer: false };

  toggleAnswer() {
    this.setState({
      hideAnswer: !this.state.hideAnswer,
    });
  }

  render() {
    if (!this.hideAnswer) {
      return (
        <div>
          <ul>
            {this.props.cards.map((card) => (
              <div className="card">
                {card.front}
                <br />
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
            {this.props.cards.map((card) => (
              <div className="card">
                {card.back} <br />
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
