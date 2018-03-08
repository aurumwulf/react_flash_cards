import React from 'react';

const Answer = ({ cards }) => (
  <div>
    <ul>{cards.map((card) => <div className="card">{card.back}</div>)}</ul>
  </div>
);

export default Answer;
