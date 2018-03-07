import React from 'react';

const List = ({ cards }) => (
  <div>
    <div>
      <ul>{cards.map((card) => <div className="card">{card.front}</div>)}</ul>
    </div>
    <div>
      <ul>{cards.map((card) => <div className="card">{card.back}</div>)}</ul>
    </div>
  </div>
);

export default List;
