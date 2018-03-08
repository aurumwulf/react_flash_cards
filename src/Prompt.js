import React from 'react';

const Prompt = ({ cards }) => (
  <div>
    <ul>{cards.map((card) => <div className="card">{card.front}</div>)}</ul>
  </div>
);

export default Prompt;
