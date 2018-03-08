import React from 'react';

class CardForm extends React.Component {
  state = { id: '', front: '', back: '' };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard({
      id: this.state.id,
      front: this.state.front,
      back: this.state.back,
    });
    this.setState({ id: '', front: '', back: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.id}
          name="id"
          onChange={this.handleChange}
          required
          placeholder="Add ID"
        />
        <br />
        <input
          value={this.state.front}
          name="front"
          onChange={this.handleChange}
          required
          placeholder="Add Front"
        />
        <br />
        <input
          value={this.state.back}
          name="back"
          onChange={this.handleChange}
          required
          placeholder="Add Back"
        />
        <br />
        <button className="btn">Submit</button>
      </form>
    );
  }
}

export default CardForm;
